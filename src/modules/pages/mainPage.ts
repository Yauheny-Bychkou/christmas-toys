import { Footer } from "../components/footer/footer";
import { Header } from "../components/header/header";
import { Main } from "../components/main/main";
import { ToysPage } from "./toysPage";
import { TreePage } from "./treePage";

const TEXT_BUTTON_TOYS = "Игрушки";
const TEXT_BUTTON_TREE = "Ёлка";
const URL = "./dbHeroes.json";

export class MainPage {
  constructor() {
    document.body.innerHTML = "";
    const header = new Header();
    const main = new Main();
    const footer = new Footer();
    document.body.append(header.element, main.element, footer.element);
    header.addListenerToWrapperMenu((event) => {
      if ((<HTMLElement>event.target).innerHTML === TEXT_BUTTON_TOYS) {
        this.getToys(TEXT_BUTTON_TOYS);
      } else if ((<HTMLElement>event.target).innerHTML === TEXT_BUTTON_TREE) {
        this.getToys(TEXT_BUTTON_TREE);
      }
    });
    main.addListenerToWrapperMain((event) => {
      if ((<HTMLElement>event.target).classList.contains("start-page__border")) {
        this.getToys(TEXT_BUTTON_TOYS);
      }
    });
  }
  async getToys(typePage: string) {
    const requestArrayToys = await fetch(URL);
    const arraytoys = await requestArrayToys.json();
    if (typePage === TEXT_BUTTON_TOYS) {
      new ToysPage(arraytoys);
    } else if (typePage === TEXT_BUTTON_TREE) {
      new TreePage([], arraytoys);
    }
  }
}
