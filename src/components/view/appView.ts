import { Color } from "../app/color";
import { FilterState, IFilterState, IRangeFilter } from "../app/filter-state";
import { Shape } from "../app/shape";
import { Size } from "../app/size";
import { Toy } from "../app/toy.model";

const MIN_YEAR: number = 1940;
const MAX_YEAR: number = 2021;

export class AppView {
    inputRangeMinCount: HTMLInputElement;
    displayValOne: HTMLElement;
    displayValTwo: HTMLElement;
    sliderTrack: HTMLElement;
    sliderTrackTwo: HTMLElement;
    inputRangeMaxCount: HTMLInputElement;
    inputRangeMinYear: HTMLInputElement;
    inputRangeMaxYear: HTMLInputElement;
    displayValThree: HTMLElement;
    displayValFour: HTMLElement;
    minGap: number;
    minGapTwo: number;
    wrapColor: Element;
    wrapSize: Element;
    wrapFavorite: Element;
    wrapShape: Element;
    resetFilter: Element;
    select: HTMLInputElement;
    inputBell: HTMLInputElement;
    svgBellWhite: Element;
    svgBellYellow: Element;
    inputBall: HTMLInputElement;
    svgBallWhite: Element;
    svgBallYellow: Element;
    inputCone: HTMLInputElement;
    svgConeWhite: Element;
    svgConeYellow: Element;
    inputSnowflake: HTMLInputElement;
    svgSnowflakeWhite: Element;
    svgSnowflakeYellow: Element;
    inputFigure: HTMLInputElement;
    svgFigureWhite: Element;
    svgFigureYellow: Element;
    whiteInput: HTMLInputElement;
    whiteSvg: Element;
    yellowInput: HTMLInputElement;
    yellowSvg: Element;
    redInput: HTMLInputElement;
    redSvg: Element;
    blueInput: HTMLInputElement;
    blueSvg: Element;
    greenInput: HTMLInputElement;
    greenSvg: Element;
    bigInput: HTMLInputElement;
    bigSvg: Element;
    middleInput: HTMLInputElement;
    middleSvg: Element;
    smallInput: HTMLInputElement;
    smallSvg: Element;
    favoriteInput: HTMLInputElement;
    favoriteSvg: Element;
    searchInput: HTMLInputElement;
    searchClear: Element;
    wrapRangesCount: Element;
    wrapRangesYear: Element;

    filterState: IFilterState;
    filteredToys: Toy[];
    originalToys: Toy[];

