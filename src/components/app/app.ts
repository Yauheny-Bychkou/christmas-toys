import { AppView } from '../view/appView';
import { Toy } from './toy.model';

class App {
    searchInput: HTMLInputElement;

    constructor() {
        this.searchInput = document.querySelector('.header-search__panel-input')!;
    }

    start() {
        // document.querySelector('.start-page__button')!.addEventListener('click', (e: Event) => {
        //     this.searchInput.focus();
        //     document.querySelector('.start-page')!.classList.add('none'); //toy-page
        //     document.querySelector('.toy-page')!.classList.remove('none');
        // });

        fetch('./dbHeroes.json')
            .then((resp) => resp.json())
            .then((data: Toy[]) => {
                const view = new AppView(data);
                view.drawToys();
            });
    }
}

export default App;
