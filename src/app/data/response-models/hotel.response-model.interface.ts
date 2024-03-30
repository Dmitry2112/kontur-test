import {OfferResponseModel} from './offer.response-model.interface';

export interface HotelResponseModel {
  id: string;
  hotelTitle: string;
  cityCentreDistance: string;
  address: string;
  thumbnailUrl: string;
  offers: OfferResponseModel[];
}