    constructor(data: Toy[]) {
        this.inputRangeMinCount = document.getElementById('slider-1') as HTMLInputElement;
        this.inputRangeMaxCount = document.getElementById('slider-2') as HTMLInputElement;
        this.inputRangeMinYear = document.getElementById('slider-3') as HTMLInputElement;
        this.inputRangeMaxYear = document.getElementById('slider-4') as HTMLInputElement;
        this.displayValOne = document.querySelector('.toy-page__ranges-top-span--left') as HTMLElement;
        this.sliderTrack = document.querySelector('.slider-track-top') as HTMLElement;
        this.sliderTrackTwo = document.querySelector('.slider-track-bottom') as HTMLElement;
        this.displayValOne = document.querySelector('.toy-page__ranges-top-span--left') as HTMLElement;
        this.displayValTwo = document.querySelector('.toy-page__ranges-top-span--right') as HTMLElement;
        this.displayValThree = document.querySelector('.toy-page__ranges-bottom-span--left') as HTMLElement;
        this.displayValFour = document.querySelector('.toy-page__ranges-bottom-span--right') as HTMLElement;
        this.inputBell = document.querySelector('#toy-page__form-btn--bell')!;
        this.svgBellWhite = document.querySelector('.bell-white')!;
        this.svgBellYellow = document.querySelector('.bell-yellow')!;
        this.inputBall = document.querySelector('#toy-page__form-btn--ball')!;
        this.svgBallWhite = document.querySelector('.ball-white')!;
        this.svgBallYellow = document.querySelector('.ball-yellow')!;
        this.inputCone = document.querySelector('#toy-page__form-btn--cone')!;
        this.svgConeWhite = document.querySelector('.cone-white')!;
        this.svgConeYellow = document.querySelector('.cone-yellow')!;
        this.inputSnowflake = document.querySelector('#toy-page__form-btn--snowflake')!;
        this.svgSnowflakeWhite = document.querySelector('.snowflake-white')!;
        this.svgSnowflakeYellow = document.querySelector('.snowflake-yellow')!;
        this.inputFigure = document.querySelector('#toy-page__form-btn--figure')!;
        this.svgFigureWhite = document.querySelector('.figure-white')!;
        this.svgFigureYellow = document.querySelector('.figure-yellow')!;
        this.wrapColor = document.querySelector(`.toy-page__color`)!;
        this.wrapSize = document.querySelector(`.toy-page__size`)!;
        this.wrapFavorite = document.querySelector(`.toy-page__favorite`)!;
        this.wrapShape = document.querySelector(`.toy-page__shape`)!;
        this.resetFilter = document.querySelector('.toy-page__buttons-filter')!;
        this.whiteInput = document.querySelector('#btn-white')!;
        this.whiteSvg = document.querySelector('.svg-white')!;
        this.yellowInput = document.querySelector('#btn-yellow')!;
        this.yellowSvg = document.querySelector('.svg-yellow')!;
        this.redInput = document.querySelector('#btn-red')!;
        this.redSvg = document.querySelector('.svg-red')!;
        this.blueInput = document.querySelector('#btn-blue')!;
        this.blueSvg = document.querySelector('.svg-blue')!;
        this.greenInput = document.querySelector('#btn-green')!;
        this.greenSvg = document.querySelector('.svg-green')!;
        this.bigInput = document.querySelector('#toy-page__size-btn--big')!;
        this.bigSvg = document.querySelector('.svg-big')!;
        this.middleInput = document.querySelector('#toy-page__size-btn--middle')!;
        this.middleSvg = document.querySelector('.svg-middle')!;
        this.smallInput = document.querySelector('#toy-page__size-btn--small')!;
        this.smallSvg = document.querySelector('.svg-small')!;
        this.favoriteInput = document.querySelector('#toy-page__favorit-btn--like')!;
        this.favoriteSvg = document.querySelector('.svg-favorit')!;
        this.select = document.querySelector('.toy-page__sort-select')!;
        this.searchInput = document.querySelector('.header-search__panel-input')!;
        this.searchClear = document.querySelector('.header-search__panel-close')!;
        this.sliderTrack.style.backgroundImage = `linear-gradient(to right, #fff 0%, #24C5DB 0%, #24C5DB 100%, #fff 100% )`;
        this.sliderTrackTwo.style.backgroundImage = `linear-gradient(to right, #fff 0%, #24C5DB 0%, #24C5DB 100%, #fff 100% )`;
        this.minGap = 2;
        this.minGapTwo = 1;
        this.inputRangeMinCount.value = '0';
        this.inputRangeMaxCount.value = '9';
        this.inputRangeMinYear.value = '1940';
        this.inputRangeMaxYear.value = '2021';

        this.originalToys = data.slice();
        this.filteredToys = data.slice();
        this.filterState = new FilterState();

        this.wrapRangesCount = document.querySelector('.toy-page__ranges-top')!;
        this.wrapRangesYear = document.querySelector('.toy-page__ranges-bottom')!;

        this.initEventListeners();
    }

