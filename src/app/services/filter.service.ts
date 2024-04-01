import {Injectable} from '@angular/core';
import {HotelDataService} from '../data/services/hotel-data.service';
import {BehaviorSubject, map, switchMap, tap} from 'rxjs';
import {HotelModel} from '../data/models/hotel.model';

@Injectable({
  providedIn: 'root'
})
export class FilterService {
  public address$ = new BehaviorSubject<string>('');
  public price$ = new BehaviorSubject<number[]>([]);
  public filteredHotels$ = new BehaviorSubject<HotelModel[]>([]);

  constructor(private _hotelDataService: HotelDataService) {
    this.filterHotels();
  }

  public changeFilters(filters: Partial<{address: string; price: number[]}>): void {
    this.address$.next(filters.address as string);
    this.price$.next(filters.price as number[]);

    this.filterHotels();
  }

  private filterHotels(): void {
    this.address$
      .pipe(
        switchMap(address => this._hotelDataService.getHotelsByAddress(address)),
        map(hotels => this.filterHotelsByPrice(hotels, this.price$.value)),
        tap(hotels => this.filteredHotels$.next(hotels)),
      )
      .subscribe();
  }

  private filterHotelsByPrice(hotels: HotelModel[], price: number[]): HotelModel[] {
    return price.length > 0
      ? hotels
        .filter(hotel => {
          const offers = hotel.offers;
          hotel.offers = offers.filter(offer => (offer.priceInRub >= price[0]) && (offer.priceInRub <= price[1]));

          return hotel.offers.length > 0;
        })
      : hotels;
  }
}
