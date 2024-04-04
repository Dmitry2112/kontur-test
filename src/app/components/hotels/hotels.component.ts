import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {finalize, map, Observable} from 'rxjs';
import {HotelModel} from '../../data/models/hotel.model';
import {AsyncPipe, NgForOf, NgIf} from '@angular/common';
import {HotelCardComponent} from '../hotel-card/hotel-card.component';
import {FilterService} from '../../services/filter.service';
import {LoadingService} from '../../services/loading.service';
import {TuiLoaderModule} from '@taiga-ui/core';

@Component({
  selector: 'app-hotels',
  standalone: true,
  imports: [
    AsyncPipe,
    NgIf,
    NgForOf,
    HotelCardComponent,
    TuiLoaderModule
  ],
  providers: [LoadingService],
  templateUrl: './hotels.component.html',
  styleUrl: './hotels.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HotelsComponent implements OnInit {
  public hotels$ = new Observable<HotelModel[]>();
  public loading$ = this._loadingService.loading$;

  constructor(
    private _filterService: FilterService,
    private _loadingService: LoadingService
  ) {}

  public ngOnInit(): void {
    this._loadingService.show();

    this.hotels$ = this._filterService.filteredHotels$
      .pipe(
        map(this.sortHotels),
        finalize(this._loadingService.hide)
      );
  }

  private sortHotels(hotels: HotelModel[]): HotelModel[] {
    return hotels
      .filter(hotel => hotel?.offers.filter(offer => offer.roomsRemained > 0).length > 0)
      .slice(0, 10);
  }
}