    initEventListeners() {
        this.wrapRangesCount.addEventListener('input', (event: Event) => {
            const element = <Element>event.target;

            const filterValue: IRangeFilter<number> = {
                min: this.filterState.count.min,
                max: this.filterState.count.max
            };

            if (element.classList.contains('slider-1')) {
                this.displayValOne.textContent = this.inputRangeMinCount.value;
                filterValue.min = Number(this.inputRangeMinCount.value);

            } else if (element.classList.contains('slider-2')) {
                this.displayValTwo.textContent = this.inputRangeMaxCount.value;
                filterValue.max = Number(this.inputRangeMaxCount.value);
            }

            this.changeFilterState('count', filterValue, true);
            this.fillColorCountRange();
            this.drawToys();
        });

        this.wrapRangesYear.addEventListener('input', (event: Event) => {
            const element = <Element>event.target;

            const filterValue: IRangeFilter<number> = {
                min: this.filterState.year.min,
                max: this.filterState.year.max
            };

            if (element.classList.contains('slider-3')) {
                this.displayValThree.textContent = this.inputRangeMinYear.value;
                filterValue.min = Number(this.inputRangeMinYear.value);

            } else if (element.classList.contains('slider-4')) {
                this.displayValFour.textContent = this.inputRangeMaxYear.value;
                filterValue.max = Number(this.inputRangeMaxYear.value);
            }

            this.changeFilterState('year', filterValue, true);
            this.fillColorYearRange();
            this.drawToys();
        });

        this.select.addEventListener('change', () => {
            if (this.select.value === 'start-letter') {
                this.filteredToys.sort((a: Toy, b: Toy) => { // Array.prototype.sort function is mutable. It changes the original array
                    let x = a.name.toLowerCase();
                    let y = b.name.toLowerCase();
                    return x < y ? -1 : x > y ? 1 : 0;
                });
                this.drawToys();
            } else if (this.select.value === 'end-letter') {
                this.filteredToys.sort((a: Toy, b: Toy) => { // Array.prototype.sort function is mutable. It changes the original array
                    let x = a.name.toLowerCase();
                    let y = b.name.toLowerCase();
                    return x > y ? -1 : x < y ? 1 : 0;
                });
                this.drawToys();
            } else if (this.select.value === 'start-count') {
                this.filteredToys.sort((a: Toy, b: Toy) => a.count - b.count); // Array.prototype.sort function is mutable. It changes the original array    
                this.drawToys();
            } else if (this.select.value === 'end-count') {
                this.filteredToys.sort((a: Toy, b: Toy) => b.count - a.count); // Array.prototype.sort function is mutable. It changes the original array
                this.drawToys();
            }
        });

        this.wrapShape.addEventListener('change', (event: Event) => {
            const targetElement = <HTMLInputElement>event.target;
            const isChecked: boolean = targetElement.checked;
            const value: string = targetElement.value;

            this.changeFilterState('shape', value, isChecked);
            this.drawToys();

            const currentChangeElement = event.target as HTMLInputElement;
            const labelElement: Element = currentChangeElement.nextElementSibling!;
            const svgElement: Element = labelElement.firstElementChild!;
            svgElement.classList.toggle('none');
            const svgLastElement: Element = labelElement.lastElementChild!;
            svgLastElement.classList.toggle('none');
        });

        this.wrapFavorite.addEventListener('change', (event: Event) => {
            const isChecked: boolean = (<HTMLInputElement>event.target).checked;
            this.changeFilterState('favorite', isChecked, true);
            this.drawToys();

            const currentChangeElement = event.target as HTMLInputElement;
            const labelElement: Element = currentChangeElement.nextElementSibling!;
            const svgElement: Element = labelElement.firstElementChild!;
            svgElement.classList.toggle('none');
        });

        this.wrapSize.addEventListener('change', (event: Event) => {
            const isChecked: boolean = (<HTMLInputElement>event.target).checked;
            const targetElement = <HTMLInputElement>event.target;
            const value: string = targetElement.value;

            this.changeFilterState('size', value, isChecked);
            this.drawToys();

            const currentChangeElement = event.target as HTMLInputElement;
            const labelElement: Element = currentChangeElement.nextElementSibling!;
            const svgElement: Element = labelElement.firstElementChild!;
            svgElement.classList.toggle('none');
        });

        this.wrapColor.addEventListener('change', (event: Event) => {
            const isChecked: boolean = (<HTMLInputElement>event.target).checked;
            const targetElement = <HTMLInputElement>event.target;
            const value: string = targetElement.value;

            this.changeFilterState('color', value, isChecked)
            this.drawToys();

            const currentChangeElement = event.target as HTMLInputElement;
            const labelElement: Element = currentChangeElement.nextElementSibling!;
            const svgElement: Element = labelElement.firstElementChild!;
            svgElement.classList.toggle('none');
        });

        this.searchInput.addEventListener('input', () => {
            if (this.searchInput.value.length > 0) { // TODO: что если = 0?
                this.searchClear.classList.remove('none'); // TODO: переделать в одну строку через .toggle('none')
            } else if (this.searchInput.value.length < 1) {
                this.searchClear.classList.add('none');
            }

            const searchText: string = this.searchInput.value.toLowerCase();

            this.filteredToys = this.originalToys.filter((toy: Toy) =>
                toy.name.toLowerCase().includes(searchText));

            if (this.filteredToys.length === 0) {
                alert('Извините, совпадений не обнаружено');
                return; // TODO: remove this return if need to show empty page with nothing. but you have alert above...?
            }

            this.drawToys();
        });

        this.searchClear.addEventListener('click', () => {
            this.searchClear.classList.add('none');
            this.searchInput.value = '';
            this.drawToys();
        });

        this.resetFilter.addEventListener('click', () => {
            this.filterState = new FilterState(); // TODO: check if we have to create a new instance or just erase all to defaults
            this.drawToys();

            this.select.value = 'start';
            this.inputBell.checked = false;
            this.svgBellWhite.classList.remove('none');
            this.svgBellYellow.classList.add('none');
            this.inputBall.checked = false;
            this.svgBallWhite.classList.remove('none');
            this.svgBallYellow.classList.add('none');
            this.inputCone.checked = false;
            this.svgConeWhite.classList.remove('none');
            this.svgConeYellow.classList.add('none');
            this.inputSnowflake.checked = false;
            this.svgSnowflakeWhite.classList.remove('none');
            this.svgSnowflakeYellow.classList.add('none');
            this.inputFigure.checked = false;
            this.svgFigureWhite.classList.remove('none');
            this.svgFigureYellow.classList.add('none');
            this.whiteInput.checked = false;
            this.whiteSvg.classList.add('none');
            this.yellowInput.checked = false;
            this.yellowSvg.classList.add('none');
            this.redInput.checked = false;
            this.redSvg.classList.add('none');
            this.blueInput.checked = false;
            this.blueSvg.classList.add('none');
            this.greenInput.checked = false;
            this.greenSvg.classList.add('none');
            this.bigInput.checked = false;
            this.bigSvg.classList.add('none');
            this.middleInput.checked = false;
            this.middleSvg.classList.add('none');
            this.smallInput.checked = false;
            this.smallSvg.classList.add('none');
            this.favoriteInput.checked = false;
            this.favoriteSvg.classList.add('none');
            this.sliderTrack.style.backgroundImage = `linear-gradient(to right, #fff 0%, #24C5DB 0%, #24C5DB 100%, #fff 100% )`;
            this.sliderTrackTwo.style.backgroundImage = `linear-gradient(to right, #fff 0%, #24C5DB 0%, #24C5DB 100%, #fff 100% )`;
            this.inputRangeMinCount.value = '0';
            this.inputRangeMaxCount.value = '12';
            this.inputRangeMinYear.value = '1940';
            this.inputRangeMaxYear.value = '2021';
            this.displayValOne.textContent = this.inputRangeMinCount.value;
            this.displayValTwo.textContent = this.inputRangeMaxCount.value;
            this.displayValThree.textContent = this.inputRangeMinYear.value;
            this.displayValFour.textContent = this.inputRangeMaxYear.value;
        });
    }

