import { Toy } from "../../interfaces/toy.model";

export class ToyCard {
  constructor(element: Element, toy: Toy) {
    const div: HTMLDivElement = document.createElement("div");
    const image: HTMLImageElement = document.createElement("img");
    const span: HTMLSpanElement = document.createElement("span");
    div.setAttribute("data-drop-target", "true");
    div.append(image, span);
    element.append(div);
    div.classList.add("tree-page__toys-box", `tree-page__toys-box-${toy.num}`);
    image.classList.add("tree-page__toys-img", `tree-page__toys-img-${toy.num}`);
    image.setAttribute("draggable", "true");
    image.setAttribute("data-item", `tree-page__toys-box-${toy.num}`);
    image.setAttribute("id", `toy-${toy.num}`);
    image.setAttribute(
      "src",
      `https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/christmas-task/assets/toys/${toy.num}.png`
    );
    span.setAttribute("id", `tree-page__toys-span-${toy.num}`);
    span.classList.add(`tree-page__toys-span`);
    span.textContent = String(toy.count);
  }
}
