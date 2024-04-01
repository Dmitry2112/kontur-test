import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map, Observable} from 'rxjs';
import {HotelModel} from '../models/hotel.model';
import {HotelResponseModel} from '../response-models/hotel.response-model.interface';

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
        })
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
        })
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
        })
      )
  }

  public getMinPrice(): Observable<number> {
    return this.getAllHotels()
      .pipe(
        map(hotels =>
          hotels.sort((a, b) => a.offers[0]?.priceInRub - b.offers[0]?.priceInRub)[0].offers[0].priceInRub
        )
      );
  }

  public getMaxPrice(): Observable<number> {
    return this.getAllHotels()
      .pipe(
        map(hotels =>
          hotels.sort((a, b) => b.offers[0]?.priceInRub - a.offers[0]?.priceInRub)[0].offers[0].priceInRub
        )
      );
  }
}