    drawToys() {
        this.removeToys(); // Clean up before drawing again

        const countToys = document.querySelector('.header-search__toy-input') as Element;
        const fragment: DocumentFragment = document.createDocumentFragment();
        const sourceItemTemp: HTMLTemplateElement = document.querySelector('#sourceItemTemp')!;
        let count: number = 0;
        let arr: number[] = [];

        this.filteredToys.forEach((item: Toy) => {
            const sourceClone = sourceItemTemp.content.cloneNode(true) as HTMLTemplateElement;
            const spanClone = sourceClone.querySelector('.toy-page__right-favorit--span');

            sourceClone.querySelector('.toy-page__right-name')!.textContent = item.name;
            sourceClone.querySelector('.toy-page__right-count--span')!.textContent = item.count.toString();
            sourceClone.querySelector('.toy-page__right-buy--span')!.textContent = item.year.toString();
            sourceClone.querySelector('.toy-page__right-form--span')!.textContent = item.shape;
            sourceClone.querySelector('.toy-page__right-color--span')!.textContent = item.color;
            sourceClone.querySelector('.toy-page__right-size--span')!.textContent = item.size;
            (<HTMLElement>sourceClone.querySelector('.toy-page__right-span'))!.style.backgroundColor = '#24C5DB';
            sourceClone
                .querySelector('.toy-page__right-img')!
                .setAttribute(
                    'src',
                    `https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/christmas-task/assets/toys/${item.num}.png`
                );

            spanClone!.textContent = item.favorite ? 'да' : 'нет';
            fragment.append(sourceClone);
        });
        document.querySelector('.toy-page__right-sources')!.append(fragment);

        document.querySelectorAll('.toy-page__right-overlay').forEach((item, i) => {
            item.addEventListener('click', () => {
                if (
                    (<HTMLElement>document.querySelectorAll('.toy-page__right-span')[i]).style.backgroundColor ===
                    'rgb(36, 197, 219)'
                ) {
                    (<HTMLElement>document.querySelectorAll('.toy-page__right-span')[i]).style.backgroundColor =
                        'rgb(203, 183, 122)';
                    arr.push(i);
                    count++;
                } else if (
                    (<HTMLElement>document.querySelectorAll('.toy-page__right-span')[i]).style.backgroundColor ===
                    'rgb(203, 183, 122)'
                ) {
                    (<HTMLElement>document.querySelectorAll('.toy-page__right-span')[i]).style.backgroundColor =
                        'rgb(36, 197, 219)';
                    arr.forEach((elem, index) => {
                        if (elem === i) {
                            arr.splice(index, 1);
                        }
                    });
                    count--;
                }
                if (count === 20) {
                    alert('Все слоты заполнены');
                    document.querySelectorAll('.toy-page__right-overlay').forEach((item, index) => {
                        (<HTMLElement>item).style.display = 'none';
                        arr.forEach((elem) => {
                            if (elem === index) {
                                (<HTMLElement>item).style.display = 'initial';
                            }
                        });
                    });
                } else if (count < 20) {
                    document.querySelectorAll('.toy-page__right-overlay').forEach((item) => {
                        (<HTMLElement>item).style.display = 'initial';
                    });
                }
                (<HTMLInputElement>countToys).value = `${count}`;
            });
        });
    }

