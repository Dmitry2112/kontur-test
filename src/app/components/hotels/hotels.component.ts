import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {map, Observable} from 'rxjs';
import {HotelModel} from '../../data/models/hotel.model';
import {AsyncPipe, NgForOf, NgIf} from '@angular/common';
import {HotelCardComponent} from '../hotel-card/hotel-card.component';
import {FilterService} from '../../services/filter.service';

@Component({
  selector: 'app-hotels',
  standalone: true,
  imports: [
    AsyncPipe,
    NgIf,
    NgForOf,
    HotelCardComponent
  ],
  templateUrl: './hotels.component.html',
  styleUrl: './hotels.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HotelsComponent implements OnInit {
  public hotels$ = new Observable<HotelModel[]>();

  constructor(private _filterService: FilterService) {}

  public ngOnInit(): void {
    this.hotels$ = this._filterService.filteredHotels$
      .pipe(
        map(this.sortHotels),
      );
  }

  private sortHotels(hotels: HotelModel[]): HotelModel[] {
    return hotels
      .filter(hotel => hotel?.offers.filter(offer => offer.roomsRemained > 0).length > 0)
      .slice(0, 10);
  }
}
