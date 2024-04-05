import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {catchError, map, Observable, of} from 'rxjs';
import {HotelModel} from '../models/hotel.model';
import {HotelResponseModel} from '../response-models/hotel.response-model.interface';
import {RangePrice} from '../../components/filters/types/range-price.type';

@Injectable({
  providedIn: 'root'
})
export class HotelDataService {
  constructor(private readonly _http: HttpClient) {}

  public getAllHotels(): Observable<HotelModel[]> {
    return this._http.get<HotelResponseModel[]>('results?_sort=hotelTitle')
      .pipe(
        map(hotels => {
          return hotels.map(hotel => {
            const hotelModel = new HotelModel();
            hotelModel.fromDto(hotel);

            return hotelModel;
          })
        }),
        catchError(this.handleError<HotelModel[]>('getAllHotels', []))
      )
  }

  public getHotelByTitle(hotelTitle: string): Observable<HotelModel> {
    return this._http.get<HotelResponseModel[]>(`results?hotelTitle=${hotelTitle}`)
      .pipe(
        map(hotels => {
          return hotels.map(hotel => {
            const hotelModel = new HotelModel();
            hotelModel.fromDto(hotel);

            return hotelModel;
          })[0]
        }),
        catchError(this.handleError<HotelModel>('getHotelByTitle'))
      )
  }

  public getHotelsByAddress(address: string): Observable<HotelModel[]> {
    return this._http.get<HotelResponseModel[]>(`results?address_like=${address}&_sort=hotelTitle`)
      .pipe(
        map(hotels => {
          return hotels.map(hotel => {
            const hotelModel = new HotelModel();
            hotelModel.fromDto(hotel);

            return hotelModel;
          })
        }),
        catchError(this.handleError<HotelModel[]>('getHotelsByAddress', []))
      )
  }

  public getRangePrice(): Observable<RangePrice> {
    return this.getAllHotels()
      .pipe(
        map(this.calcRangePrice)
      );
  }

  private calcRangePrice(hotels: HotelModel[]): RangePrice {
    let min = Infinity;
    let max = -Infinity;

    hotels.forEach(hotel => {
      const sortedOffers = hotel.offers.sort((a, b) => a?.priceInRub - b?.priceInRub);
      const [curMin, curMax] = [sortedOffers[0]?.priceInRub, sortedOffers[sortedOffers.length - 1]?.priceInRub];

      min = curMin < min ? curMin : min;
      max = curMax > max ? curMax : max;
    })

    return [min, max];
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      console.log(`${operation} failed: ${error.message}`);

      return of(result as T);
    };
  }
}
