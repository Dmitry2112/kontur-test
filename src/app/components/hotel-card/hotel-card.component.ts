import {ChangeDetectionStrategy, Component, computed, Inject, input, OnInit} from '@angular/core';
import {HotelModel} from '../../data/models/hotel.model';
import {AsyncPipe, NgForOf, NgIf} from '@angular/common';
import {OfferCardComponent} from '../offer-card/offer-card.component';
import {DomSanitizer} from '@angular/platform-browser';
import {LOCATION, NAVIGATOR} from '@ng-web-apis/common';

@Component({
  selector: 'app-hotel-card',
  standalone: true,
  imports: [
    AsyncPipe,
    NgIf,
    NgForOf,
    OfferCardComponent
  ],
  templateUrl: './hotel-card.component.html',
  styleUrl: './hotel-card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HotelCardComponent implements OnInit {
  public hotel = input.required<HotelModel>();
  public imgUrl = computed(() =>
    this._sanitizer.bypassSecurityTrustResourceUrl(`${this.hotel().thumbnailUrl}`)
  );

  constructor(
    private _sanitizer: DomSanitizer,
    @Inject(NAVIGATOR) private _navigator: Navigator,
    @Inject(LOCATION) private _location: Location
  ) {}

  public ngOnInit(): void {

  }

  public copyHotelLink(hotelTitle: string) {
    this._navigator.clipboard.writeText(`${this._location.protocol}//${this._location.host}/hotels/${hotelTitle}`)
      .then(() => alert(`Вы скопировали значение = ${this._location.protocol}//${this._location.host}/hotels/${hotelTitle}`));
  }
}
