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
    filteredData: { [key: string]: string | number }[];
    SortData: { [key: string]: string | number }[];
    searchData: { [key: string]: string | number }[];
    fiterForDraw: { [key: string]: string | number | boolean };
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

    constructor(data: { [key: string]: string | number }[]) {
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
        this.filteredData = data.slice();
        this.searchData = data.slice();
        this.SortData = data.slice();

        this.fiterForDraw = {
            // countMin: false,
            // countMax: false,
            // yearMin: false,
            // yearMax: false,
            // shapeBell: false,
            // shapeBall: false,
            // shapeCone: false,
            // shapeSnowly: false,
            // shapeFigure: false,
            // colorWhite: false,
            // colorYellow: false,
            // colorRed: false,
            // colorBlue: false,
            // colorGreen: false,
            // sizeBig: false,
            // sizeMiddle: false,
            // sizeSmall: false,
            // favorite: false,
        };
        this.wrapRangesCount = document.querySelector('.toy-page__ranges-top')!;
        this.wrapRangesYear = document.querySelector('.toy-page__ranges-bottom')!;

        this.wrapRangesCount.addEventListener('input', (event: Event) => {
            let newArr;
            if ((<Element>event.target).classList.contains('slider-1')) {
                this.displayValOne.textContent = this.inputRangeMinCount.value;
                this.collectOptions('countMin', this.inputRangeMinCount.value);
                this.fillColor();
                newArr = this.filteredData.filter((item: any) => {
                    if (item.count > Number(this.displayValOne.textContent)) {
                        return true;
                    }
                });
            } else if ((<Element>event.target).classList.contains('slider-2')) {
                this.displayValTwo.textContent = this.inputRangeMaxCount.value;
                this.collectOptions('countMax', this.inputRangeMaxCount.value);
                this.fillColor();
                newArr = this.filteredData.filter((item: any) => {
                    if (item.count < Number(this.displayValTwo.textContent)) {
                        return true;
                    }
                });
            }

            this.removeToys();
            this.drawToys(newArr);
        });
        this.wrapRangesYear.addEventListener('input', (event: Event) => {
            let newArr;
            if ((<Element>event.target).classList.contains('slider-3')) {
                this.displayValThree.textContent = this.inputRangeMinYear.value;
                this.collectOptions('yearMin', this.inputRangeMinYear.value);
                this.fillColorTwo();
                newArr = this.filteredData.filter((item: any) => {
                    if (String(item.year) > String(this.displayValThree.textContent)) {
                        return true;
                    }
                });
            } else if ((<Element>event.target).classList.contains('slider-4')) {
                this.displayValFour.textContent = this.inputRangeMaxYear.value;
                this.collectOptions('yearMax', this.inputRangeMaxYear.value);
                this.fillColorTwo();
                newArr = this.filteredData.filter((item: any) => {
                    if (String(item.year) < String(this.displayValFour.textContent)) {
                        return true;
                    }
                });
            }
            this.removeToys();
            this.drawToys(newArr);
        });
        this.select.addEventListener('change', () => {
            if (this.select.value === 'start-letter') {
                let newArr = this.SortData.sort(function (a: any, b: any) {
                    let x = a.name.toLowerCase();
                    let y = b.name.toLowerCase();
                    return x < y ? -1 : x > y ? 1 : 0;
                });
                this.removeToys();
                this.drawToys(newArr);
            } else if (this.select.value === 'end-letter') {
                let newArr = this.SortData.sort(function (a: any, b: any) {
                    let x = a.name.toLowerCase();
                    let y = b.name.toLowerCase();
                    return x > y ? -1 : x < y ? 1 : 0;
                });
                this.removeToys();
                this.drawToys(newArr);
            } else if (this.select.value === 'start-count') {
                let newArr = this.SortData.sort(function (a: any, b: any) {
                    return a.count - b.count;
                });
                this.removeToys();
                this.drawToys(newArr);
            } else if (this.select.value === 'end-count') {
                let newArr = this.SortData.sort(function (a: any, b: any) {
                    return b.count - a.count;
                });
                this.removeToys();
                this.drawToys(newArr);
            }
        });

        this.wrapShape.addEventListener('change', (event: Event) => {
            if (
                (<Element>event.target).classList.contains('toy-page__form-btn--bell') &&
                (<HTMLInputElement>event.target).checked === true
            ) {
                this.collectOptions('shapeBell', 'колокольчик');
            } else if (
                (<Element>event.target).classList.contains('toy-page__form-btn--ball') &&
                (<HTMLInputElement>event.target).checked === true
            ) {
                this.collectOptions('shapeBall', 'шар');
            } else if (
                (<Element>event.target).classList.contains('toy-page__form-btn--cone') &&
                (<HTMLInputElement>event.target).checked === true
            ) {
                this.collectOptions('shapeCone', 'шишка');
            } else if (
                (<Element>event.target).classList.contains('toy-page__form-btn--snowflake') &&
                (<HTMLInputElement>event.target).checked === true
            ) {
                this.collectOptions('shapeSnowly', 'снежинка');
            } else if (
                (<Element>event.target).classList.contains('toy-page__form-btn--figure') &&
                (<HTMLInputElement>event.target).checked === true
            ) {
                this.collectOptions('shapeFigure', 'фигурка');
            }
            const colorCheckboxs = this.wrapShape.querySelectorAll('input[type="checkbox"]:checked');
            const selectedColors = Array.from(colorCheckboxs).map(
                (input: Element) => (input as HTMLInputElement).value
            );

            this.removeToys();
            const renderData =
                selectedColors.length > 0
                    ? this.filteredData.filter((item: any) => selectedColors.includes(item.shape))
                    : this.filteredData;

            // this.collectOptions(renderData, 'shapeFiter');
            this.drawToys(renderData);
            const currentChangeElement = event.target as HTMLInputElement;
            const labelElement: Element = currentChangeElement.nextElementSibling!;
            const svgElement: Element = labelElement.firstElementChild!;
            svgElement.classList.toggle('none');
            const svgLastElement: Element = labelElement.lastElementChild!;
            svgLastElement.classList.toggle('none');
        });
        this.wrapFavorite.addEventListener('change', (event: Event) => {
            if ((<HTMLInputElement>event.target).checked === true) {
                this.collectOptions('favorite', 'true');
            }
            const colorCheckboxs = this.wrapFavorite.querySelectorAll('input[type="checkbox"]:checked');
            const selectedColors = Array.from(colorCheckboxs).map(
                (input: Element) => (input as HTMLInputElement).value
            );

            this.removeToys();
            const renderData =
                selectedColors.length > 0
                    ? this.filteredData.filter((item: any) => selectedColors.includes(item.favorite))
                    : this.filteredData;

            this.drawToys(renderData);
            const currentChangeElement = event.target as HTMLInputElement;
            const labelElement: Element = currentChangeElement.nextElementSibling!;
            const svgElement: Element = labelElement.firstElementChild!;
            svgElement.classList.toggle('none');
        });
        this.wrapSize.addEventListener('change', (event: Event) => {
            if (
                (<Element>event.target).classList.contains('toy-page__size-btn--big') &&
                (<HTMLInputElement>event.target).checked === true
            ) {
                this.collectOptions('sizeBig', 'большой');
            } else if (
                (<Element>event.target).classList.contains('toy-page__size-btn--middle') &&
                (<HTMLInputElement>event.target).checked === true
            ) {
                this.collectOptions('sizeMiddle', 'средний');
            } else if (
                (<Element>event.target).classList.contains('toy-page__size-btn--small') &&
                (<HTMLInputElement>event.target).checked === true
            ) {
                this.collectOptions('sizeSmall', 'малый');
            }
            const colorCheckboxs = this.wrapSize.querySelectorAll('input[type="checkbox"]:checked');
            const selectedColors = Array.from(colorCheckboxs).map(
                (input: Element) => (input as HTMLInputElement).value
            );

            this.removeToys();
            const renderData =
                selectedColors.length > 0
                    ? this.filteredData.filter((item: any) => selectedColors.includes(item.size))
                    : this.filteredData;
            // this.collectOptions(renderData, 'sizeFiter');
            this.drawToys(renderData);
            const currentChangeElement = event.target as HTMLInputElement;
            const labelElement: Element = currentChangeElement.nextElementSibling!;
            const svgElement: Element = labelElement.firstElementChild!;
            svgElement.classList.toggle('none');
        });
        this.wrapColor.addEventListener('change', (event: Event) => {
            if (
                (<Element>event.target).classList.contains('btn-white') &&
                (<HTMLInputElement>event.target).checked === true
            ) {
                this.collectOptions('colorWhite', 'белый');
            } else if (
                (<Element>event.target).classList.contains('btn-yellow') &&
                (<HTMLInputElement>event.target).checked === true
            ) {
                this.collectOptions('colorYellow', 'желтый');
            } else if (
                (<Element>event.target).classList.contains('btn-red') &&
                (<HTMLInputElement>event.target).checked === true
            ) {
                this.collectOptions('colorRed', 'красный');
            } else if (
                (<Element>event.target).classList.contains('btn-blue') &&
                (<HTMLInputElement>event.target).checked === true
            ) {
                this.collectOptions('colorBlue', 'синий');
            } else if (
                (<Element>event.target).classList.contains('btn-green') &&
                (<HTMLInputElement>event.target).checked === true
            ) {
                this.collectOptions('colorGreen', 'зелёный');
            }
            const colorCheckboxs = this.wrapColor.querySelectorAll('input[type="checkbox"]:checked');
            const selectedColors = Array.from(colorCheckboxs).map(
                (input: Element) => (input as HTMLInputElement).value
            );

            this.removeToys();
            const renderData =
                selectedColors.length > 0
                    ? this.filteredData.filter((item: any) => selectedColors.includes(item.color))
                    : this.filteredData;
            // this.collectOptions(renderData, 'colorFiter');
            this.drawToys(renderData);
            const currentChangeElement = event.target as HTMLInputElement;
            const labelElement: Element = currentChangeElement.nextElementSibling!;
            const svgElement: Element = labelElement.firstElementChild!;
            svgElement.classList.toggle('none');
        });
        this.searchInput.addEventListener('input', () => {
            if (this.searchInput.value.length > 0) {
                this.searchClear.classList.remove('none');
            } else if (this.searchInput.value.length < 1) {
                this.searchClear.classList.add('none');
            }

            let newArr = this.searchData.filter((item: any) => {
                if (item.name.toLowerCase().indexOf(this.searchInput.value.toLocaleLowerCase()) !== -1) {
                    return true;
                }
            });
            this.removeToys();
            if (newArr.length === 0) {
                alert('Извините, совпадений не обнаружено');
            }
            this.drawToys(newArr);
        });
        this.searchClear.addEventListener('click', () => {
            this.searchClear.classList.add('none');
            this.searchInput.value = '';
            this.removeToys();
            this.drawToys(this.filteredData);
        });
        this.resetFilter.addEventListener('click', () => {
            this.fiterForDraw = {
                countMin: false,
                countMax: false,
                yearMin: false,
                yearMax: false,
                shapeBell: false,
                shapeBall: false,
                shapeCone: false,
                shapeSnowly: false,
                shapeFigure: false,
                colorWhite: false,
                colorYellow: false,
                colorRed: false,
                colorBlue: false,
                colorGreen: false,
                sizeBig: false,
                sizeMiddle: false,
                sizeSmall: false,
                favorite: false,
            };
            this.removeToys();
            this.drawToys(this.filteredData);
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

    drawToys(data: any) {
        const countToys = document.querySelector('.header-search__toy-input') as Element;
        const fragment: DocumentFragment = document.createDocumentFragment();
        const sourceItemTemp: HTMLTemplateElement = document.querySelector('#sourceItemTemp')!;
        let count: number = 0;
        let arr: number[] = [];

        data.forEach((item: any) => {
            const sourceClone = sourceItemTemp.content.cloneNode(true) as HTMLTemplateElement;
            const spanClone = sourceClone.querySelector('.toy-page__right-favorit--span');

            sourceClone.querySelector('.toy-page__right-name')!.textContent = item.name;
            sourceClone.querySelector('.toy-page__right-count--span')!.textContent = item.count;
            sourceClone.querySelector('.toy-page__right-buy--span')!.textContent = item.year;
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
            if (item.favorite === 'true') {
                spanClone!.textContent = 'да';
            } else {
                spanClone!.textContent = 'нет';
            }

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

    collectOptions(key: string, value: string | number | boolean) {
        this.fiterForDraw[key] = value;

        const {
            countMin,
            countMax,
            yearMin,
            yearMax,
            shapeBell,
            shapeBall,
            shapeCone,
            shapeSnowly,
            shapeFigure,
            colorWhite,
            colorYellow,
            colorRed,
            colorBlue,
            colorGreen,
            sizeBig,
            sizeMiddle,
            sizeSmall,
            favorite,
        } = this.fiterForDraw;

        let newArr = {
            count: new Set(),
            year: new Set(),
            shape: new Set(),
            color: new Set(),
            size: new Set(),
            favorite: new Set(),
        };
        if (countMin) {
            newArr.count.add(countMin);
        }
        if (countMax) {
            newArr.count.add(countMax);
        }
        if (yearMin) {
            newArr.year.add(yearMin);
        }
        if (yearMax) {
            newArr.year.add(yearMax);
        }
        if (shapeBell) {
            newArr.shape.add(shapeBell);
        }
        if (shapeBall) {
            newArr.shape.add(shapeBall);
        }
        if (shapeCone) {
            newArr.shape.add(shapeCone);
        }
        if (shapeSnowly) {
            newArr.shape.add(shapeSnowly);
        }
        if (shapeFigure) {
            newArr.shape.add(shapeFigure);
        }
        if (colorWhite) {
            newArr.color.add(colorWhite);
        }
        if (colorYellow) {
            newArr.color.add(colorYellow);
        }
        if (colorRed) {
            newArr.color.add(colorRed);
        }
        if (colorBlue) {
            newArr.color.add(colorBlue);
        }
        if (colorGreen) {
            newArr.color.add(colorGreen);
        }
        if (sizeBig) {
            newArr.size.add(sizeBig);
        }
        if (sizeMiddle) {
            newArr.size.add(sizeMiddle);
        }
        if (sizeSmall) {
            newArr.size.add(sizeSmall);
        }
        if (favorite) {
            newArr.favorite.add(favorite);
        }

        // let renderData: any = this.filteredData.filter(
        //     (toy) =>
        //         newArr.shape.includes() &&
        //         renderData.size.includes(toy.size) &&
        //         renderData.favorite.includes(toy.favorite) &&
        //         renderData.color.includes(toy.color) &&
        //         renderData.year.includes(toy.year) &&
        //         renderData.count.includes(toy.count)
        // );
        // console.log(renderData);
        // let newArr = {
        //     count: { countMin, countMax },
        //     year: { yearMin, yearMax },
        //     shape: { shapeBell, shapeBall, shapeCone, shapeSnowly, shapeFigure },
        //     color: { colorWhite, colorYellow, colorRed, colorBlue, colorGreen },
        //     size: { sizeBig, sizeMiddle, sizeSmall },
        //     favorite: favorite,
        // };

        // this.filterArray(this.filteredData, newArr);
    }
    filterArray(array: any, filters: any) {
        const filterKeys = Object.values(filters);

        let newArr = filterKeys.filter((item: any) => {
            if (Object.values(item).some((elem: any) => elem !== false)) {
                console.log(item);
            }
        });
    }
    fillColor() {
        let percent1: number = Math.floor(
            (Number(this.inputRangeMinCount.value) / Number(this.inputRangeMinCount.max)) * 100
        );
        let percent2: number = Math.floor(
            (Number(this.inputRangeMaxCount.value) / Number(this.inputRangeMaxCount.max)) * 100
        );
        this.sliderTrack.style.backgroundImage = `linear-gradient(to right, #fff ${percent1}%, #24C5DB ${percent1}%, #24C5DB ${percent2}%, #fff ${percent2}% )`;
    }
    fillColorTwo() {
        let percent1: number = Math.floor(Number(this.inputRangeMinYear.value) - 1940);
        let percent2: number = Math.floor(Number(this.inputRangeMaxYear.value) - 1925);
        if (this.inputRangeMinYear.value > '1943') {
            percent1 = +percent1 + 3;
        }
        if (this.inputRangeMinYear.value > '1952') {
            percent1 = +percent1 + 3;
        }
        if (this.inputRangeMinYear.value > '1972') {
            percent1 = +percent1 + 3;
        }
        if (this.inputRangeMinYear.value > '1989') {
            percent1 = +percent1 + 3;
        }
        if (this.inputRangeMinYear.value > '2006') {
            percent1 = +percent1 + 3;
        }
        if (this.inputRangeMaxYear.value < '2000') {
            percent2 = +percent2 - 3;
        }
        if (this.inputRangeMaxYear.value < '1985') {
            percent2 = +percent2 - 3;
        }
        if (this.inputRangeMaxYear.value < '1966') {
            percent2 = +percent2 - 3;
        }
        if (this.inputRangeMaxYear.value < '1951') {
            percent2 = +percent2 - 3;
        }
        this.sliderTrackTwo.style.backgroundImage = `linear-gradient(to right, #fff ${percent1}%, #24C5DB ${percent1}%, #24C5DB ${percent2}%, #fff ${percent2}% )`;
    }

    removeToys() {
        document.querySelectorAll('.toy-page__right-item').forEach((item) => {
            item.remove();
        });
    }
}

export default AppView;
