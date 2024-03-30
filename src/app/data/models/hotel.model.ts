import {HotelResponseModel} from '../response-models/hotel.response-model.interface';
import {OfferResponseModel} from '../response-models/offer.response-model.interface';
import {OfferModel} from './offer.model';
import {of} from 'rxjs';

export class HotelModel {
  public id: string = '';
  public hotelTitle: string = '';
  public cityCentreDistance: string = '';
  public address: string = '';
  public thumbnailUrl: string = '';
  public offers: OfferModel[] = [];
  public fromDto(dto: HotelResponseModel): void {
    this.id = dto.id;
    this.hotelTitle = dto.hotelTitle;
    this.cityCentreDistance = dto.cityCentreDistance;
    this.address = dto.address;
    this.thumbnailUrl = dto.thumbnailUrl;
    this.offers = dto.offers.map(offer => {
      const offerModel = new OfferModel();
      offerModel.fromDto(offer);

      return offerModel;
    })
  }
}
