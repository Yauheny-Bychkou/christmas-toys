export class WrapperReset {
  constructor(element: Element) {
    const button = document.createElement("button");
    button.innerHTML = "Сбросить фильтры";
    button.classList.add("toy-page__buttons-btn", "toy-page__buttons-filter");
    element.append(button);
  }
}
