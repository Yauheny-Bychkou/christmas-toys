import { AppView } from '../view/appView';
import { AppTrees } from '../view/appTrees';
import { Toy } from './toy.model';

class App {
    searchInput: HTMLInputElement;

    constructor() {
        this.searchInput = document.querySelector('.header-search__panel-input')!;
    }

    start() {
        const startButton = document.querySelector('.start-page__button');
        const startPage = document.querySelector('.start-page');
        const toyPage = document.querySelector('.toy-page');
        const treePage = document.querySelector(".tree-page");
        const headerButtonToys = document.querySelector(".header-nav__item--toys");
        const headerButtonTree = document.querySelector(".header-nav__item--tree");
        const headerButtonStart = document.querySelector(".header-nav__item--start");

        headerButtonStart!.addEventListener("click", () => {
            startPage!.classList.remove('none');
            toyPage!.classList.add('none');
            treePage!.classList.add("none");
        });
        headerButtonToys!.addEventListener("click", () => {
            toyPage!.classList.remove('none');
            startPage!.classList.add('none');
            treePage!.classList.add("none");
        });
        headerButtonTree!.addEventListener("click", () => {
            toyPage!.classList.add('none');
            treePage!.classList.remove("none");
            startPage!.classList.add('none');
        });
        startButton!.addEventListener('click', (e: Event) => {
            this.searchInput.focus();
            startPage!.classList.add('none');
            toyPage!.classList.remove('none');
        });


        fetch('./dbHeroes.json')
            .then((resp) => resp.json())
            .then((data: Toy[]) => {
                const view = new AppView(data);
                view.drawToys();

            });
    }
}

export default App;