    changeFilterState(key: keyof IFilterState, value: any, isAdded: boolean = true) {
        console.warn(key, value, isAdded) // TODO: remove

        if (isAdded) {
            if (typeof value === 'string') {
                (this.filterState[key] as string[]).push(value);
            } else if (typeof value === 'boolean' && key === 'favorite') { // TODO: simplify it
                this.filterState[key] = value;
            } else {
                const range = this.filterState[key] as IRangeFilter<number>;
                range.min = value.min;
                range.max = value.max;
            }
        } else {
            if (typeof value === 'string') {
                const filterValues = this.filterState[key] as string[];
                const valueIndex = filterValues.indexOf(value);
                filterValues.splice(valueIndex, 1);
            }
        }

        console.warn('Logging filter state', this.filterState); // TODO: remove
        this.filterToys();
    }

    filterToys() {
        const {
            count: countRange,
            year: yearRange,
            shape: selectedShapes,
            color: selectedColors,
            size: selectedSizes,
            favorite
        } = this.filterState;

        console.log('Before filter', this.filteredToys, selectedShapes);
        this.filteredToys = this.originalToys.filter((toy: Toy) =>
            ((countRange.min === null || countRange.min <= toy.count) && (countRange.max === null || countRange.max >= toy.count)) &&
            ((yearRange.min === null || yearRange.min <= toy.year) && (yearRange.max === null || yearRange.max >= toy.year)) &&
            (selectedShapes.length === 0 || selectedShapes.includes(toy.shape as Shape)) &&
            (selectedColors.length === 0 || selectedColors.includes(toy.color as Color)) &&
            (selectedSizes.length === 0 || selectedSizes.includes(toy.size as Size)) &&
            (!favorite || toy.favorite === favorite) // если isFavorite=false, нам нужны все игрушки и favorite=true и favorite=false.
        );

        console.log('Filtered', this.filteredToys);
    }

    fillColorCountRange() {
        const percentMin: number = Math.floor((Number(this.inputRangeMinCount.value) / Number(this.inputRangeMinCount.max)) * 100);
        const percentMax: number = Math.floor((Number(this.inputRangeMaxCount.value) / Number(this.inputRangeMaxCount.max)) * 100);
        this.sliderTrack.style.backgroundImage = `linear-gradient(to right, #fff ${percentMin}%, #24C5DB ${percentMin}%, #24C5DB ${percentMax}%, #fff ${percentMax}% )`;
    }

    fillColorYearRange() {
        const range: number = MAX_YEAR - MIN_YEAR;
        const percentMin: number = (+this.inputRangeMinYear.value - MIN_YEAR) / range * 100; // min 0%
        const percentMax: number = (+this.inputRangeMaxYear.value - MIN_YEAR) / range * 100; // max 100%
        this.sliderTrackTwo.style.backgroundImage = `linear-gradient(to right, #fff ${percentMin}%, #24C5DB ${percentMin}%, #24C5DB ${percentMax}%, #fff ${percentMax}% )`;
    }

    removeToys() {
        document.querySelectorAll('.toy-page__right-item')
            .forEach((item: Element) => item.remove());
    }
}

export default AppView;
