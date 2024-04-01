import {HotelResponseModel} from '../response-models/hotel.response-model.interface';
import {OfferModel} from './offer.model';

export class HotelModel {
  public id: string = '';
  public hotelTitle: string = '';
  public cityCentreDistance: string = '';
  public address: string = '';
  public thumbnailUrl: string = 'assets/images/default-img.jpg';
  public offers: OfferModel[] = [];
  public fromDto(dto: HotelResponseModel): void {
    this.id = dto.id;
    this.hotelTitle = dto.hotelTitle;
    this.cityCentreDistance = dto.cityCentreDistance;
    this.address = dto.address;
    if (dto.thumbnailUrl !== undefined && dto.thumbnailUrl !== '') {
      this.thumbnailUrl = dto.thumbnailUrl;
    }
    this.offers = dto.offers.map(offer => {
      const offerModel = new OfferModel();
      offerModel.fromDto(offer);

      return offerModel;
    })
  }
}
