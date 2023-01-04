import './sources.css';
import {ISource} from "../../types/types";

class Sources {
    draw(data: ISource[]) {
        const fragment = document.createDocumentFragment();
        const sourceItemTemp = document.querySelector('#sourceItemTemp');
        if (!sourceItemTemp) console.error('"#sourceItemTemp" not found');

        data.forEach((item) => {
            const sourceClone = (sourceItemTemp as HTMLTemplateElement).content.cloneNode(true) as HTMLElement;

            if (!sourceClone.querySelector('.source__item-name')) console.error('".source__item-name" not found');
            sourceClone.querySelector('.source__item-name')!.textContent = item.name;

            if (!sourceClone.querySelector('.source__item')) console.error('".source__item" not found');
            sourceClone.querySelector('.source__item')!.setAttribute('data-source-id', item.id);
            sourceClone.querySelector('.source__item')!.setAttribute('data-source-category', item.category);


            fragment.append(sourceClone);
        });

        document.querySelector('.sources')!.append(fragment);
    }
}

export default Sources;
