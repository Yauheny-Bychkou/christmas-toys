import { Color } from "../../interfaces/color";
import { FilterState, IFilterState, IRangeFilter } from "../../interfaces/filter-state";
import { Shape } from "../../interfaces/shape";
import { Size } from "../../interfaces/size";
import { Toy } from "../../interfaces/toy.model";

export class Filter {
  filterState: IFilterState;
  originalToys: Toy[];
  filteredToys: Toy[];
  constructor(data: Toy[]) {
    this.filterState = new FilterState();
    this.originalToys = data.slice();
    this.filteredToys = data.slice();
  }
  changeFilterState(key: keyof IFilterState, value: string | boolean | IRangeFilter<number>, isAdded = true) {
    if (isAdded) {
      if (typeof value === "string") {
        (this.filterState[key] as string[]).push(value);
      } else if (typeof value === "boolean" && key === "favorite") {
        this.filterState[key] = value;
      } else {
        const range = this.filterState[key] as IRangeFilter<number>;
        (<IRangeFilter<number>>range).min = (<IRangeFilter<number>>value).min;
        (<IRangeFilter<number>>range).max = (<IRangeFilter<number>>value).max;
      }
    } else {
      if (typeof value === "string") {
        const filterValues = this.filterState[key] as string[];
        const valueIndex = filterValues.indexOf(value);
        filterValues.splice(valueIndex, 1);
      }
    }
    const {
      count: countRange,
      year: yearRange,
      shape: selectedShapes,
      color: selectedColors,
      size: selectedSizes,
      favorite,
    } = this.filterState;
    this.filteredToys = this.originalToys.filter(
      (toy: Toy) =>
        (countRange.min === null || countRange.min <= toy.count) &&
        (countRange.max === null || countRange.max >= toy.count) &&
        (yearRange.min === null || yearRange.min <= toy.year) &&
        (yearRange.max === null || yearRange.max >= toy.year) &&
        (selectedShapes.length === 0 || selectedShapes.includes(toy.shape as Shape)) &&
        (selectedColors.length === 0 || selectedColors.includes(toy.color as Color)) &&
        (selectedSizes.length === 0 || selectedSizes.includes(toy.size as Size)) &&
        (!favorite || toy.favorite === favorite)
    );
    return this.filteredToys;
  }
  sortStartLetter() {
    this.filteredToys.sort((a: Toy, b: Toy) => {
      const x = a.name.toLowerCase();
      const y = b.name.toLowerCase();
      return x < y ? -1 : x > y ? 1 : 0;
    });
    return this.filteredToys;
  }
  sortEndLetter() {
    this.filteredToys.sort((a: Toy, b: Toy) => {
      const x = a.name.toLowerCase();
      const y = b.name.toLowerCase();
      return x > y ? -1 : x < y ? 1 : 0;
    });
    return this.filteredToys;
  }
  sortStartCount() {
    this.filteredToys.sort((a: Toy, b: Toy) => a.count - b.count);
    return this.filteredToys;
  }
  sortEndCount() {
    this.filteredToys.sort((a: Toy, b: Toy) => b.count - a.count);
    return this.filteredToys;
  }
  filterSearch(searchText: string) {
    return this.originalToys.filter((toy: Toy) => toy.name.toLowerCase().includes(searchText));
  }
}
