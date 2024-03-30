import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {map, Observable, take, tap} from 'rxjs';
import {HotelModel} from '../../data/models/hotel.model';
import {HotelDataService} from '../../data/services/hotel-data.service';
import {AsyncPipe, NgForOf, NgIf} from '@angular/common';
import {HotelCardComponent} from '../hotel-card/hotel-card.component';

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

  constructor(private _hotelDataService: HotelDataService) {}

  public ngOnInit(): void {
    this.hotels$ = this._hotelDataService.getAllHotels()
      .pipe(
        map(hotels => hotels.slice(0, 10)),
        tap((hotels) => console.log(hotels))
      );
  }
}

