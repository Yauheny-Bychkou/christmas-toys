import { Footer } from "../components/footer/footer";
import { Header } from "../components/header/header";
import { DragAndDrop } from "../components/Tree/dragAndDrop";
import { ToyCard } from "../components/Tree/ToyCard";
import { TreePageLayout } from "../components/Tree/treePageLayout";
import { Toy } from "../interfaces/toy.model";
import { MainPage } from "./mainPage";
import { ToysPage } from "./toysPage";

const ID_SVG_LOGO = "start";
const ID_SVG_PATH_TAG_LOGO = "start-path";
const TEXT_BUTTON_TOYS = "Игрушки";
const NUMBER_FIRST_ELEMENT = 0;
const PATH_TO_MUSIC = "music.mp3";
const ID_MULTICOLOR_BUTTON = "multi";
const ID_RED_BUTTON = "red";
const ID_BLUE_BUTTON = "blue";
const ID_YELLOW_BUTTON = "yellow";
const ID_GREEN_BUTTON = "green";
const ID_OFF_BUTTON = "off";
const MAX_COUNT_TOYS = 20;

export class TreePage {
  originalToys: Toy[];
  favoriteToys: Toy[];
  header: Header;
  tree: TreePageLayout;
  player: HTMLAudioElement = document.createElement("audio");
  draggable: Element[];
  constructor(favoriteToys: Toy[] = [], originalToys: Toy[]) {
    this.draggable = [];
    this.player.setAttribute("src", PATH_TO_MUSIC);
    this.favoriteToys = favoriteToys;
    this.originalToys = originalToys.splice(0, MAX_COUNT_TOYS);
    document.body.innerHTML = "";
    this.header = new Header();
    this.tree = new TreePageLayout();
    const footer = new Footer();
    document.body.append(this.header.element, this.tree.element, footer.element);
    if (this.favoriteToys.length === 0) {
      this.drawToys(this.originalToys);
    } else if (this.favoriteToys.length !== 0) {
      this.drawToys(this.favoriteToys);
    }
    this.addEventListenerToWrapperMenu();
    this.addEventListenerToWrapperMedia();
    this.addEventListenerToWrapperTrees();
    this.addEventListenerToWrapperBackground();
    this.addEventListenerToWrapperGarland();
    this.addEventListenerToButtonOption();
    this.addEventListenerToButtonToys();
    this.addEventListenerToButtonCloseToys();
    this.addEventListenerToButtonCloseOptions();
    new DragAndDrop();
  }
  addAllItemDrop() {
    const dragItems = document.querySelectorAll("[draggable]");
    dragItems.forEach((item) => {
      this.draggable.push(item);
    });
  }
  drag() {
    this.draggable.push(document.querySelectorAll("[draggable]")[0]);
  }
  drawToys(toys: Toy[]) {
    toys.forEach((item) => new ToyCard(this.tree.treePageToysCollection, item));
  }
  addEventListenerToButtonCloseOptions() {
    const buttonCloseOptionsPannel = document.querySelector(".tree-page__left-close");
    buttonCloseOptionsPannel?.addEventListener("click", () => {
      this.tree.wrapperLeft.element.classList.remove("options-pannel-viisible");
    });
  }
  addEventListenerToButtonCloseToys() {
    const buttonCloseToyPannel = document.querySelector(".tree-page__wrapper-close");
    buttonCloseToyPannel?.addEventListener("click", () => {
      this.tree.treePageWrapperRight.classList.remove("toy-pannel-viisible");
    });
  }
  addEventListenerToButtonToys() {
    this.tree.buttonToys.element.addEventListener("click", () => {
      this.tree.treePageWrapperRight.classList.add("toy-pannel-viisible");
    });
  }
  addEventListenerToButtonOption() {
    this.tree.addEventListenerToButtonOption(() => {
      this.tree.wrapperLeft.element.classList.add("options-pannel-viisible");
    });
  }
  addEventListenerToWrapperGarland() {
    this.tree.addEventListenerToWrapperGarland((event) => {
      if ((<HTMLElement>event.target).id === ID_MULTICOLOR_BUTTON) {
        this.garlandOn(ID_MULTICOLOR_BUTTON);
      } else if ((<HTMLElement>event.target).id === ID_RED_BUTTON) {
        this.garlandOn(ID_RED_BUTTON);
      } else if ((<HTMLElement>event.target).id === ID_BLUE_BUTTON) {
        this.garlandOn(ID_BLUE_BUTTON);
      } else if ((<HTMLElement>event.target).id === ID_YELLOW_BUTTON) {
        this.garlandOn(ID_YELLOW_BUTTON);
      } else if ((<HTMLElement>event.target).id === ID_GREEN_BUTTON) {
        this.garlandOn(ID_GREEN_BUTTON);
      } else if ((<HTMLElement>event.target).id === ID_OFF_BUTTON) {
        this.garlandOn(ID_OFF_BUTTON);
      }
    });
  }
  garlandOn(color: string) {
    const collectionGarland: NodeListOf<Element> = document.querySelectorAll(".garland-tree");
    collectionGarland.forEach((item) => {
      if (item.id === color) {
        item.classList.remove("none");
      } else item.classList.add("none");
    });
  }
  addEventListenerToWrapperBackground() {
    this.tree.addEventListenerToWrapperBackground((event) => {
      const backgroundCollection: NodeListOf<Element> = document.querySelectorAll(".tree-page__background-box");
      backgroundCollection.forEach((item) => {
        if (event.target === item.children[NUMBER_FIRST_ELEMENT]) {
          this.tree.imageBackground.setAttribute("src", (<HTMLImageElement>item.children[0]).src);
        }
      });
    });
  }
  addEventListenerToWrapperTrees() {
    this.tree.addEventListenerToWrapperTrees((event) => {
      const treesCollection: NodeListOf<Element> = document.querySelectorAll(".tree-page__trees-box");
      treesCollection.forEach((item) => {
        if (event.target === item) {
          this.tree.imageTree.setAttribute("src", (<HTMLImageElement>item.children[0]).src);
        }
      });
    });
  }
  addEventListenerToWrapperMedia() {
    this.tree.addEventListenerToWrapperMedia((event) => {
      const isMusicButton = (<HTMLElement>event.target).classList.contains("tree-page__media-music");
      const isSnowButton = (<HTMLElement>event.target).classList.contains("tree-page__media-snow");
      if (isMusicButton) {
        if (this.player.paused === false) {
          this.player.pause();
        } else {
          this.player.play();
        }
      } else if (isSnowButton) {
        this.tree.snowflakes.classList.toggle("none");
      }
    });
  }
  addEventListenerToWrapperMenu() {
    this.header.addListenerToWrapperMenu((event) => {
      if ((<HTMLElement>event.target).id === ID_SVG_LOGO || (<HTMLElement>event.target).id === ID_SVG_PATH_TAG_LOGO) {
        new MainPage();
      } else if ((<HTMLElement>event.target).innerHTML === TEXT_BUTTON_TOYS) {
        new ToysPage(this.originalToys);
      }
    });
  }
}
