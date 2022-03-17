import { FilterColorParam, FilterFormParam, FilterSizeParam } from "../../interfaces/filterParam";
import { ArrayFilterParam } from "./arrayFilterParam";

const TYPE_FORM = "form";
const TYPE_COLOR = "color";
const TYPE_SIZE = "size";
const BUTTON_FOR_FILTER = "button";
const TITLE_FORM = "Форма";
const TITLE_COLOR = "Цвет";
const TITLE_SIZE = "Размер";
const BOX_FOR_FILTER = "box";

export class WrapperFilter {
  constructor(type: string, element: Element) {
    const param = type === TYPE_FORM ? TYPE_FORM : type === TYPE_COLOR ? TYPE_COLOR : TYPE_SIZE;
    const titleText = type === TYPE_FORM ? TITLE_FORM : type === TYPE_COLOR ? TITLE_COLOR : TITLE_SIZE;
    const boxForButton = type === TYPE_FORM ? BUTTON_FOR_FILTER : type === TYPE_COLOR ? BOX_FOR_FILTER : BOX_FOR_FILTER;
    const countElement =
      type === TYPE_FORM
        ? new ArrayFilterParam().getArrayFiterForm().length
        : type === TYPE_COLOR
          ? new ArrayFilterParam().getArrayFiterColor().length
          : new ArrayFilterParam().getArrayFilterSize().length;
    const arrayFilterParam =
      type === TYPE_FORM
        ? new ArrayFilterParam().getArrayFiterForm()
        : type === TYPE_COLOR
          ? new ArrayFilterParam().getArrayFiterColor()
          : new ArrayFilterParam().getArrayFilterSize();
    const title = document.createElement("h3");
    title.classList.add(`toy-page__${param}-title`);
    title.innerHTML = titleText;
    const toyPageFormWrap = document.createElement("div");
    toyPageFormWrap.classList.add(`toy-page__${param}-wrap`);
    for (let i = 0; i < countElement; i++) {
      const wrapper = document.createElement("div");
      wrapper.classList.add(`toy-page__${param}-${boxForButton}`);
      const input = document.createElement("input");
      input.setAttribute("type", "checkbox");
      const label = document.createElement("label");
      const buttonName = document.createElement("h4");
      buttonName.classList.add(`toy-page__${param}-button-name`);
      const span = document.createElement("span");
      span.classList.add(`toy-page__${param}-span`);
      this.createParamFilter(type, arrayFilterParam[i], [input, label, buttonName], span);
      wrapper.append(input, label, buttonName, span);
      toyPageFormWrap.append(wrapper);
      element.append(title, toyPageFormWrap);
    }
  }

  private createParamFilter(
    type: string,
    filterParam: FilterSizeParam | FilterColorParam | FilterFormParam,
    arrElem: Element[],
    span: Element
  ) {
    const [input, label, buttonName] = arrElem;
    const nameParam = filterParam.nameParam;
    const nameParamForAttribute = filterParam.nameParamForAttribute;
    const id =
      type === TYPE_SIZE || type === TYPE_COLOR
        ? `toy-page__${filterParam.param}-btn--${nameParam}`
        : `btn-${filterParam.nameParam}`;
    const svg = filterParam.svg;
    const labelClassOne = `toy-page__${filterParam.param}-btn`;
    const labelClassTwo =
      type === TYPE_SIZE
        ? "label"
        : type === TYPE_COLOR
          ? `toy-page__${filterParam.param}-btn--${nameParam}`
          : "label-form";
    const labelClassThree = type === TYPE_COLOR ? `label` : "fix-class";
    const nameParamTranslate = type === TYPE_FORM ? filterParam.nameParamTranslate : "";
    const inputClass =
      type === TYPE_SIZE || type === TYPE_COLOR
        ? `toy-page__${filterParam.param}-btn--${nameParam}`
        : `toy-page__form-btn--${nameParam}`;
    if (type === TYPE_SIZE) {
      span.innerHTML = filterParam.nameParamTranslate;
    } else span.innerHTML = "";
    const arrayButton = [
      inputClass,
      nameParamForAttribute,
      id,
      labelClassOne,
      labelClassTwo,
      labelClassThree,
      nameParamTranslate,
      svg,
    ];
    const arrayElems = [input, label, buttonName];
    this.createButtonFilter(arrayButton, arrayElems);
  }
  private createButtonFilter(arrayButton: string[], arrayElems: Element[]) {
    const [
      inputClass,
      nameParamForAttribute,
      id,
      labelClassOne,
      labelClassTwo,
      labelClassThree,
      nameParamTranslate,
      svg,
    ] = arrayButton;
    const [input, label, buttonName] = arrayElems;
    input.classList.add("none", inputClass);
    input.setAttribute("value", nameParamForAttribute);
    input.setAttribute("id", id);
    label.setAttribute("for", id);
    label.classList.add(labelClassOne, labelClassTwo, labelClassThree);
    buttonName.innerHTML = nameParamTranslate;
    label.insertAdjacentHTML("afterbegin", svg);
  }
}
