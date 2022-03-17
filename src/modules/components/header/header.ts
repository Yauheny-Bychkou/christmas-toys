import { HeaderNavList } from "./headerNavList";
import { HeaderSearchToy } from "./headerSeachToy";
import { HeaderSearchPanel } from "./headerSearchPanel";

export class Header {
  element: HTMLElement;
  container: HTMLElement;
  headerWrap: HTMLElement;
  headerNav: HTMLElement;
  headerSearch: HTMLElement;
  searchInput: Element;
  searcInputReset: Element;
  constructor() {
    this.element = document.createElement("header");
    this.element.classList.add("header");
    this.container = document.createElement("div");
    this.container.classList.add("container");
    this.headerWrap = document.createElement("div");
    this.headerWrap.classList.add("header-wrap");
    this.headerNav = document.createElement("nav");
    this.headerNav.classList.add("header-nav");
    this.headerNav.append(new HeaderNavList().createHeaderNavList());
    this.headerSearch = document.createElement("div");
    this.headerSearch.classList.add("header-search");
    this.headerSearch.append(
      new HeaderSearchPanel().createHeaderSearchPanel(),
      new HeaderSearchToy().createHeaderSearchToy()
    );
    this.headerWrap.append(this.headerNav, this.headerSearch);
    this.container.append(this.headerWrap);
    this.element.append(this.container);
    this.searchInput = this.headerSearch.children[0].children[0];
    this.searcInputReset = this.headerSearch.children[0].children[1];
  }
  addEventListenerToClearSearch(listener: (event: Event) => void) {
    this.searcInputReset.addEventListener("click", listener);
  }
  addEventListenerToHeaderSearch(listener: (event: Event) => void) {
    this.searchInput.addEventListener("input", listener);
  }
  addListenerToWrapperMenu(listener: (event: Event) => void) {
    this.headerNav.addEventListener("click", listener);
  }
}
