import Button from "../button/button";
import { SvgTreePage } from "./svg";

const COUNT_TREES = 4;
const COUNT_BACKGROUND = 8;

export class WrapperLeft {
  treePageMedia: HTMLElement = document.createElement("div");
  treePageTrees: HTMLElement = document.createElement("div");
  treePageBackground: HTMLElement = document.createElement("div");
  treePageGarland: HTMLElement = document.createElement("div");
  element: HTMLElement = document.createElement("div");
  constructor() {
    this.element.classList.add("tree-page__wrapper-left");
    this.createTreePageMedia();
    this.createTreePageTrees();
    this.createTreePageBackground();
    this.createTreePageGarland();
    this.appendWrappers();
  }
  private appendWrappers() {
    this.element.insertAdjacentHTML("afterbegin", new SvgTreePage().getSvgLeftWrapper());
    this.element.append(this.treePageMedia, this.treePageTrees, this.treePageBackground, this.treePageGarland);
  }
  private createTreePageMedia() {
    this.treePageMedia.classList.add("tree-page__media");
    const buttonMusic = new Button({
      className: `tree-page__media-button`,
      text: "",
    });
    const buttonSnow = new Button({
      className: `tree-page__media-button`,
      text: "",
    });
    buttonMusic.element.classList.add("tree-page__media-music");
    buttonSnow.element.classList.add("tree-page__media-snow");
    this.treePageMedia.append(buttonMusic.element, buttonSnow.element);
  }
  private createTreePageTrees() {
    this.treePageTrees.classList.add("tree-page__trees");
    const title = document.createElement("h3");
    title.classList.add("tree-page__trees-title");
    title.innerHTML = "Выберите Ёлку";
    const treePageTreesCollection = document.createElement("div");
    treePageTreesCollection.classList.add("tree-page__trees-collection");
    for (let i = 0; i < COUNT_TREES; i++) {
      const treeBox = document.createElement("div");
      const image: HTMLImageElement = document.createElement("img");
      image.classList.add("tree-page__trees-img");
      image.setAttribute("alt", `tree`);
      image.setAttribute(
        "src",
        `https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/christmas-task/assets/tree/${i + 1}.png`
      );
      treeBox.classList.add("tree-page__trees-box");
      treeBox.append(image);
      treePageTreesCollection.append(treeBox);
    }
    this.treePageTrees.append(title, treePageTreesCollection);
  }
  private createTreePageBackground() {
    this.treePageBackground.classList.add("tree-page__background");
    const title = document.createElement("h3");
    title.classList.add("tree-page__background-title");
    title.innerHTML = "Выберите Фон";
    const treePageBackgroundCollection = document.createElement("div");
    treePageBackgroundCollection.classList.add("tree-page__background-collection");
    for (let i = 0; i < COUNT_BACKGROUND; i++) {
      const backgroundBox = document.createElement("div");
      const image: HTMLImageElement = document.createElement("img");
      image.classList.add("tree-page__background-img");
      image.setAttribute("alt", `background`);
      image.setAttribute(
        "src",
        `https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/christmas-task/assets/bg/${i + 1}.jpg`
      );
      backgroundBox.classList.add("tree-page__background-box");
      backgroundBox.append(image);
      treePageBackgroundCollection.append(backgroundBox);
    }
    this.treePageBackground.append(title, treePageBackgroundCollection);
  }
  private createTreePageGarland() {
    this.treePageGarland.classList.add("tree-page__garland");
    const title = document.createElement("h3");
    title.classList.add("tree-page__garland-title");
    title.innerHTML = "Гирлянда";
    const treePageGarlandCollection = document.createElement("div");
    const buttonMultiColor = new Button({
      className: `tree-page__garland-button`,
      text: "",
    });
    const buttonRedColor = new Button({
      className: `tree-page__garland-button`,
      text: "",
    });
    const buttonBlueColor = new Button({
      className: `tree-page__garland-button`,
      text: "",
    });
    const buttonYellowColor = new Button({
      className: `tree-page__garland-button`,
      text: "",
    });
    const buttonGreenColor = new Button({
      className: `tree-page__garland-button`,
      text: "",
    });
    const buttonOffColor = new Button({
      className: `tree-page__garland-off`,
      text: "Выкл",
    });
    treePageGarlandCollection.classList.add("tree-page__garland-collection");
    buttonMultiColor.element.classList.add("tree-page__garland-multicolor");
    buttonMultiColor.element.setAttribute("id", "multi");
    buttonRedColor.element.classList.add("tree-page__garland-red");
    buttonRedColor.element.setAttribute("id", "red");
    buttonBlueColor.element.classList.add("tree-page__garland-blue");
    buttonBlueColor.element.setAttribute("id", "blue");
    buttonYellowColor.element.classList.add("tree-page__garland-yellow");
    buttonYellowColor.element.setAttribute("id", "yellow");
    buttonGreenColor.element.classList.add("tree-page__garland-green");
    buttonGreenColor.element.setAttribute("id", "green");
    buttonOffColor.element.setAttribute("id", "off");
    treePageGarlandCollection.append(
      buttonMultiColor.element,
      buttonRedColor.element,
      buttonBlueColor.element,
      buttonYellowColor.element,
      buttonGreenColor.element,
      buttonOffColor.element
    );
    this.treePageGarland.append(title, treePageGarlandCollection);
  }
}
