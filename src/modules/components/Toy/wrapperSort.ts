const COUNT_OPTIONS_IN_SELECT = 5;
const NUMBER_FIRST_ELEMENT = 0;
const NUMBER_SECOND_ELEMENT = 1;
const NUMBER_THIRD_ELEMENT = 2;
const NUMBER_FOURTH_ELEMENT = 3;
const NUMBER_FIRTH_ELEMENT = 4;

export class WrapperSort {
  constructor(element: Element) {
    const title = document.createElement("h3");
    title.classList.add("toy-page__sort-title");
    title.innerHTML = "Сортировать";
    const toyPageSortWrap = document.createElement("div");
    toyPageSortWrap.classList.add("toy-page__sort-wrap");
    const toyPageSortSelect = document.createElement("select");
    toyPageSortSelect.classList.add("toy-page__sort-select");
    toyPageSortSelect.setAttribute("name", "");
    toyPageSortSelect.setAttribute("id", "");
    for (let i = 0; i < COUNT_OPTIONS_IN_SELECT; i++) {
      const option = document.createElement("option");
      option.classList.add("toy-page__sort-option");
      if (i === NUMBER_FIRST_ELEMENT) {
        option.setAttribute("value", "start");
        option.innerHTML = "по параметру";
      } else if (i === NUMBER_SECOND_ELEMENT) {
        option.setAttribute("value", "start-letter");
        option.innerHTML = "По названию от 'А' до 'Я'";
      } else if (i === NUMBER_THIRD_ELEMENT) {
        option.setAttribute("value", "end-letter");
        option.innerHTML = "По названию от 'Я' до 'А'";
      } else if (i === NUMBER_FOURTH_ELEMENT) {
        option.setAttribute("value", "start-count");
        option.innerHTML = "По возрастанию кол-ва";
      } else if (i === NUMBER_FIRTH_ELEMENT) {
        option.setAttribute("value", "end-count");
        option.innerHTML = "По убыванию кол-ва";
      }
      toyPageSortSelect.append(option);
    }
    toyPageSortWrap.append(toyPageSortSelect);
    element.append(title, toyPageSortWrap);
  }
}
