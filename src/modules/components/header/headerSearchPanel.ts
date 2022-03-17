import { HeaderSvg } from "./svg";

export class HeaderSearchPanel {
  createHeaderSearchPanel() {
    const headerSearchPanel = document.createElement("div");
    headerSearchPanel.classList.add("header-search__panel-form");
    const headerSearchInput = document.createElement("input");
    headerSearchInput.classList.add("header-search__panel-input");
    headerSearchInput.setAttribute("type", "text");
    headerSearchInput.setAttribute("placeholde", "Поиск");
    headerSearchPanel.prepend(headerSearchInput);
    headerSearchPanel.insertAdjacentHTML("beforeend", new HeaderSvg().getSvgInputClose());
    headerSearchPanel.insertAdjacentHTML("beforeend", new HeaderSvg().getSvgInputPanel());
    return headerSearchPanel;
  }
}
