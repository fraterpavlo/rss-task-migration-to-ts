import { VoidCallbackType} from "../types/types";
import AppLoader from './appLoader';

class AppController extends AppLoader {
    getSources<T>(callback: VoidCallbackType<T>) {
        super.getResp(
            {
                endpoint: 'sources',
            },
            callback
        );
    }

    getNews<T>(e: Event, 
               callback: VoidCallbackType<T>) {
        let target = e.target as HTMLElement;
        const newsContainer = e.currentTarget  as HTMLElement;

        while (target !== newsContainer) {
            if (target.classList.contains('source__item')) {
                if (!target.getAttribute('data-source-id')) console.error(`${target} element has invalid sourceId`)
                const sourceId = target.getAttribute('data-source-id') as string;
                if (newsContainer.getAttribute('data-source') !== sourceId) {
                    newsContainer.setAttribute('data-source', sourceId);
                    super.getResp(
                        {
                            endpoint: 'everything',
                            options: {
                                sources: sourceId,
                            },
                        },
                        callback
                    );
                }
                return;
            }
            target = target.parentNode as HTMLElement;
        }
    }
}

export default AppController;
