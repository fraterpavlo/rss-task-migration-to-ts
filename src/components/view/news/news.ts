import {IDrawDataInNews} from "../../types/types";
import './news.css';

class News {
    draw(data: IDrawDataInNews[]) {
        const news = data.length >= 10 ? data.filter((_item, idx) => idx < 10) : data;

        const fragment = document.createDocumentFragment();
        const newsItemTemp = document.querySelector('#newsItemTemp') as HTMLTemplateElement;
        if (!newsItemTemp) console.error('#newsItemTemp not found');

        news.forEach((item, idx) => {
            const newsClone = newsItemTemp.content.cloneNode(true) as HTMLElement;

            if (!newsClone.querySelector('.news__item')) console.error('".news__item" element not found');
            if (idx % 2) newsClone.querySelector('.news__item')!.classList.add('alt');

            if (!newsClone.querySelector('.news__meta-photo')) console.error('".news__meta-photo" element not found');
            (newsClone.querySelector('.news__meta-photo') as HTMLElement).style.backgroundImage = `url(${
                item.urlToImage || 'img/news_placeholder.jpg'
            })`;
            
            if (!newsClone.querySelector('.news__meta-author')) console.error('".news__meta-author" element not found');
            newsClone.querySelector('.news__meta-author')!.textContent = item.author || item.source.name;

            if (!newsClone.querySelector('.news__meta-date')) console.error('".news__meta-date" element not found');
            newsClone.querySelector('.news__meta-date')!.textContent = item.publishedAt
                .slice(0, 10)
                .split('-')
                .reverse()
                .join('-');

            if (!newsClone.querySelector('.news__description-title')) console.error('".news__description-title" element not found');
            newsClone.querySelector('.news__description-title')!.textContent = item.title;

            if (!newsClone.querySelector('.news__description-source')) console.error('".news__description-source" element not found');
            newsClone.querySelector('.news__description-source')!.textContent = item.source.name;

            if (!newsClone.querySelector('.news__description-content')) console.error('".news__description-content" element not found');
            newsClone.querySelector('.news__description-content')!.textContent = item.description;

            if (!newsClone.querySelector('.news__read-more a')) console.error('".news__read-more a" element not found');
            newsClone.querySelector('.news__read-more a')!.setAttribute('href', item.url);

            fragment.append(newsClone);
        });

        document.querySelector('.news')!.innerHTML = '';
        document.querySelector('.news')!.appendChild(fragment);
    }
}

export default News;
