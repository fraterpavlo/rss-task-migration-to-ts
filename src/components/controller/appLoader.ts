import Loader from './loader';

class AppLoader extends Loader {
    constructor() {
        super('https://nodenews.herokuapp.com/', {
            apiKey: '5c3d6a91bc3a40fa9c88f85b2b46f600', // получите свой ключ https://newsapi.org/
        });
    }
}

export default AppLoader;
