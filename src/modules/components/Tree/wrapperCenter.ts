import Button from "../button/button";
import { DropZone } from "./dropZone";
import { Garland } from "./garland";
import { SnowFlake } from "./snowflakes";

export class WrapperCenter {
  element: HTMLElement = document.createElement("div");
  buttonOption: Button;
  buttonToys: Button;
  // buttonSave: Button;
  dropZone: HTMLElement = document.createElement("div");
  snowflakes: HTMLElement = document.createElement("div");
  garlandMulticolor: HTMLElement = document.createElement("div");
  garlandRed: HTMLElement = document.createElement("div");
  garlandBlue: HTMLElement = document.createElement("div");
  garlandYellow: HTMLElement = document.createElement("div");
  garlandGreen: HTMLElement = document.createElement("div");
  imageTree: HTMLElement = document.createElement("img");
  imageBackground: HTMLElement = document.createElement("img");
  constructor() {
    this.element.classList.add("tree-page__wrapper-center");
    this.buttonOption = new Button({
      className: `tree-page__pannel-options`,
      text: "Панель настроек",
    });
    this.buttonToys = new Button({
      className: `tree-page__pannel-toys`,
      text: "Панель игрушек",
    });
    // this.buttonSave = new Button({
    //   className: `tree-page__save`,
    //   text: "Сохранить",
    // });
    this.addDropZone();
    this.addSnowflakes();
    this.addGarlandMultiColor();
    this.addGarlandRed();
    this.addGarlandBlue();
    this.addGarlandYellow();
    this.addGarlandGreen();
    this.addAttributesForImages();
    this.appendWrappers();
  }
  private appendWrappers() {
    this.element.append(
      this.buttonOption.element,
      this.buttonToys.element,
      // this.buttonSave.element,
      this.dropZone,
      this.snowflakes,
      this.garlandMulticolor,
      this.garlandRed,
      this.garlandBlue,
      this.garlandYellow,
      this.garlandGreen,
      this.imageTree,
      this.imageBackground
    );
  }
  private addAttributesForImages() {
    this.imageTree.classList.add("tree-page__background-start");
    this.imageTree.setAttribute("src", "https://github.com/Yauheny-Bychkou/Images/blob/main/bg-trees.jpg?raw=true");
    this.imageTree.setAttribute("alt", "background");
    this.imageBackground.classList.add("tree-page__background-tree");
    this.imageBackground.setAttribute(
      "src",
      "https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/christmas-task/assets/tree/1.png"
    );
    this.imageBackground.setAttribute("alt", "background");
  }
  private addDropZone() {
    this.dropZone.insertAdjacentHTML("afterbegin", new DropZone().getDropZone());
    this.dropZone.classList.add("drop-zone");
  }
  private addSnowflakes() {
    this.snowflakes.classList.add("snowflakes", "none");
    this.snowflakes.setAttribute("aria-hidden", "true");
    this.snowflakes.insertAdjacentHTML("afterbegin", new SnowFlake().getSnowFlakes());
  }
  private addGarlandMultiColor() {
    this.garlandMulticolor.classList.add("garland-multicolor", "none", "garland-tree");
    this.garlandMulticolor.setAttribute("id", "multi");
    this.garlandMulticolor.insertAdjacentHTML("afterbegin", new Garland().getGarlandMultiColor());
  }
  private addGarlandRed() {
    this.garlandRed.classList.add("garland-red", "none", "garland-tree");
    this.garlandRed.setAttribute("id", "red");
    this.garlandRed.insertAdjacentHTML("afterbegin", new Garland().getGarlandRed());
  }
  private addGarlandBlue() {
    this.garlandBlue.classList.add("garland-blue", "none", "garland-tree");
    this.garlandBlue.setAttribute("id", "blue");
    this.garlandBlue.insertAdjacentHTML("afterbegin", new Garland().getGarlandBlue());
  }
  private addGarlandYellow() {
    this.garlandYellow.classList.add("garland-yellow", "none", "garland-tree");
    this.garlandYellow.setAttribute("id", "yellow");
    this.garlandYellow.insertAdjacentHTML("afterbegin", new Garland().getGarlandYellow());
  }
  private addGarlandGreen() {
    this.garlandGreen.classList.add("garland-green", "none", "garland-tree");
    this.garlandGreen.setAttribute("id", "green");
    this.garlandGreen.insertAdjacentHTML("afterbegin", new Garland().getGarlandGreen());
  }
}
