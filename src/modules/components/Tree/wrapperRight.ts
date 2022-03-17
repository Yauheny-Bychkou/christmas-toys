export class WrapperRight {
  element: HTMLElement = document.createElement("div");
  title: HTMLElement = document.createElement("h3");
  treePageToysCollection: HTMLElement = document.createElement("div");
  constructor() {
    this.element.classList.add("tree-page__toys");
    this.title.classList.add("tree-page__toys-title");
    this.title.innerHTML = "Игрушки";
    this.treePageToysCollection.classList.add("tree-page__toys-collection");
    this.element.append(this.title, this.treePageToysCollection);
  }
}
