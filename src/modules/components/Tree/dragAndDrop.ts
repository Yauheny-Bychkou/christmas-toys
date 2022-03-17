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
          const spanFlag = +(<DragEvent>event).dataTransfer!.getData("spanCount");
          const spanIdFlag = (<DragEvent>event).dataTransfer!.getData("spanId");
          const spanItem = document.querySelector(`#${spanIdFlag}`)!;
          const dragItem = document.querySelector(`.${dragFlag}`)!;
          const count = spanFlag - 1;
          spanItem.textContent = `${count}`;
          if (spanItem.textContent === "0") {
            const toys = document.querySelectorAll(`.${dragItem.classList[1]}`);
            toys[toys.length - 1].remove();
          }
          const cloneItem = dragItem.cloneNode(true);
          (<HTMLElement>event.target).append(cloneItem);
          (<HTMLElement>cloneItem).setAttribute("id", count.toString());
          this.addEventListenerToDragItems();
        } else if (wrapperToy !== "tree-page__toys-box") {
          const dragFlag = (<DragEvent>event).dataTransfer!.getData("id");
          const dragItem1 = document.querySelector(`[id='${dragFlag}']`)!;
          (<HTMLElement>event.target).append(dragItem1);
          this.addEventListenerToDragItems();
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
          const wrapperToy = (<HTMLElement>(<HTMLElement>event.target).parentNode).classList[0];
          if ((<HTMLElement>(<HTMLElement>event.target).parentNode).classList[0] !== "drop-zone__box") {
            const spanId = (<HTMLElement>event.target).parentNode?.children[1].id as string;
            const spanCount = (<HTMLElement>event.target).parentNode?.children[1].textContent as string;
            (<DragEvent>event).dataTransfer!.setData("spanId", spanId);
            (<DragEvent>event).dataTransfer!.setData("spanCount", spanCount);
            (<DragEvent>event).dataTransfer!.setData("classToy", (<HTMLElement>event.target).classList[1]);
          } else if ((<HTMLElement>(<HTMLElement>event.target).parentNode).classList[0] === "drop-zone__box") {
            (<DragEvent>event).dataTransfer!.setData("id", (<HTMLElement>event.target).id);
          }
          (<DragEvent>event).dataTransfer!.setData("wrapperToy", wrapperToy);
        },
        { once: true }
      );
    });
  }
}
