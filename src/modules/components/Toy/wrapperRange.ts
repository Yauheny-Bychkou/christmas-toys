const TYPE_RANGE_TOP = "top";
const TYPE_RANGE_BOTTOM = "bottom";

export class WrapperRange {
  createToyPageRange(type: string) {
    const toyPageRange = document.createElement("div");
    toyPageRange.classList.add(`toy-page__ranges-${type}`);
    const title = document.createElement("h3");
    title.classList.add(`toy-page__ranges-${type}-title`);
    if (type === TYPE_RANGE_TOP) {
      title.innerHTML = "Количество экземпляров";
    } else if (type === TYPE_RANGE_BOTTOM) {
      title.innerHTML = "Год приобретения";
    }
    const wrapper = document.createElement("div");
    wrapper.classList.add("wrapper");
    const containerRange = document.createElement("div");
    containerRange.classList.add("container-range");
    const sliderTrack = document.createElement("div");
    sliderTrack.classList.add("slider-track", `slider-track-${type}`);
    sliderTrack.style.backgroundImage = `linear-gradient(to right, #fff 0%, #24C5DB 0%, #24C5DB 100%, #fff 100% )`;
    const inputMin = document.createElement("input");
    const inputMax = document.createElement("input");
    inputMin.setAttribute("type", "range");
    inputMax.setAttribute("type", "range");
    if (type === TYPE_RANGE_TOP) {
      inputMin.setAttribute("min", "0");
      inputMin.setAttribute("max", "12");
      inputMin.setAttribute("value", "0");
      inputMin.setAttribute("id", "slider-1");
      inputMin.classList.add("slider-1");
      inputMax.setAttribute("min", "0");
      inputMax.setAttribute("max", "12");
      inputMax.setAttribute("value", "12");
      inputMax.setAttribute("id", "slider-2");
      inputMax.classList.add("slider-2");
    } else if (type === TYPE_RANGE_BOTTOM) {
      inputMin.setAttribute("min", "1940");
      inputMin.setAttribute("max", "2022");
      inputMin.setAttribute("value", "1940");
      inputMin.setAttribute("id", "slider-3");
      inputMin.classList.add("slider-3");
      inputMax.setAttribute("min", "1940");
      inputMax.setAttribute("max", "2022");
      inputMax.setAttribute("value", "2022");
      inputMax.setAttribute("id", "slider-4");
      inputMax.classList.add("slider-4");
    }
    sliderTrack.append(inputMin, inputMax);
    containerRange.append(sliderTrack);
    wrapper.append(containerRange);
    const toyPageRangesSpan = document.createElement("div");
    toyPageRangesSpan.classList.add(`toy-page__ranges-${type}-wrap`);
    const spanMin = document.createElement("span");
    const spanMax = document.createElement("span");
    spanMin.classList.add(`toy-page__ranges-${type}-span`, `toy-page__ranges-${type}-span--left`);
    spanMax.classList.add(`toy-page__ranges-${type}-span`, `toy-page__ranges-${type}-span--right`);
    if (type === TYPE_RANGE_TOP) {
      spanMin.innerHTML = "0";
      spanMax.innerHTML = "12";
    } else if (type === TYPE_RANGE_BOTTOM) {
      spanMin.innerHTML = "1940";
      spanMax.innerHTML = "2022";
    }
    toyPageRangesSpan.append(spanMin, spanMax);
    toyPageRange.append(title, wrapper, toyPageRangesSpan);
    return toyPageRange;
  }
}
