import { StartPageBottom } from "./startPageBottom";
import { StartPageTop } from "./startPageTop";

export class Main {
  element: HTMLElement = document.createElement("main");
  startPageWrap: HTMLElement = document.createElement("div");
  startPageImage: HTMLElement = document.createElement("img");
  startPageAbsolute: HTMLElement = document.createElement("div");
  startPageCenter: HTMLElement = document.createElement("div");
  startPage: HTMLElement = document.createElement("div");
  constructor() {
    this.addClassForWrappers();
    this.addAttributesForMainImage();
    this.startPageCenter.append(new StartPageTop().createStartPageTop(), new StartPageBottom().createStartPageBottom());
    this.appendWrappers();
  }
  private addClassForWrappers() {
    this.element.classList.add("main");
    this.startPage.classList.add("start-page");
    this.startPageWrap.classList.add("start-page__wrap");
    this.startPageImage.classList.add("start-page__image");
    this.startPageAbsolute.classList.add("start-page__absolute");
    this.startPageCenter.classList.add("start-page__center");
  }
  private addAttributesForMainImage() {
    this.startPageImage.setAttribute("alt", "background");
    this.startPageImage.setAttribute("src", "https://github.com/Yauheny-Bychkou/Images/blob/main/bg.jpg?raw=true");
  }
  private appendWrappers() {
    this.startPageAbsolute.append(this.startPageCenter);
    this.startPageWrap.append(this.startPageImage, this.startPageAbsolute);
    this.startPage.append(this.startPageWrap);
    this.element.append(this.startPage);
  }
  addListenerToWrapperMain(listener: (event: Event) => void) {
    this.startPageCenter.addEventListener("click", listener);
  }
}
