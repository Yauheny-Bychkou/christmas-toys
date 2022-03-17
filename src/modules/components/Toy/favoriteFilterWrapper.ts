import { SvgToyPage } from "./svg";

export class FavoriteFilterWrapper {
  constructor(element: Element) {
    const input = document.createElement("input");
    input.classList.add("none");
    input.setAttribute("type", "checkbox");
    input.setAttribute("value", "true");
    input.setAttribute("id", "toy-page__favorit-btn--like");
    const label = document.createElement("label");
    label.setAttribute("for", "toy-page__favorit-btn--like");
    label.classList.add("toy-page__favorit-btn", "label");
    const span = document.createElement("span");
    span.classList.add("toy-page__favorit-span");
    span.innerHTML = "Только любимые";
    label.insertAdjacentHTML("afterbegin", new SvgToyPage().getSvgFavorite());
    element.append(input, label, span);
  }
}
