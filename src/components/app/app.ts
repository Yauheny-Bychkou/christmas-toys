import { AppView } from '../view/appView';

class App {
    searchInput: HTMLInputElement;
    constructor() {
        this.searchInput = document.querySelector('.header-search__panel-input')!;
    }

    start() {
        document.querySelector('.start-page__button')!.addEventListener('click', (e: Event) => {
            this.searchInput.focus();
            document.querySelector('.start-page')!.classList.add('none'); //toy-page
            document.querySelector('.toy-page')!.classList.remove('none');
        });

        fetch('./dbHeroes.json')
            .then((resp) => resp.json())
            .then((data: { [key: string]: string | number }[]) => {
                const view = new AppView(data);
                view.drawToys(data);
            });
    }
}

export default App;
