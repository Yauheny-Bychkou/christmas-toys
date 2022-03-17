import Button from "../button/button";
import { SvgTreePage } from "./svg";
import { WrapperCenter } from "./wrapperCenter";
import { WrapperLeft } from "./wrapperLeft";
import { WrapperRight } from "./wrapperRight";

export class TreePageLayout {
  element: HTMLElement = document.createElement("div");
  image: HTMLElement = document.createElement("img");
  treePageWrapper: HTMLElement = document.createElement("div");
  container: HTMLElement = document.createElement("div");
  treePageCont: HTMLElement = document.createElement("div");
  treePageWrapperRight: HTMLElement = document.createElement("div");
  snowflakes: HTMLElement;
  imageTree: HTMLElement;
  buttonOption: Button;
  buttonToys: Button;
  treePageToysCollection: HTMLElement;
  imageBackground: HTMLElement;
  wrapperLeft: WrapperLeft;
  wrapperCenter: WrapperCenter;
  wrapperRight: WrapperRight;
  constructor() {
    this.addClassForWrappers();
    this.addAttributesForMainImage();
    this.appendWrappers();
    this.wrapperLeft = new WrapperLeft();
    this.wrapperCenter = new WrapperCenter();
    this.wrapperRight = new WrapperRight();
    this.treePageWrapperRight.append(this.wrapperRight.element);
    this.treePageCont.append(this.wrapperLeft.element, this.wrapperCenter.element, this.treePageWrapperRight);
    this.snowflakes = this.wrapperCenter.snowflakes;
    this.imageTree = this.wrapperCenter.imageBackground;
    this.imageBackground = this.wrapperCenter.imageTree;
    this.treePageToysCollection = this.wrapperRight.treePageToysCollection;
    this.buttonOption = this.wrapperCenter.buttonOption;
    this.buttonToys = this.wrapperCenter.buttonToys;
  }
  addEventListenerToButtonToys(listener: (event: Event) => void) {
    this.buttonToys.element.addEventListener("click", listener);
  }
  addEventListenerToButtonOption(listener: (event: Event) => void) {
    this.buttonOption.element.addEventListener("click", listener);
  }
  addEventListenerToWrapperGarland(listener: (event: Event) => void) {
    this.wrapperLeft.treePageGarland.addEventListener("click", listener);
  }
  addEventListenerToWrapperBackground(listener: (event: Event) => void) {
    this.wrapperLeft.treePageBackground.addEventListener("click", listener);
  }
  addEventListenerToWrapperMedia(listener: (event: Event) => void) {
    this.wrapperLeft.treePageMedia.addEventListener("click", listener);
  }
  addEventListenerToWrapperTrees(listener: (event: Event) => void) {
    this.wrapperLeft.treePageTrees.addEventListener("click", listener);
  }
  private addClassForWrappers() {
    this.element.classList.add("tree-page");
    this.image.classList.add("start-page__image", "start-page__image--tree");
    this.treePageWrapper.classList.add("tree-page__wrapper");
    this.container.classList.add("container");
    this.treePageCont.classList.add("tree-page__cont");
    this.treePageWrapperRight.classList.add("tree-page__wrapper-right");
  }
  private addAttributesForMainImage() {
    this.image.setAttribute("alt", "background");
    this.image.setAttribute("src", "https://github.com/Yauheny-Bychkou/Images/blob/main/bg.jpg?raw=true");
  }
  private appendWrappers() {
    this.treePageWrapperRight.insertAdjacentHTML("afterbegin", new SvgTreePage().getSvgRightWrapper());
    this.container.append(this.treePageCont);
    this.treePageWrapper.append(this.container);
    this.element.append(this.image, this.treePageWrapper);
  }
}
