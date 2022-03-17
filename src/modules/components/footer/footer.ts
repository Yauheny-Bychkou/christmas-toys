const YEAR = "2022";

export class Footer {
  element: HTMLElement;
  constructor() {
    this.element = document.createElement("footer");
    this.element.classList.add("footer");
    const container = document.createElement("div");
    container.classList.add("container");
    const footerWrap = document.createElement("div");
    footerWrap.classList.add("footer-wrap");
    const footerWrapLeft = document.createElement("div");
    footerWrapLeft.classList.add("footer-wrap__left");
    const footerWrapLink = document.createElement("a");
    footerWrapLink.classList.add("footer-wrap__link");
    footerWrapLink.setAttribute("target", "blank");
    footerWrapLink.setAttribute("href", "https://github.com/Yauheny-Bychkou");
    footerWrapLink.innerHTML = "Yauheny Bychkou";
    const span = document.createElement("span");
    span.innerHTML = YEAR;
    footerWrapLeft.append(footerWrapLink, span);
    const linkSchool = document.createElement("a");
    linkSchool.setAttribute("target", "blank");
    linkSchool.setAttribute("href", "https://rs.school/js/");
    const imageSchool = document.createElement("img");
    imageSchool.setAttribute("alt", "logo");
    imageSchool.setAttribute(
      "src",
      "https://raw.githubusercontent.com/Yauheny-Bychkou/Images/627375e53498745139ea7f55f6bfebbf4633b8c8/RS.svg"
    );
    linkSchool.append(imageSchool);
    footerWrap.append(footerWrapLeft, linkSchool);
    container.append(footerWrap);
    this.element.append(container);
  }
}
