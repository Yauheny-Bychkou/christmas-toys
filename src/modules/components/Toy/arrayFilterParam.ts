import { SvgToyPage } from "./svg";

const TYPE_PARAM_FILTER_FORM = "form";
const TYPE_PARAM_FILTER_COLOR = "color";
const TYPE_PARAM_FILTER_SIZE = "size";
const FORM_FILTER_BELL = {
  nameParam: "bell",
  nameParamForAttribute: "колокольчик",
  nameParamTranslate: "Колокол",
  param: TYPE_PARAM_FILTER_FORM,
  svg: new SvgToyPage().getSvgBellForm(),
};
const FORM_FILTER_BALL = {
  nameParam: "ball",
  nameParamForAttribute: "шар",
  nameParamTranslate: "Шар",
  param: TYPE_PARAM_FILTER_FORM,
  svg: new SvgToyPage().getSvgBallForm(),
};
const FORM_FILTER_CONE = {
  nameParam: "cone",
  nameParamForAttribute: "шишка",
  nameParamTranslate: "Шишка",
  param: TYPE_PARAM_FILTER_FORM,
  svg: new SvgToyPage().getSvgConeForm(),
};
const FORM_FILTER_SNOWFLAKE = {
  nameParam: "snowflake",
  nameParamForAttribute: "снежинка",
  nameParamTranslate: "Снежинка",
  param: TYPE_PARAM_FILTER_FORM,
  svg: new SvgToyPage().getSvgSnowFlakeForm(),
};
const FORM_FILTER_FIGURE = {
  nameParam: "figure",
  nameParamForAttribute: "фигурка",
  nameParamTranslate: "Фигурка",
  param: TYPE_PARAM_FILTER_FORM,
  svg: new SvgToyPage().getSvgFigureForm(),
};
const COLOR_FILTER_WHITE = {
  nameParam: "white",
  nameParamForAttribute: "белый",
  svg: new SvgToyPage().getSvgWhiteColor(),
  param: TYPE_PARAM_FILTER_COLOR,
  nameParamTranslate: "",
};
const COLOR_FILTER_YELLOW = {
  nameParam: "yellow",
  nameParamForAttribute: "желтый",
  svg: new SvgToyPage().getSvgYellowColor(),
  param: TYPE_PARAM_FILTER_COLOR,
  nameParamTranslate: "",
};
const COLOR_FILTER_RED = {
  nameParam: "red",
  nameParamForAttribute: "красный",
  svg: new SvgToyPage().getSvgRedColor(),
  param: TYPE_PARAM_FILTER_COLOR,
  nameParamTranslate: "",
};
const COLOR_FILTER_BLUE = {
  nameParam: "blue",
  nameParamForAttribute: "синий",
  svg: new SvgToyPage().getSvgBlueColor(),
  param: TYPE_PARAM_FILTER_COLOR,
  nameParamTranslate: "",
};
const COLOR_FILTER_GREEN = {
  nameParam: "green",
  nameParamForAttribute: "зелёный",
  svg: new SvgToyPage().getSvgGreenColor(),
  param: TYPE_PARAM_FILTER_COLOR,
  nameParamTranslate: "",
};
const SIZE_FILTER_BIG = {
  nameParam: "big",
  nameParamForAttribute: "большой",
  nameParamTranslate: "Большой",
  svg: new SvgToyPage().getSvgBigSize(),
  param: TYPE_PARAM_FILTER_SIZE,
};
const SIZE_FILTER_MIDDLE = {
  nameParam: "middle",
  nameParamForAttribute: "средний",
  nameParamTranslate: "Средний",
  svg: new SvgToyPage().getSvgMiddleSize(),
  param: TYPE_PARAM_FILTER_SIZE,
};
const SIZE_FILTER_SMALL = {
  nameParam: "small",
  nameParamForAttribute: "малый",
  nameParamTranslate: "Маленький",
  svg: new SvgToyPage().getSvgSmallSize(),
  param: TYPE_PARAM_FILTER_SIZE,
};

export class ArrayFilterParam {
  getArrayFiterForm() {
    return [FORM_FILTER_BELL, FORM_FILTER_BALL, FORM_FILTER_CONE, FORM_FILTER_SNOWFLAKE, FORM_FILTER_FIGURE];
  }
  getArrayFiterColor() {
    return [COLOR_FILTER_WHITE, COLOR_FILTER_YELLOW, COLOR_FILTER_RED, COLOR_FILTER_BLUE, COLOR_FILTER_GREEN];
  }
  getArrayFilterSize() {
    return [SIZE_FILTER_BIG, SIZE_FILTER_MIDDLE, SIZE_FILTER_SMALL];
  }
}
