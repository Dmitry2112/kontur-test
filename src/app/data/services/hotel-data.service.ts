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
}
