import { MainSvg } from "./svg";

export class StartPageTop {
  createStartPageTop() {
    const startPageTop = document.createElement("div");
    startPageTop.classList.add("start-page__top");
    const startPagePosition = document.createElement("div");
    startPagePosition.classList.add("start-page__position");
    const startPageTitle = document.createElement("h2");
    startPageTitle.classList.add("start-page__title");
    startPageTitle.innerHTML = "Помогите бабушке нарядить елку";
    startPageTop.insertAdjacentHTML("afterbegin", new MainSvg().getSvgPageTop());
    startPagePosition.append(startPageTitle);
    startPageTop.append(startPagePosition);
    return startPageTop;
  }
}
