import { FavoriteFilterWrapper } from "./favoriteFilterWrapper";
import { WrapperFilter } from "./wrapperFilter";
import { WrapperRange } from "./wrapperRange";
import { WrapperReset } from "./wrapperReset";
import { WrapperSort } from "./wrapperSort";
import { WrapperToys } from "./wrapperToys";

const NUMBER_FIRST_ELEMENT = 0;
const NUMBER_SECOND_ELEMENT = 1;
const NUMBER_THIRD_ELEMENT = 2;
const TYPE_PARAM_FILTER_FORM = "form";
const TYPE_PARAM_FILTER_COLOR = "color";
const TYPE_PARAM_FILTER_SIZE = "size";

export class ToyPageLayout {
  element: HTMLElement = document.createElement("div");
  container: HTMLElement = document.createElement("div");
  toyPageWrap: HTMLElement = document.createElement("div");
  toyPageLeft: HTMLElement = document.createElement("div");
  toyPageRight: HTMLElement = document.createElement("div");
  toyPageSort: HTMLElement = document.createElement("div");
  toyPageShape: HTMLElement = document.createElement("div");
  toyPageRanges: HTMLElement = document.createElement("div");
  toyPageColor: HTMLElement = document.createElement("div");
  toyPageSize: HTMLElement = document.createElement("div");
  toyPageFavorite: HTMLElement = document.createElement("div");
  toyPageReset: HTMLElement = document.createElement("div");
  spanMinCount: Element;
  inputMinCount: Element;
  spanMaxCount: Element;
  inputMaxCount: Element;
  sliderTrackCount: Element;
  spanMinYear: Element;
  spanMaxYear: Element;
  inputMinYear: Element;
  inputMaxYear: Element;
  sliderTrackYear: Element;
  select: Element;
  constructor() {
    new WrapperSort(this.toyPageSort);
    new WrapperFilter(TYPE_PARAM_FILTER_FORM, this.toyPageShape);
    new WrapperFilter(TYPE_PARAM_FILTER_COLOR, this.toyPageColor);
    new WrapperFilter(TYPE_PARAM_FILTER_SIZE, this.toyPageSize);
    new FavoriteFilterWrapper(this.toyPageFavorite);
    new WrapperReset(this.toyPageReset);
    new WrapperToys(this.toyPageRight);
    this.appendWrappers();
    this.addClassForWrappers();
    this.select = this.toyPageSort.children[NUMBER_SECOND_ELEMENT].children[NUMBER_FIRST_ELEMENT];
    this.spanMinCount = this.toyPageRanges.children[NUMBER_FIRST_ELEMENT].children[NUMBER_THIRD_ELEMENT].children[
      NUMBER_FIRST_ELEMENT
    ];
    this.spanMaxCount = this.toyPageRanges.children[NUMBER_FIRST_ELEMENT].children[NUMBER_THIRD_ELEMENT].children[
      NUMBER_SECOND_ELEMENT
    ];
    this.inputMinCount = this.toyPageRanges.children[NUMBER_FIRST_ELEMENT].children[NUMBER_SECOND_ELEMENT].children[
      NUMBER_FIRST_ELEMENT
    ].children[NUMBER_FIRST_ELEMENT].children[NUMBER_FIRST_ELEMENT];
    this.inputMaxCount = this.toyPageRanges.children[NUMBER_FIRST_ELEMENT].children[NUMBER_SECOND_ELEMENT].children[
      NUMBER_FIRST_ELEMENT
    ].children[NUMBER_FIRST_ELEMENT].children[NUMBER_SECOND_ELEMENT];
    this.sliderTrackCount = this.toyPageRanges.children[NUMBER_FIRST_ELEMENT].children[NUMBER_SECOND_ELEMENT].children[
      NUMBER_FIRST_ELEMENT
    ].children[NUMBER_FIRST_ELEMENT];
    this.spanMinYear = this.toyPageRanges.children[NUMBER_SECOND_ELEMENT].children[NUMBER_THIRD_ELEMENT].children[
      NUMBER_FIRST_ELEMENT
    ];
    this.spanMaxYear = this.toyPageRanges.children[NUMBER_SECOND_ELEMENT].children[NUMBER_THIRD_ELEMENT].children[
      NUMBER_SECOND_ELEMENT
    ];
    this.inputMinYear = this.toyPageRanges.children[NUMBER_SECOND_ELEMENT].children[NUMBER_SECOND_ELEMENT].children[
      NUMBER_FIRST_ELEMENT
    ].children[NUMBER_FIRST_ELEMENT].children[NUMBER_FIRST_ELEMENT];
    this.inputMaxYear = this.toyPageRanges.children[NUMBER_SECOND_ELEMENT].children[NUMBER_SECOND_ELEMENT].children[
      NUMBER_FIRST_ELEMENT
    ].children[NUMBER_FIRST_ELEMENT].children[NUMBER_SECOND_ELEMENT];
    this.sliderTrackYear = this.toyPageRanges.children[NUMBER_SECOND_ELEMENT].children[NUMBER_SECOND_ELEMENT].children[
      NUMBER_FIRST_ELEMENT
    ].children[NUMBER_FIRST_ELEMENT];
  }
  private appendWrappers() {
    this.toyPageRanges.append(
      new WrapperRange().createToyPageRange("top"),
      new WrapperRange().createToyPageRange("bottom")
    );
    this.toyPageLeft.append(
      this.toyPageSort,
      this.toyPageShape,
      this.toyPageRanges,
      this.toyPageColor,
      this.toyPageSize,
      this.toyPageFavorite,
      this.toyPageReset
    );
    this.toyPageWrap.append(this.toyPageLeft, this.toyPageRight);
    this.container.append(this.toyPageWrap);
    this.element.append(this.container);
  }
  private addClassForWrappers() {
    this.element.classList.add("toy-page");
    this.container.classList.add("container");
    this.toyPageWrap.classList.add("toy-page__wrap");
    this.toyPageLeft.classList.add("toy-page__left");
    this.toyPageRight.classList.add("toy-page__right");
    this.toyPageSort.classList.add("toy-page__sort");
    this.toyPageShape.classList.add("toy-page__shape");
    this.toyPageRanges.classList.add("toy-page__ranges");
    this.toyPageColor.classList.add("toy-page__color");
    this.toyPageSize.classList.add("toy-page__size");
    this.toyPageFavorite.classList.add("toy-page__favorite");
    this.toyPageReset.classList.add("toy-page__buttons");
  }
  addEventListenerToWrapperReset(listener: (event: Event) => void) {
    this.toyPageReset.addEventListener("click", listener);
  }
  addEventListenerToWrapperFavorite(listener: (event: Event) => void) {
    this.toyPageFavorite.addEventListener("change", listener);
  }
  addEventListenerToWrapperSize(listener: (event: Event) => void) {
    this.toyPageSize.addEventListener("change", listener);
  }
  addEventListenerToWrapperColor(listener: (event: Event) => void) {
    this.toyPageColor.addEventListener("change", listener);
  }
  addEventListenerToWrapperSort(listener: (event: Event) => void) {
    this.toyPageSort.addEventListener("change", listener);
  }
  addEventListenerToRangeCount(listener: (event: Event) => void) {
    this.toyPageRanges.children[NUMBER_FIRST_ELEMENT].addEventListener("input", listener);
  }
  addEventListenerToRangeYear(listener: (event: Event) => void) {
    this.toyPageRanges.children[NUMBER_SECOND_ELEMENT].addEventListener("input", listener);
  }
  addEventListenerToWrapperShape(listener: (event: Event) => void) {
    this.toyPageShape.addEventListener("change", listener);
  }
}
