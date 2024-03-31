import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {HotelCardComponent} from '../../components/hotel-card/hotel-card.component';
import {HotelDataService} from '../../data/services/hotel-data.service';
import {Observable, switchMap} from 'rxjs';
import {HotelModel} from '../../data/models/hotel.model';
import {AsyncPipe, NgIf} from '@angular/common';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-about-hotel-page',
  standalone: true,
  imports: [
    HotelCardComponent,
    AsyncPipe,
    NgIf
  ],
  templateUrl: './about-hotel-page.component.html',
  styleUrl: './about-hotel-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AboutHotelPageComponent implements OnInit {
  public hotel$ = new Observable<HotelModel>();
  constructor(
    private _hotelDataService: HotelDataService,
    private _route: ActivatedRoute
  ) {}

  public ngOnInit(): void {
    this.hotel$ = this._route.params
      .pipe(
        switchMap(params =>
          this._hotelDataService.getHotelByTitle(params['hotelTitle'])
        )
      )
  }
}
