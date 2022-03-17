import Button from "../button/button";
import { HeaderSvg } from "./svg";

const COUNT_HEADER_BUTTONS = 3;
const NUMBER_FIRST_ELEMENT_LI = 0;
const NUMBER_SECOND_ELEMENT_LI = 1;
const NUMBER_THIRD_ELEMENT_LI = 2;

export class HeaderNavList {
  createHeaderNavList() {
    const headerNavList = document.createElement("ul");
    headerNavList.classList.add("header-nav__list");
    for (let i = 0; i < COUNT_HEADER_BUTTONS; i++) {
      const listItem = document.createElement("li");
      if (i === NUMBER_FIRST_ELEMENT_LI) {
        listItem.classList.add("header-nav__item", "header-nav__item--start");
        const button = new Button({
          className: `header-nav__bnt`,
          text: "",
        });
        button.element.classList.add("header-nav__bnt-toys");
        button.element.insertAdjacentHTML("afterbegin", new HeaderSvg().getSvgLogo());
        listItem.append(button.element);
        headerNavList.append(listItem);
      } else if (i === NUMBER_SECOND_ELEMENT_LI) {
        listItem.classList.add("header-nav__item", "header-nav__item--toys");
        const button = new Button({
          className: `header-nav__bnt`,
          text: "Игрушки",
        });
        listItem.append(button.element);
        headerNavList.append(listItem);
      } else if (i === NUMBER_THIRD_ELEMENT_LI) {
        listItem.classList.add("header-nav__item", "header-nav__item--toys");
        const button = new Button({
          className: `header-nav__bnt`,
          text: "Ёлка",
        });
        listItem.append(button.element);
        headerNavList.append(listItem);
      }
    }
    return headerNavList;
  }
}
