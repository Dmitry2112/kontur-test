import {OfferResponseModel} from '../response-models/offer.response-model.interface';

export class OfferModel {
  public title: string = '';
  public mealTitle: string = 'Без питания';
  public extraBeds: number = 0;
  public priceInRub: number = 0;
  public roomsRemained: number = 0;
  public imageUrl: string = 'assets/images/default-img.jpg';

  public fromDto(dto: OfferResponseModel): void {
    this.title = dto.title;
    if (dto.mealTitle !== undefined && dto.mealTitle !== '') {
      this.mealTitle = dto.mealTitle;
    }
    this.extraBeds = dto.extraBeds;
    this.priceInRub = dto.priceInRub;
    this.roomsRemained = dto.roomsRemained ?? this.roomsRemained;
    this.imageUrl = dto.imageUrl ?? this.imageUrl;
  }
}
