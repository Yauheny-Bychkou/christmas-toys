import { Toy } from "../../interfaces/toy.model";

export class ToyLayout {
  constructor(toyData: Toy) {
    const containerToys = document.querySelector(".toy-page__right-sources") as Element;
    const wrapperToys = document.createElement("div")!;
    const wrapperToy = document.createElement("div")!;
    wrapperToys.classList.add("toy-page__right-sources");
    containerToys.append(wrapperToys);
    wrapperToy.classList.add("toy-page__right-item");
    wrapperToy.append(
      this.createNameToy(toyData),
      this.createImageToy(toyData),
      this.createNumberToy(toyData),
      this.createYearToy(toyData),
      this.createFormToy(toyData),
      this.createColorToy(toyData),
      this.createSizeToy(toyData),
      this.createFavoriteToys(toyData),
      this.createStickerFavorite(),
      this.createOverlay(toyData)
    );
    wrapperToys.append(wrapperToy);
  }
  createOverlay(toyData: Toy) {
    const overlay = document.createElement("div");
    overlay.setAttribute("id", toyData.num);
    overlay.classList.add("toy-page__right-overlay");
    return overlay;
  }
  createStickerFavorite() {
    const stickerFavorite = document.createElement("span");
    stickerFavorite.classList.add("toy-page__right-span");
    stickerFavorite.style.backgroundColor = "#24C5DB";
    return stickerFavorite;
  }
  createFavoriteToys(toyData: Toy) {
    const favoriteToy = document.createElement("h4");
    favoriteToy.classList.add("toy-page__right-property");
    favoriteToy.textContent = toyData.favorite ? "Любимая: да" : "Любимая: нет";
    return favoriteToy;
  }
  createSizeToy(toyData: Toy) {
    const sizeToy = document.createElement("h4");
    sizeToy.classList.add("toy-page__right-property");
    sizeToy.textContent = `Размер: ${toyData.size}`;
    return sizeToy;
  }
  createColorToy(toyData: Toy) {
    const colorToy = document.createElement("h4");
    colorToy.classList.add("toy-page__right-property");
    colorToy.textContent = `Цвет: ${toyData.color}`;
    return colorToy;
  }
  createFormToy(toyData: Toy) {
    const formToy = document.createElement("h4");
    formToy.classList.add("toy-page__right-property");
    formToy.textContent = `Форма: ${toyData.shape}`;
    return formToy;
  }
  createNumberToy(toyData: Toy) {
    const numberToy = document.createElement("h4");
    const spanNumberToy = document.createElement("span");
    numberToy.classList.add("toy-page__right-property");
    numberToy.textContent = "Количество: ";
    spanNumberToy.classList.add("toy-page__right-count--span");
    spanNumberToy.textContent = toyData.count.toString();
    numberToy.append(spanNumberToy);
    return numberToy;
  }
  createYearToy(toyData: Toy) {
    const yearToy = document.createElement("h4");
    yearToy.classList.add("toy-page__right-property");
    yearToy.textContent = `Год покупки: ${toyData.year.toString()}`;
    return yearToy;
  }
  createImageToy(toyData: Toy) {
    const wrapperImageToy = document.createElement("div");
    const imageToy = document.createElement("img");
    imageToy.setAttribute("alt", "toy-image");
    imageToy.setAttribute(
      "src",
      `https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/christmas-task/assets/toys/${toyData.num}.png`
    );
    imageToy.classList.add("toy-page__right-img");
    wrapperImageToy.classList.add("toy-page__right-box");
    wrapperImageToy.append(imageToy);
    return wrapperImageToy;
  }
  createNameToy(toyData: Toy) {
    const nameToy = document.createElement("h3");
    nameToy.textContent = toyData.name;
    nameToy.classList.add("toy-page__right-name");
    return nameToy;
  }
}
