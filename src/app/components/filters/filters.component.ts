import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';
import {TuiLabelModule, TuiTextfieldControllerModule} from '@taiga-ui/core';
import {TuiInputModule, TuiInputRangeModule} from '@taiga-ui/kit';
import {combineLatest, debounceTime, distinctUntilChanged, map, Observable, of, takeUntil, tap} from 'rxjs';
import {FilterService} from '../../services/filter.service';
import {HotelDataService} from '../../data/services/hotel-data.service';
import {AsyncPipe, NgIf} from '@angular/common';
import {TuiDestroyService} from '@taiga-ui/cdk';
import {FilterForm} from './types/filter-form.type';
import {FilterFormValues} from './types/filter-form-values.type';
import {RangePrice} from './types/range-price.type';
import {FilterFormConfig} from './types/filter-form-config.type';

@Component({
  selector: 'app-filters',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    TuiLabelModule,
    TuiInputModule,
    TuiTextfieldControllerModule,
    TuiInputRangeModule,
    AsyncPipe,
    NgIf
  ],
  providers: [TuiDestroyService],
  templateUrl: './filters.component.html',
  styleUrl: './filters.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FiltersComponent implements OnInit {
  public readonly minPrice$: Observable<number> = this._hotelDataService.getMinPrice();
  public readonly maxPrice$: Observable<number> = this._hotelDataService.getMaxPrice();
  public readonly rangePrice$: Observable<RangePrice> = combineLatest([this.minPrice$, this.maxPrice$]);
  public readonly steps$: Observable<number> = this.getSteps(this.rangePrice$);
  public readonly filterFormConfig$ = combineLatest([this.rangePrice$, this.steps$])
    .pipe(
      map(v => {
        const filterFormConfig: FilterFormConfig = {
          rangePrice: v[0],
          steps: v[1]
        }

        return filterFormConfig;
      })
    );
  public readonly quantum = 0.01;

  public readonly filterForm = new FormGroup<FilterForm>({
    address: new FormControl('', {nonNullable: true}),
    rangePrice: new FormControl([0, 0], {nonNullable: true})
  });

  constructor(
    private _filterService: FilterService,
    private _hotelDataService: HotelDataService,
    private _destroy$: TuiDestroyService
  ) {}

  public ngOnInit(): void {
    this.rangePrice$
      .pipe(
        tap(range => this.filterForm.controls.rangePrice.setValue([range[0], range[1]])),
        takeUntil(this._destroy$)
      )
      .subscribe();

    this.filterForm.valueChanges
      .pipe(
        debounceTime(500),
        distinctUntilChanged(),
        tap((values: Partial<FilterFormValues>) => this._filterService.changeFilters(values)),
        takeUntil(this._destroy$)
      )
      .subscribe();
  }

  private getSteps(rangePrice$: Observable<[number, number]>, sliderStep: number = 100): Observable<number> {
    return rangePrice$
      .pipe(
        map(range => (range[1] - range[0]) / sliderStep)
      );
  }
}
