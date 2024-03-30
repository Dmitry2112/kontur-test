import {ChangeDetectionStrategy, Component, computed, input} from '@angular/core';
import {HotelModel} from '../../data/models/hotel.model';
import {AsyncPipe, NgForOf, NgIf} from '@angular/common';
import {OfferCardComponent} from '../offer-card/offer-card.component';
import {DomSanitizer} from '@angular/platform-browser';

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
export class HotelCardComponent {
  public hotel = input.required<HotelModel>();
  public imgUrl = computed(() =>
    this._sanitizer.bypassSecurityTrustResourceUrl(`${this.hotel().thumbnailUrl}`)
  );

  constructor(private _sanitizer: DomSanitizer) {}
}
