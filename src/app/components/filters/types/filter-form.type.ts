import {FormControl} from '@angular/forms';
import {RangePrice} from './range-price.type';

export type FilterForm = {
  address: FormControl<string>;
  rangePrice: FormControl<RangePrice>
}
