import {ChangeDetectionStrategy, Component, computed, input} from '@angular/core';
import {OfferModel} from '../../data/models/offer.model';
import {DomSanitizer} from '@angular/platform-browser';
import {TuiMoneyModule} from '@taiga-ui/addon-commerce';

@Component({
  selector: 'app-offer-card',
  standalone: true,
  imports: [
    TuiMoneyModule
  ],
  templateUrl: './offer-card.component.html',
  styleUrl: './offer-card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OfferCardComponent {
  public offer = input.required<OfferModel>();
  public imgUrl = computed(() =>
    this._sanitizer.bypassSecurityTrustResourceUrl(`${this.offer().imageUrl}`)
  );

  constructor(private _sanitizer: DomSanitizer) {}
}
