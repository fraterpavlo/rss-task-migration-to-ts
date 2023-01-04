import News from './news/news';
import Sources from './sources/sources';
import {IDrawNewsData, IDrawSourcesData} from "../types/types";

export class AppView {
    news: News;
    sources: Sources;
    constructor() {
        this.news = new News();
        this.sources = new Sources();
    }

    drawNews(data: IDrawNewsData) {
        const values = data?.articles ? data?.articles : [];
        this.news.draw(values);
    }

    drawSources(data: IDrawSourcesData) {
        const values = data?.sources ? data?.sources : [];
        this.sources.draw(values);
    }

    filterSources(event: Event): void {  
        if ((event.target as HTMLElement).tagName !== "LI") return;

        let filterCategory = (event.target as HTMLElement).dataset['sourceCategory'];
        console.log(filterCategory);

        const sourcesElements = document.querySelectorAll(".source__item");
        sourcesElements.forEach(item => {
            item.classList.remove("hidden");
            if ((item as HTMLElement).dataset['sourceCategory'] !== filterCategory && filterCategory !== "all") {
                item.classList.add("hidden");
            }
            
        })

        
        
    }
}

export default AppView;
