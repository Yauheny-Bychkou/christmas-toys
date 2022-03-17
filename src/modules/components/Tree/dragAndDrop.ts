const NAME_WRAPPER_INIT = "tree-page__toys-box";
const NAME_IMAGE_INIT = "tree-page__toys-img";
const CLASS_NAME_INIT_SPAN = "tree-page__toys-span";
const CLASS_NAME_WRAPPER_DROP = "drop-zone__box";
const MIN_COUNT_TOYS_STR = "0";
const FIRST_ELEM = 0;
const NUMBER_ONE = 1;

export class DragAndDrop {
  constructor() {
    const dropZones = document.querySelectorAll("[data-drop-target]");
    this.addEventListenerToDragItems();
    dropZones.forEach((dropZone) => {
      dropZone.addEventListener("dragenter", (event: Event) => {
        event.preventDefault();
      });
      dropZone.addEventListener("dragover", (event: Event) => {
        event.preventDefault();
      });
      dropZone.addEventListener("drop", (event: Event) => {
        event.preventDefault();
        const wrapperToy = (<DragEvent>event).dataTransfer!.getData("wrapperToy");
        if (wrapperToy === "tree-page__toys-box") {
          const dragFlag = (<DragEvent>event).dataTransfer!.getData("classToy");
          if (dragFlag !== "") {
            const dragItem = document.querySelector(`.${dragFlag}`)!;
            const spanFlag = +(<DragEvent>event).dataTransfer!.getData("spanCount");
            const spanIdFlag = (<DragEvent>event).dataTransfer!.getData("spanId");
            const spanItem = document.querySelector(`#${spanIdFlag}`)!;
            const count = spanFlag - NUMBER_ONE;
            spanItem.textContent = `${count}`;
            if (spanItem.textContent === MIN_COUNT_TOYS_STR) {
              const toys = document.querySelectorAll(`.${dragItem.classList[NUMBER_ONE]}`);
              toys[toys.length - NUMBER_ONE].remove();
            }
            const cloneItem = dragItem.cloneNode(true);
            (<HTMLElement>event.target).append(cloneItem);
            (<HTMLElement>cloneItem).setAttribute("id", count.toString());
            this.addEventListenerToDragItems();
          }
        } else if (wrapperToy !== NAME_WRAPPER_INIT) {
          if (
            (<HTMLElement>event.target).classList[FIRST_ELEM] !== NAME_WRAPPER_INIT &&
            (<HTMLElement>event.target).classList[FIRST_ELEM] !== NAME_IMAGE_INIT
          ) {
            const dragFlag = (<DragEvent>event).dataTransfer!.getData("id");
            if (dragFlag !== "") {
              const dragItemNUMBER_ONE = document.querySelector(`[id='${dragFlag}']`)!;
              (<HTMLElement>event.target).append(dragItemNUMBER_ONE);
            }
            this.addEventListenerToDragItems();
          } else {
            const dragFlag = (<DragEvent>event).dataTransfer!.getData("id");
            if (dragFlag !== "") {
              const dragItemNUMBER_ONE = document.querySelector(`[id='${dragFlag}']`)!;
              const initWrapper = document.querySelector(`.${(<HTMLElement>dragItemNUMBER_ONE).dataset.item}`)!;
              if (initWrapper.children[FIRST_ELEM].classList[FIRST_ELEM] === NAME_IMAGE_INIT) {
                initWrapper.children[NUMBER_ONE].innerHTML = (
                  Number(initWrapper.children[NUMBER_ONE].innerHTML) + NUMBER_ONE
                ).toString();
                dragItemNUMBER_ONE.remove();
              } else if (initWrapper.children[FIRST_ELEM].classList[FIRST_ELEM] === CLASS_NAME_INIT_SPAN) {
                initWrapper.prepend(dragItemNUMBER_ONE);
                initWrapper.children[NUMBER_ONE].innerHTML = (
                  Number(initWrapper.children[NUMBER_ONE].innerHTML) + NUMBER_ONE
                ).toString();
              }
            }
          }
        }
      });
    });
  }
  addEventListenerToDragItems() {
    const dragItems = document.querySelectorAll("[draggable]");
    dragItems.forEach((item) => {
      item.addEventListener(
        "dragstart",
        (event: Event) => {
          const wrapperToy = (<HTMLElement>(<HTMLElement>event.target).parentNode).classList[FIRST_ELEM];
          if ((<HTMLElement>(<HTMLElement>event.target).parentNode).classList[FIRST_ELEM] !== CLASS_NAME_WRAPPER_DROP) {
            const spanId = (<HTMLElement>event.target).parentNode?.children[NUMBER_ONE].id as string;
            const spanCount = (<HTMLElement>event.target).parentNode?.children[NUMBER_ONE].textContent as string;
            (<DragEvent>event).dataTransfer!.setData(
              "originalWrapperToy",
              (<HTMLElement>(<HTMLElement>event.target).parentNode).classList[NUMBER_ONE]
            );
            (<DragEvent>event).dataTransfer!.setData("spanId", spanId);
            (<DragEvent>event).dataTransfer!.setData("spanCount", spanCount);
            (<DragEvent>event).dataTransfer!.setData("classToy", (<HTMLElement>event.target).classList[NUMBER_ONE]);
          } else if (
            (<HTMLElement>(<HTMLElement>event.target).parentNode).classList[FIRST_ELEM] === CLASS_NAME_WRAPPER_DROP
          ) {
            (<DragEvent>event).dataTransfer!.setData("id", (<HTMLElement>event.target).id);
          }
          (<DragEvent>event).dataTransfer!.setData("wrapperToy", wrapperToy);
        },
        { once: true }
      );
    });
  }
}
