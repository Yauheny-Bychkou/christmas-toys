import Button from "../button/button";
import { MainSvg } from "./svg";

export class StartPageBottom {
  createStartPageBottom() {
    const startPageBottom = document.createElement("div");
    startPageBottom.classList.add("start-page__bottom");
    const button = new Button({
      className: `start-page__button`,
      text: "Начать",
    });
    button.element.insertAdjacentHTML("afterbegin", new MainSvg().getSvgPageBottom());
    startPageBottom.append(button.element);
    return startPageBottom;
  }
}
