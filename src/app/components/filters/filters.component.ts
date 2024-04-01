import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';
import {TuiLabelModule, TuiTextfieldControllerModule} from '@taiga-ui/core';
import {TuiInputModule, TuiInputRangeModule} from '@taiga-ui/kit';
import {combineLatest, debounceTime, distinctUntilChanged, map, Observable, of, takeUntil, tap} from 'rxjs';
import {FilterService} from '../../services/filter.service';
import {HotelDataService} from '../../data/services/hotel-data.service';
import {AsyncPipe, NgIf} from '@angular/common';
import {TuiDestroyService} from '@taiga-ui/cdk';

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
  public readonly minPrice$ = this._hotelDataService.getMinPrice();
  public readonly maxPrice$ = this._hotelDataService.getMaxPrice();
  public readonly rangePrice$ = combineLatest([this.minPrice$, this.maxPrice$]);
  public readonly steps$ = this.getSteps(this.rangePrice$);
  public readonly configFilterForm$ = combineLatest([this.rangePrice$, this.steps$]);
  public readonly quantum = 0.01;

  public readonly filterForm = new FormGroup({
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
        tap(v => this._filterService.changeFilters(v)),
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
