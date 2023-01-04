import AppController from '../controller/controller';
import { AppView } from '../view/appView';
import { IDrawNewsData, IDrawSourcesData } from '../types/types';

class App {
    controller: AppController;
    view: AppView;
    constructor() {
        this.controller = new AppController();
        this.view = new AppView();
    }

    start() {
        if (!document.querySelector('.sources')) console.error('".sources" not found');
        if (!document.querySelector('.category-filter-contain')) console.error('".category-filter-contain" not found');

        document
            .querySelector('.sources')!
            .addEventListener('click', (e) => this.controller.getNews(e, (data: IDrawNewsData) => this.view.drawNews(data)));
        this.controller.getSources((data: IDrawSourcesData) => this.view.drawSources(data));

        document
            .querySelector('.category-filter-contain')!
            .addEventListener('click', (e) => this.view.filterSources(e));

    }
}

export default App;
