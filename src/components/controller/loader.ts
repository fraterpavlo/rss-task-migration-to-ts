import {IOptionsInConstructorOfLoader, IGetRespFirstParam, TObjWithStringKeys, VoidCallbackType} from "../types/types";

class Loader {
    protected baseLink: string;
    protected options: IOptionsInConstructorOfLoader;

    constructor(baseLink: string, options: IOptionsInConstructorOfLoader) {
        this.baseLink = baseLink;
        this.options = options;
    }

    getResp<T>(
        { endpoint, options = {} }: IGetRespFirstParam,
        callback: VoidCallbackType<T> = () => {
            console.error('No callback for GET response');
        }
    ): void {
        this.load('GET', endpoint, callback, options);
    }

    errorHandler(res: Response) {
        if (!res.ok) {
            if (res.status === 401 || res.status === 404)
                console.log(`Sorry, but there is ${res.status} error: ${res.statusText}`);
            throw Error(res.statusText);
        }

        return res;
    }

    makeUrl(options: {sources?: string}, endpoint: string) {
        const urlOptions: TObjWithStringKeys = { ...this.options, ...options };
        let url = `${this.baseLink}${endpoint}?`;

        Object.keys(urlOptions).forEach(function (key) {
           return  url += `${key}=${urlOptions[key]}&`;
        });

        return url.slice(0, -1);
    }

    load<T>(method: string, 
            endpoint: string, 
            callback: VoidCallbackType<T> = () => {
                console.error('No callback for GET response');
            }, 
            options = {}) {
        fetch(this.makeUrl(options, endpoint), { method })
            .then(this.errorHandler)
            .then((res) => res.json())
            .then((data) => callback(data))
            .catch((err) => console.error(err));
    }
}

export default Loader;
