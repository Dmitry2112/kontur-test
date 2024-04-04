import {ChangeDetectionStrategy, Component, computed, Inject, input, OnInit, signal} from '@angular/core';
import {HotelModel} from '../../data/models/hotel.model';
import {AsyncPipe, NgForOf, NgIf} from '@angular/common';
import {OfferCardComponent} from '../offer-card/offer-card.component';
import {DomSanitizer} from '@angular/platform-browser';
import {LOCATION, NAVIGATOR} from '@ng-web-apis/common';
import {takeUntil, tap, timer} from 'rxjs';
import {TuiDestroyService} from '@taiga-ui/cdk';
import {TuiAlertService} from '@taiga-ui/core';

@Component({
  selector: 'app-hotel-card',
  standalone: true,
  imports: [
    AsyncPipe,
    NgIf,
    NgForOf,
    OfferCardComponent
  ],
  providers: [TuiDestroyService],
  templateUrl: './hotel-card.component.html',
  styleUrl: './hotel-card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HotelCardComponent implements OnInit {
  public hotel = input.required<HotelModel>();
  public imgUrl = computed(() =>
    this._sanitizer.bypassSecurityTrustResourceUrl(`${this.hotel().thumbnailUrl}`)
  );
  public isCopied = signal<boolean>(false);
  private timer$ = timer(3000);

  constructor(
    private _sanitizer: DomSanitizer,
    private _destroy$: TuiDestroyService,
    private _alerts: TuiAlertService,
    @Inject(NAVIGATOR) private _navigator: Navigator,
    @Inject(LOCATION) private _location: Location
  ) {}

  public ngOnInit(): void {
  }

  public copyHotelLink(hotelTitle: string) {
    this._navigator.clipboard.writeText(`${this._location.protocol}//${this._location.host}/hotels/${hotelTitle}`)
      .then(() => {
        this.isCopied.set(true);
        this._alerts.open('Ссылка скопирована!', {status: 'success'})
          .pipe(
            takeUntil(this._destroy$)
          )
          .subscribe();
        this.timer$
          .pipe(
            tap(() => this.isCopied.set(false)),
            takeUntil(this._destroy$)
          )
          .subscribe();
      });
  }
}
