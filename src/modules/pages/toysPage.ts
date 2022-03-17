import { Filter } from "../components/filter/filter";
import { Footer } from "../components/footer/footer";
import { Header } from "../components/header/header";
import { ToyLayout } from "../components/Toy/ToyLayout";
import { ToyPageLayout } from "../components/Toy/toyPageLayout";
import { FilterState, IRangeFilter } from "../interfaces/filter-state";
import { Toy } from "../interfaces/toy.model";
import { MainPage } from "./mainPage";
import { TreePage } from "./treePage";

const ID_SVG_LOGO = "start";
const ID_SVG_PATH_TAG_LOGO = "start-path";
const FULL_PERCENT = 100;
const MIN_YEAR = 1940;
const MAX_YEAR = 2021;
const COLOR_NO_FAVORITE = "rgb(36, 197, 219)";
const COLOR_FAVORITE = "rgb(203, 183, 122)";
const MAX_COUNT_FAVORITE_TOYS = 20;
const TEXT_BUTTON_TREE = "Ёлка";

export class ToysPage {
  header: Header;
  footer: Footer;
  page: ToyPageLayout;
  selectState: string[];
  filterState: FilterState;
  filter: Filter;
  originalToys: Toy[];
  favoriteToys: Toy[];
  constructor(arrayToys: Toy[]) {
    document.body.innerHTML = "";
    this.originalToys = arrayToys;
    this.header = new Header();
    this.footer = new Footer();
    this.page = new ToyPageLayout();
    document.body.append(this.header.element, this.page.element, this.footer.element);
    this.selectState = [];
    this.favoriteToys = [];
    this.filter = new Filter(arrayToys);
    this.filterState = new FilterState();
    this.addEventListenerToWrapperMenu();
    this.addEventListenerToWrapperShape();
    this.addEventListenerToRangeCount();
    this.addEventListenerToRangeYear();
    this.addEventListenerToWrapperSort();
    this.addEventListenerToWrapperColor();
    this.addEventListenerToWrapperSize();
    this.addEventListenerToWrapperFavorite();
    this.addEventListenerToHeaderSearch();
    this.addEventListenerToClearHeaderSearch();
    this.addEventListenerToWrapperReset();
    this.drawToys(arrayToys);
  }
  drawToys(toys: Toy[]) {
    this.removeToys();
    toys.forEach((toyData: Toy) => new ToyLayout(toyData));
    this.selectFavoriteToys();
  }
  selectFavoriteToys() {
    let count = 0;
    const arr: number[] = [];
    const spanCollection = document.querySelectorAll(".toy-page__right-span")!;
    const overlayCollection = document.querySelectorAll(".toy-page__right-overlay")!;
    const countToys = document.querySelector(".header-search__toy-input") as Element;
    overlayCollection.forEach((item, i) => {
      item.addEventListener("click", () => {
        const numberToy = item.id;
        if ((<HTMLElement>spanCollection[i]).style.backgroundColor === COLOR_NO_FAVORITE) {
          (<HTMLElement>spanCollection[i]).style.backgroundColor = COLOR_FAVORITE;
          arr.push(i);
          count++;
          this.changeFavoriteState(numberToy, true);
        } else if ((<HTMLElement>spanCollection[i]).style.backgroundColor === COLOR_FAVORITE) {
          (<HTMLElement>spanCollection[i]).style.backgroundColor = COLOR_NO_FAVORITE;
          arr.forEach((elem, index) => {
            if (elem === i) {
              arr.splice(index, 1);
            }
          });
          count--;
          this.changeFavoriteState(numberToy, true);
        }
        if (count === MAX_COUNT_FAVORITE_TOYS) {
          alert("Все слоты заполнены");
          overlayCollection.forEach((item, index) => {
            (<HTMLElement>item).style.display = "none";
            arr.forEach((elem) => {
              if (elem === index) {
                (<HTMLElement>item).style.display = "initial";
              }
            });
          });
        } else if (count < MAX_COUNT_FAVORITE_TOYS) {
          overlayCollection.forEach((item) => {
            (<HTMLElement>item).style.display = "initial";
          });
        }
        (<HTMLInputElement>countToys).value = `${count}`;
      });
    });
  }
  changeFavoriteState(num: string, isAdded: boolean) {
    if (isAdded) {
      this.selectState.push(num);
      this.filterFavorite(this.selectState);
    } else {
      this.selectState = this.selectState.filter((item) => item !== num);
      this.filterFavorite(this.selectState);
    }
  }
  filterFavorite(data: string[]) {
    this.favoriteToys = this.originalToys.filter((item: Toy) => data.includes(item.num));
  }
  addEventListenerToWrapperSort() {
    this.page.addEventListenerToWrapperSort(() => {
      if ((<HTMLInputElement>this.page.select).value === "start-letter") {
        this.drawToys(this.filter.sortStartLetter());
      } else if ((<HTMLInputElement>this.page.select).value === "end-letter") {
        this.drawToys(this.filter.sortEndLetter());
      } else if ((<HTMLInputElement>this.page.select).value === "start-count") {
        this.drawToys(this.filter.sortStartCount());
      } else if ((<HTMLInputElement>this.page.select).value === "end-count") {
        this.drawToys(this.filter.sortEndCount());
      }
    });
  }
  addEventListenerToRangeYear() {
    this.page.addEventListenerToRangeYear((event: Event) => {
      const element = <Element>event.target;
      const filterValue: IRangeFilter<number> = {
        min: this.filterState.year.min,
        max: this.filterState.year.max,
      };
      if (element.classList.contains("slider-3")) {
        this.page.spanMinYear.innerHTML = (<HTMLInputElement>this.page.inputMinYear).value;
        filterValue.min = Number((<HTMLInputElement>this.page.inputMinYear).value);
      } else if (element.classList.contains("slider-4")) {
        this.page.spanMaxYear.innerHTML = (<HTMLInputElement>this.page.inputMaxYear).value;
        filterValue.max = Number((<HTMLInputElement>this.page.inputMaxYear).value);
      }
      this.fillColorYearRange();
      this.drawToys(this.filter.changeFilterState("year", filterValue, true));
    });
  }
  addEventListenerToRangeCount() {
    this.page.addEventListenerToRangeCount((event) => {
      const element = <Element>event.target;
      const filterValue: IRangeFilter<number> = {
        min: this.filterState.count.min,
        max: this.filterState.count.max,
      };
      if (element.classList.contains("slider-1")) {
        this.page.spanMinCount.innerHTML = (<HTMLInputElement>this.page.inputMinCount).value;
        filterValue.min = Number((<HTMLInputElement>this.page.inputMinCount).value);
      } else if (element.classList.contains("slider-2")) {
        this.page.spanMaxCount.innerHTML = (<HTMLInputElement>this.page.inputMaxCount).value;
        filterValue.max = Number((<HTMLInputElement>this.page.inputMaxCount).value);
      }
      this.fillColorCountRange();
      this.drawToys(this.filter.changeFilterState("count", filterValue, true));
    });
  }
  addEventListenerToWrapperShape() {
    this.page.addEventListenerToWrapperShape((event) => {
      const targetElement = <HTMLInputElement>event.target;
      const isChecked: boolean = targetElement.checked;
      const value: string = targetElement.value;
      this.drawToys(this.filter.changeFilterState("shape", value, isChecked));
      const currentChangeElement = event.target as HTMLInputElement;
      const labelElement: Element = currentChangeElement.nextElementSibling!;
      const svgElement: Element = labelElement.firstElementChild!;
      svgElement.classList.toggle("none");
      const svgLastElement: Element = labelElement.lastElementChild!;
      svgLastElement.classList.toggle("none");
    });
  }
  addEventListenerToWrapperColor() {
    this.page.addEventListenerToWrapperColor((event) => {
      const isChecked: boolean = (<HTMLInputElement>event.target).checked;
      const targetElement = <HTMLInputElement>event.target;
      const value: string = targetElement.value;
      this.drawToys(this.filter.changeFilterState("color", value, isChecked));
      const currentChangeElement = event.target as HTMLInputElement;
      const labelElement: Element = currentChangeElement.nextElementSibling!;
      const svgElement: Element = labelElement.firstElementChild!;
      svgElement.classList.toggle("none");
    });
  }
  addEventListenerToWrapperSize() {
    this.page.addEventListenerToWrapperSize((event) => {
      const isChecked: boolean = (<HTMLInputElement>event.target).checked;
      const targetElement = <HTMLInputElement>event.target;
      const value: string = targetElement.value;
      this.drawToys(this.filter.changeFilterState("size", value, isChecked));
      const currentChangeElement = event.target as HTMLInputElement;
      const labelElement: Element = currentChangeElement.nextElementSibling!;
      const svgElement: Element = labelElement.firstElementChild!;
      svgElement.classList.toggle("none");
    });
  }
  addEventListenerToWrapperFavorite() {
    this.page.addEventListenerToWrapperFavorite((event) => {
      const isChecked: boolean = (<HTMLInputElement>event.target).checked;
      this.drawToys(this.filter.changeFilterState("favorite", isChecked, true));
      const currentChangeElement = event.target as HTMLInputElement;
      const labelElement: Element = currentChangeElement.nextElementSibling!;
      const svgElement: Element = labelElement.firstElementChild!;
      svgElement.classList.toggle("none");
    });
  }
  addEventListenerToWrapperReset() {
    this.page.addEventListenerToWrapperReset((event) => {
      if ((<HTMLElement>event.target).classList.contains("toy-page__buttons-filter")) {
        new ToysPage(this.originalToys);
      }
    });
  }
  addEventListenerToWrapperMenu() {
    this.header.addListenerToWrapperMenu((event) => {
      if ((<HTMLElement>event.target).id === ID_SVG_LOGO || (<HTMLElement>event.target).id === ID_SVG_PATH_TAG_LOGO) {
        new MainPage();
      } else if ((<HTMLElement>event.target).innerHTML === TEXT_BUTTON_TREE) {
        new TreePage(this.favoriteToys, this.originalToys);
      }
    });
  }
  addEventListenerToHeaderSearch() {
    this.header.addEventListenerToHeaderSearch(() => {
      this.header.searcInputReset.classList.remove("none");
      const searchText: string = (<HTMLInputElement>this.header.searchInput).value.toLowerCase();
      if ((<HTMLInputElement>this.header.searchInput).value.length > 0) {
        if (this.filter.filterSearch(searchText).length === 0) {
          alert("Извините, совпадений не обнаружено");
          return;
        }
        this.drawToys(this.filter.filterSearch(searchText));
      } else if ((<HTMLInputElement>this.header.searchInput).value.length < 1) {
        this.drawToys(this.filter.filteredToys);
        this.header.searcInputReset.classList.add("none");
      }
    });
  }
  addEventListenerToClearHeaderSearch() {
    this.header.addEventListenerToClearSearch(() => {
      this.header.searcInputReset.classList.add("none");
      (<HTMLInputElement>this.header.searchInput).value = "";
      this.drawToys(this.filter.filteredToys);
    });
  }
  fillColorCountRange() {
    const percentMin: number = Math.floor(
      (Number((<HTMLInputElement>this.page.inputMinCount).value) /
        Number((<HTMLInputElement>this.page.inputMinCount).max)) *
      FULL_PERCENT
    );
    const percentMax: number = Math.floor(
      (Number((<HTMLInputElement>this.page.inputMaxCount).value) /
        Number((<HTMLInputElement>this.page.inputMaxCount).max)) *
      FULL_PERCENT
    );
    (<HTMLDivElement>(
      this.page.sliderTrackCount
    )).style.backgroundImage = `linear-gradient(to right, #fff ${percentMin}%, #24C5DB ${percentMin}%, #24C5DB ${percentMax}%, #fff ${percentMax}% )`;
  }
  fillColorYearRange() {
    const range: number = MAX_YEAR - MIN_YEAR;
    const percentMin: number =
      ((Number((<HTMLInputElement>this.page.inputMinYear).value) - MIN_YEAR) / range) * FULL_PERCENT;
    const percentMax: number =
      ((Number((<HTMLInputElement>this.page.inputMaxYear).value) - MIN_YEAR) / range) * FULL_PERCENT;
    (<HTMLDivElement>(
      this.page.sliderTrackYear
    )).style.backgroundImage = `linear-gradient(to right, #fff ${percentMin}%, #24C5DB ${percentMin}%, #24C5DB ${percentMax}%, #fff ${percentMax}% )`;
  }
  removeToys() {
    document.querySelectorAll(".toy-page__right-item").forEach((item: Element) => item.remove());
  }
}
