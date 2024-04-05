import {Injectable} from '@angular/core';
import {HotelDataService} from '../data/services/hotel-data.service';
import {BehaviorSubject, map, Observable, switchMap} from 'rxjs';
import {HotelModel} from '../data/models/hotel.model';
import {RangePrice} from '../components/filters/types/range-price.type';
import {FilterFormValues} from '../components/filters/types/filter-form-values.type';

@Injectable({
  providedIn: 'root'
})
export class FilterService {
  public address$ = new BehaviorSubject<string>('');
  public rangePrice$ = new BehaviorSubject<RangePrice>([0, 0]);

  constructor(private _hotelDataService: HotelDataService) {}

  public changeFilters(filters: Partial<FilterFormValues>): void {
    this.address$.next(filters.address as string);
    this.rangePrice$.next(filters.rangePrice as RangePrice);
  }

  public filterHotels(): Observable<HotelModel[]> {
    return this.address$
      .pipe(
        switchMap(address => this._hotelDataService.getHotelsByAddress(address)),
        map(hotels => this.filterHotelsByPrice(hotels, this.rangePrice$.value)),
      );
  }

  private filterHotelsByPrice(hotels: HotelModel[], rangePrice: RangePrice): HotelModel[] {
    return hotels
      .filter(hotel => {
        const offers = hotel.offers;
        hotel.offers = offers.filter(offer => (offer.priceInRub >= rangePrice[0]) && (offer.priceInRub <= rangePrice[1]));

        return hotel.offers.length > 0;
      })
  }
}
