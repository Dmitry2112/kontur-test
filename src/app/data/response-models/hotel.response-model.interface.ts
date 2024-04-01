import {OfferResponseModel} from './offer.response-model.interface';

export interface HotelResponseModel {
  hotelTitle: string;
  cityCentreDistance: string;
  address: string;
  thumbnailUrl: string;
  offers: OfferResponseModel[];
}
