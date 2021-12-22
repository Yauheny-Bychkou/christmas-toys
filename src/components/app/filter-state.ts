import { Color } from "./color";
import { Shape } from "./shape";
import { Size } from "./size";

export class FilterState implements IFilterState {
  constructor(
    public count: IRangeFilter<number> = { min: null, max: null },
    public year: IRangeFilter<number> = { min: null, max: null },
    public shape: Shape[] = [],
    public color: Color[] = [],
    public size: Size[] = [],
    public favorite: boolean = false
  ) { }
}

export interface IFilterState {
  count: IRangeFilter<number>;
  year: IRangeFilter<number>;
  shape: Shape[];
  color: Color[];
  size: Size[];
  favorite: boolean;
}

export interface IRangeFilter<T> {
  min: T | null;
  max: T | null;
}

