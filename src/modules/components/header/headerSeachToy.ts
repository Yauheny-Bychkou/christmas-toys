export class HeaderSearchToy {
  createHeaderSearchToy() {
    const headerSearchToy = document.createElement("div");
    headerSearchToy.classList.add("header-search__toy");
    const headerSearchToyTop = document.createElement("div");
    headerSearchToyTop.classList.add("header-search__toy-top");
    const headerSearchToyBottom = document.createElement("div");
    headerSearchToyBottom.classList.add("header-search__toy-bottom");
    const headerSearchToyInput = document.createElement("input");
    headerSearchToyInput.classList.add("header-search__toy-input");
    headerSearchToyInput.setAttribute("type", "text");
    headerSearchToyInput.setAttribute("value", "0");
    headerSearchToyInput.setAttribute("disabled", "");
    headerSearchToyBottom.append(headerSearchToyInput);
    headerSearchToy.append(headerSearchToyTop, headerSearchToyBottom);
    return headerSearchToy;
  }
}
