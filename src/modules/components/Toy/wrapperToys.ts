export class WrapperToys {
  constructor(element: Element) {
    const title = document.createElement("h2");
    const wrapperToys = document.createElement("div");
    title.classList.add("toy-page__right-title");
    title.innerHTML = "Игрушки";
    wrapperToys.classList.add("toy-page__right-sources", "sources", "buttons");
    element.append(title, wrapperToys);
  }
}
