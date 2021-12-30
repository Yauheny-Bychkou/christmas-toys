import { Toy } from "../app/toy.model";

export class AppTrees {
  originalToys: Toy[];
  arrayToys: Toy[];
  draggable: Element[];
  constructor(data: Toy[]) {
    this.draggable = [];
    this.originalToys = data.slice();
    this.arrayToys = data.splice(0, 20);
    this.addImageTrees();
    this.addImageBackground();
    this.addImageToys();
    this.initMedia();
    this.changeImageTree();
    this.changeImageBackground();
    this.displayGarland();

    const draggable = document.querySelectorAll("[draggable]");
    const targets = document.querySelectorAll("[data-drop-target]");
    draggable.forEach((item) => {
      this.draggable.push(item);
    });

    targets.forEach((item) => {
      item.addEventListener("dragenter", (event: Event) => {
        event.preventDefault();
      });
      item.addEventListener("dragover", (event: Event) => {
        event.preventDefault();
      });
      item.addEventListener("drop", (event: Event) => {
        event.preventDefault();
        const classToy = (<DragEvent>event).dataTransfer!.getData("classToy");
        const wrapperToy = (<DragEvent>event).dataTransfer!.getData("wrapperToy");
        const dragFlag = (<DragEvent>event).dataTransfer!.getData("id");
        let num;
        if (dragFlag.length === 5) {
          num = dragFlag.slice(-1);
        } else if (dragFlag.length === 6) {
          num = dragFlag.slice(-2);
        }
        const dragItem = document.querySelector(`[data-item ="${num}"]`)!;
        if (wrapperToy === "tree-page__toys-box") {
          let spanFlag = +(<DragEvent>event).dataTransfer!.getData("spanCount");
          let spanIdFlag = (<DragEvent>event).dataTransfer!.getData("spanId");

          const spanItem = document.querySelector(`#${spanIdFlag}`)!;
          const dragItem = document.querySelector(`#${dragFlag}`)!;
          spanItem.textContent = `${spanFlag - 1}`;
          if (spanItem.textContent === "0") {
            const toys = document.querySelectorAll(`.${dragItem.classList[1]}`);
            toys[toys.length - 1].remove();
          }
          const cloneItem = dragItem.cloneNode(true);
          (<HTMLElement>event.target).append(cloneItem);
        } else if (wrapperToy !== "tree-page__toys-box") {

          (<HTMLElement>event.target).append(dragItem);
        }
        // console.log(document.querySelector(`.${wrapperToyOne}`));



        // if (spanItem.textContent >= "0") {
        //   const cloneItem = dragItem.cloneNode(true);
        //   (<HTMLElement>event.target).append(cloneItem);
        //   if (spanItem.textContent === "0") {
        //     itemToys[itemToys.length - 1].remove();
        //   }
        // }
        // // (<HTMLElement>event.target).append(dragItem);
        // this.draggable.push();
        // 
        this.drag();
        this.dragAndDropToys();
      });
    });
    this.dragAndDropToys();
  }
  filterFavoriteToys(array: Toy[]) {
    if (array) {
      document.querySelectorAll('.tree-page__toys-box')
        .forEach((item: Element) => item.remove());
      this.arrayToys = array;
      this.addImageToys();
    }

  }
  changeImageBackground() {
    const backgroundImages: NodeListOf<Element> = document.querySelectorAll(".tree-page__background-img");
    const backgroundImage = document.querySelector(".tree-page__background-start");
    backgroundImages.forEach((item) => {
      item.addEventListener("click", () => {
        backgroundImage?.setAttribute('src', (<HTMLImageElement>item).src)
      });
    });
  }
  changeImageTree() {
    const boxImageTrees: NodeListOf<Element> = document.querySelectorAll(".tree-page__trees-box");
    const imageTree: Element = document.querySelector(".tree-page__background-tree")!;
    boxImageTrees.forEach((item) => {
      item.addEventListener("click", () => {
        imageTree.setAttribute("src", (<HTMLImageElement>(<Element>item).childNodes[0]).src);
      });
    });
  }
  initMedia() {
    const player = document.createElement("audio");
    const musicButton = document.querySelector(".tree-page__media-music") as Element;
    const snowButton = document.querySelector(".tree-page__media-snow") as Element;
    const snowflakes = document.querySelector(".snowflakes") as Element;
    player.setAttribute("src", "music.mp3");
    musicButton.addEventListener("click", (event: Event) => {
      if (player.paused === false) {
        player.pause();
      } else {
        player.play();
      }

    });
    snowButton.addEventListener("click", (event: Event) => {
      snowflakes.classList.toggle("none");
    });

  }
  addImageTrees() {
    const treesWrapper: NodeListOf<Element> = document.querySelectorAll(".tree-page__trees-box");
    treesWrapper.forEach((elem: Element, i: number) => {
      const image: HTMLImageElement = document.createElement("img");
      elem.append(image);
      image.classList.add("tree-page__trees-img");
      image.setAttribute("alt", `tree`);
      image.setAttribute("src", `https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/christmas-task/assets/tree/${i + 1}.png`)
    })
  }
  addImageBackground() {
    const backgrounsWrapper: NodeListOf<Element> = document.querySelectorAll(".tree-page__background-box");
    backgrounsWrapper.forEach((elem: Element, i: number) => {
      const image: HTMLImageElement = document.createElement("img");
      elem.append(image);
      image.classList.add("tree-page__background-img");
      image.setAttribute("alt", `background`);
      image.setAttribute("src", `https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/christmas-task/assets/bg/${i + 1}.jpg`)
    });
  }
  addImageToys() {
    const toysWrapper: Element | null = document.querySelector(".tree-page__toys-collection");
    this.arrayToys.forEach((item) => {


      const div: HTMLDivElement = document.createElement("div");
      const image: HTMLImageElement = document.createElement("img");
      const span: HTMLSpanElement = document.createElement("span");
      div.setAttribute("data-drop-target", "true");
      div.append(image, span);
      toysWrapper!.append(div);
      div.classList.add("tree-page__toys-box", `tree-page__toys-box-${item.num}`);
      image.classList.add("tree-page__toys-img", `tree-page__toys-img-${item.num}`);
      image.setAttribute("draggable", "true");
      image.setAttribute("data-item", `${item.num}`);
      image.setAttribute("id", `toy-${item.num}`);
      image.setAttribute("src", `https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/christmas-task/assets/toys/${item.num}.png`);
      span.setAttribute("id", `tree-page__toys-span-${item.num}`)
      span.classList.add(`tree-page__toys-span`);
      span.textContent = String(item.count);
    })

  }
  displayGarland() {
    const buttonMultiColor: Element | null = document.querySelector(".tree-page__garland-multicolor");
    const garlandMulticolor = document.querySelector(".garland-multicolor");
    const garlandYellow = document.querySelector(".garland-yellow");
    const buttonYellow = document.querySelector(".tree-page__garland-yellow");
    const buttonRed = document.querySelector(".tree-page__garland-red");
    const buttonBlue = document.querySelector(".tree-page__garland-blue");
    const buttonGreen = document.querySelector(".tree-page__garland-green");
    const garlandGreen = document.querySelector(".garland-green");
    const garlandBlue = document.querySelector(".garland-blue");
    const garlandRed = document.querySelector(".garland-red");
    const offGarland = document.querySelector(".tree-page__garland-off");
    buttonGreen?.addEventListener("click", () => {
      garlandGreen!.classList.remove("none");
      garlandBlue!.classList.add("none");
      garlandRed!.classList.add("none");
      garlandYellow!.classList.add("none");
      garlandMulticolor?.classList.add("none");
    });
    buttonBlue?.addEventListener("click", () => {
      garlandBlue!.classList.remove("none");
      garlandRed!.classList.add("none");
      garlandYellow!.classList.add("none");
      garlandMulticolor?.classList.add("none");
      garlandGreen!.classList.add("none");
    });
    buttonRed?.addEventListener("click", () => {
      garlandRed!.classList.remove("none");
      garlandYellow!.classList.add("none");
      garlandMulticolor?.classList.add("none");
      garlandBlue!.classList.add("none");
      garlandGreen!.classList.add("none");
    });
    buttonYellow?.addEventListener("click", () => {
      garlandYellow!.classList.remove("none");
      garlandMulticolor?.classList.add("none");
      garlandRed!.classList.add("none");
      garlandBlue!.classList.add("none");
      garlandGreen!.classList.add("none");

    });
    buttonMultiColor?.addEventListener("click", () => {
      garlandMulticolor?.classList.remove("none");
      garlandYellow!.classList.add("none");
      garlandRed!.classList.add("none");
      garlandBlue!.classList.add("none");
      garlandGreen!.classList.add("none");

    });
    offGarland?.addEventListener("click", () => {
      garlandYellow!.classList.add("none");
      garlandMulticolor?.classList.add("none");
      garlandRed!.classList.add("none");
      garlandBlue!.classList.add("none");
      garlandGreen!.classList.add("none");
    });
  }
  dragAndDropToys() {
    this.draggable.forEach((item) => {
      item.addEventListener("dragstart", (event: Event) => {
        let wrapperToy = (<HTMLElement>(<HTMLElement>event.target).parentNode).classList[0];
        if ((<HTMLElement>(<HTMLElement>event.target).parentNode).classList[0] !== "drop-zone__box") {
          let spanId = (<HTMLElement>event.target).parentNode?.children[1].id as string;
          let spanCount = (<HTMLElement>event.target).parentNode?.children[1].textContent as string;
          (<DragEvent>event).dataTransfer!.setData("spanId", spanId);
          (<DragEvent>event).dataTransfer!.setData("spanCount", spanCount);
        }
        (<DragEvent>event).dataTransfer!.setData("classToy", (<HTMLElement>event.target).classList[1]);
        (<DragEvent>event).dataTransfer!.setData("wrapperToy", wrapperToy);
        (<DragEvent>event).dataTransfer!.setData("id", (<HTMLElement>event.target).id);
      });
    });



  }

  drag() {
    this.draggable.push(document.querySelectorAll("[draggable]")[0]);

  }

}
