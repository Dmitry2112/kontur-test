import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';
import {TuiLabelModule, TuiLoaderModule, TuiTextfieldControllerModule} from '@taiga-ui/core';
import {TuiInputModule, TuiInputRangeModule} from '@taiga-ui/kit';
import {combineLatest, debounceTime, distinctUntilChanged, map, Observable, takeUntil, tap} from 'rxjs';
import {FilterService} from '../../services/filter.service';
import {HotelDataService} from '../../data/services/hotel-data.service';
import {AsyncPipe, NgIf} from '@angular/common';
import {TuiDestroyService} from '@taiga-ui/cdk';
import {FilterForm} from './types/filter-form.type';
import {FilterFormValues} from './types/filter-form-values.type';
import {RangePrice} from './types/range-price.type';
import {FilterFormConfig} from './types/filter-form-config.type';
import {LoadingService} from '../../services/loading.service';

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
    NgIf,
    TuiLoaderModule
  ],
  providers: [TuiDestroyService, LoadingService],
  templateUrl: './filters.component.html',
  styleUrl: './filters.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FiltersComponent implements OnInit {
  public readonly rangePrice$: Observable<RangePrice> = this._hotelDataService.getRangePrice();
  public readonly steps$: Observable<number> = this.getSteps(this.rangePrice$);
  public readonly filterFormConfig$: Observable<FilterFormConfig> = combineLatest([this.rangePrice$, this.steps$])
    .pipe(
      map(this.getConfig),
      tap(() => this._loadingService.hide())
    );
  public readonly quantum = 0.01;

  public readonly filterForm = new FormGroup<FilterForm>({
    address: new FormControl('', {nonNullable: true}),
    rangePrice: new FormControl([0, 0], {nonNullable: true})
  });

  public loading$ = this._loadingService.loading$;

  private minCache = 0;
  private maxCache = 0;

  constructor(
    private _filterService: FilterService,
    private _hotelDataService: HotelDataService,
    private _destroy$: TuiDestroyService,
    private _loadingService: LoadingService
  ) {}

  public ngOnInit(): void {
    this.initFilters();

    this.filterForm.valueChanges
      .pipe(
        debounceTime(500),
        distinctUntilChanged(),
        tap((values: Partial<FilterFormValues>) => this._filterService.changeFilters(values)),
        takeUntil(this._destroy$)
      )
      .subscribe();
  }

  public resetFilters(): void {
    this.filterForm.reset({address: '', rangePrice: [this.minCache, this.maxCache]});
  }

  private initFilters(): void {
    this._loadingService.show();

    this.rangePrice$
      .pipe(
        tap(range => {
          const [min, max] = range;
          this.minCache = min;
          this.maxCache = max;
          this.filterForm.controls.rangePrice.setValue([min, max]);
        }),
        takeUntil(this._destroy$)
      )
      .subscribe();
  }

  private getSteps(rangePrice$: Observable<RangePrice>, sliderStep: number = 1): Observable<number> {
    return rangePrice$
      .pipe(
        map(range => {
          const [min, max] = range;
          return (max - min) / sliderStep;
        })
      );
  }

  private getConfig(rangePriceAndSteps: [RangePrice, number]): FilterFormConfig {
    const [rangePrice, steps] = rangePriceAndSteps;

    return {
      rangePrice,
      steps
    };
  }
}
