import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';
import {TuiLabelModule, TuiTextfieldControllerModule} from '@taiga-ui/core';
import {TuiInputModule, TuiInputRangeModule} from '@taiga-ui/kit';
import {debounceTime, distinctUntilChanged, map, tap} from 'rxjs';
import {FilterService} from '../../services/filter.service';
import {HotelDataService} from '../../data/services/hotel-data.service';
import {AsyncPipe} from '@angular/common';

@Component({
  selector: 'app-filters',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    TuiLabelModule,
    TuiInputModule,
    TuiTextfieldControllerModule,
    TuiInputRangeModule,
    AsyncPipe
  ],
  templateUrl: './filters.component.html',
  styleUrl: './filters.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FiltersComponent implements OnInit {
  public readonly minPrice = 0;
  // public readonly maxPrice = this._hotelDataService.maxPrice$;
  public readonly maxPrice = 1_000_000;
  public readonly sliderStep = 100;
  public readonly steps = (this.maxPrice - this.minPrice) / this.sliderStep;
  public readonly quantum = 0.01;

  public readonly filterForm = new FormGroup({
    address: new FormControl('', {nonNullable: true}),
    price: new FormControl([this.minPrice, this.maxPrice], {nonNullable: true})
  });

  constructor(
    private _filterService: FilterService,
    private _hotelDataService: HotelDataService
  ) {
    this._hotelDataService.getMaxPrice();
  }

  public ngOnInit(): void {
    this.filterForm.valueChanges
      .pipe(
        debounceTime(500),
        distinctUntilChanged(),
        tap(v => this._filterService.changeFilters(v))
      )
      .subscribe();
  }
}
