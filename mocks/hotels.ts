import {HotelModel} from '../src/app/data/models/hotel.model';
import {OfferResponseModel} from '../src/app/data/response-models/offer.response-model.interface';
import {HotelResponseModel} from '../src/app/data/response-models/hotel.response-model.interface';

export const hotelsMock: HotelModel[] = [
  {
    hotelTitle: 'AZIMUT Сити Отель Олимпик Москва (Корптариф для Контура)',
    address: 'Олимпийский проспект, 18/1',
    thumbnailUrl: 'https://images.acase.ru/acase_images/9900035/343068687_A.jpg',
    cityCentreDistance: 'Центр города - 3,24 км',
    offers: [
      {
        title: 'Супериор одноместный',
        mealTitle: 'С завтраком',
        priceInRub: 50_000,
        extraBeds: 0,
        roomsRemained: 0,
        imageUrl: 'assets/images/default-img.jpg',
        fromDto(dto: OfferResponseModel) {}
      },
      {
        title: 'Супериор одноместный',
        mealTitle: 'С завтраком',
        priceInRub: 55_000,
        extraBeds: 0,
        roomsRemained: 0,
        imageUrl: 'assets/images/default-img.jpg',
        fromDto(dto: OfferResponseModel) {}
      },
      {
        title: 'Супериор одноместный',
        mealTitle: 'С завтраком',
        priceInRub: 51_000,
        extraBeds: 0,
        roomsRemained: 0,
        imageUrl: 'assets/images/default-img.jpg',
        fromDto(dto: OfferResponseModel) {}
      },
      {
        title: 'Супериор одноместный',
        mealTitle: 'С завтраком',
        priceInRub: 100_000,
        extraBeds: 0,
        roomsRemained: 0,
        imageUrl: 'assets/images/default-img.jpg',
        fromDto(dto: OfferResponseModel) {}
      }
    ],
    fromDto(dto: HotelResponseModel) {}
  },
  {
    hotelTitle: 'Борис Годунов',
    address: 'Нижний Кисельный переулок, 4',
    thumbnailUrl: 'https://images.acase.ru/acase_images/1303628/2669635940_A.jpg',
    cityCentreDistance: 'Центр города - 1,07 км',
    offers: [
      {
        title: 'Двухместный стандарт с одной кроватью',
        mealTitle: 'С завтраком',
        priceInRub: 60_000,
        extraBeds: 0,
        roomsRemained: 0,
        imageUrl: 'assets/images/default-img.jpg',
        fromDto(dto: OfferResponseModel) {}
      },
      {
        title: 'Супериор одноместный',
        mealTitle: 'С завтраком',
        priceInRub: 66_000,
        extraBeds: 0,
        roomsRemained: 0,
        imageUrl: 'assets/images/default-img.jpg',
        fromDto(dto: OfferResponseModel) {}
      },
      {
        title: 'Супериор одноместный',
        mealTitle: 'С завтраком',
        priceInRub: 10_000,
        extraBeds: 0,
        roomsRemained: 0,
        imageUrl: 'assets/images/default-img.jpg',
        fromDto(dto: OfferResponseModel) {}
      },
      {
        title: 'Супериор одноместный',
        mealTitle: 'С завтраком',
        priceInRub: 67_000,
        extraBeds: 0,
        roomsRemained: 0,
        imageUrl: 'assets/images/default-img.jpg',
        fromDto(dto: OfferResponseModel) {}
      }
    ],
    fromDto(dto: HotelResponseModel) {}
  },
  {
    hotelTitle: 'Сенатор Дизайн Отель',
    address: 'Лубянский проезд 7, строение 1',
    thumbnailUrl: 'https://images.acase.ru/acase_images/1317664/238503233_A.jpg',
    cityCentreDistance: 'Центр города - 0,81 км',
    offers: [
      {
        title: 'Standard room',
        mealTitle: 'С завтраком',
        priceInRub: 80_000,
        extraBeds: 0,
        roomsRemained: 0,
        imageUrl: 'assets/images/default-img.jpg',
        fromDto(dto: OfferResponseModel) {}
      },
      {
        title: 'Standard room',
        mealTitle: 'С завтраком',
        priceInRub: 84_000,
        extraBeds: 0,
        roomsRemained: 0,
        imageUrl: 'assets/images/default-img.jpg',
        fromDto(dto: OfferResponseModel) {}
      },
      {
        title: 'Standard room',
        mealTitle: 'С завтраком',
        priceInRub: 22_000,
        extraBeds: 0,
        roomsRemained: 0,
        imageUrl: 'assets/images/default-img.jpg',
        fromDto(dto: OfferResponseModel) {}
      },
      {
        title: 'Супериор одноместный',
        mealTitle: 'С завтраком',
        priceInRub: 100_000,
        extraBeds: 0,
        roomsRemained: 0,
        imageUrl: 'assets/images/default-img.jpg',
        fromDto(dto: OfferResponseModel) {}
      }
    ],
    fromDto(dto: HotelResponseModel) {}
  },
  {
    hotelTitle: 'Мясницкий Бутик Отель',
    address: 'Мясницкая улица, 14/2, строение 1',
    thumbnailUrl: 'https://images.acase.ru/acase_images/1313847/878533547_A.jpg',
    cityCentreDistance: 'Центр города - 1,05 км',
    offers: [
      {
        title: 'ПРЕСТИЖ ДЖУНИОР СЮИТ',
        mealTitle: 'С завтраком',
        priceInRub: 120_000,
        extraBeds: 0,
        roomsRemained: 0,
        imageUrl: 'assets/images/default-img.jpg',
        fromDto(dto: OfferResponseModel) {}
      },
      {
        title: 'Семейный номер',
        mealTitle: 'С завтраком',
        priceInRub: 142_000,
        extraBeds: 0,
        roomsRemained: 0,
        imageUrl: 'assets/images/default-img.jpg',
        fromDto(dto: OfferResponseModel) {}
      },
      {
        title: 'Супериор одноместный',
        mealTitle: 'С завтраком',
        priceInRub: 90_000,
        extraBeds: 0,
        roomsRemained: 0,
        imageUrl: 'assets/images/default-img.jpg',
        fromDto(dto: OfferResponseModel) {}
      },
      {
        title: 'Супериор одноместный',
        mealTitle: 'С завтраком',
        priceInRub: 110_000,
        extraBeds: 0,
        roomsRemained: 0,
        imageUrl: 'assets/images/default-img.jpg',
        fromDto(dto: OfferResponseModel) {}
      }
    ],
    fromDto(dto: HotelResponseModel) {}
  },
  {
    hotelTitle: 'Свиссотель Красные Холмы',
    address: 'Космодамианская, 52, строение 6',
    thumbnailUrl: 'https://images.acase.ru/acase_images/500271/2493975330_A.jpg',
    cityCentreDistance: 'Центр города - 3 км',
    offers: [
      {
        title: 'Стандартный',
        mealTitle: 'С завтраком',
        priceInRub: 9_000,
        extraBeds: 0,
        roomsRemained: 0,
        imageUrl: 'assets/images/default-img.jpg',
        fromDto(dto: OfferResponseModel) {}
      },
      {
        title: 'Стандартный',
        mealTitle: 'С завтраком',
        priceInRub: 199_000,
        extraBeds: 0,
        roomsRemained: 0,
        imageUrl: 'assets/images/default-img.jpg',
        fromDto(dto: OfferResponseModel) {}
      },
      {
        title: 'Супериор одноместный',
        mealTitle: 'С завтраком',
        priceInRub: 280_000,
        extraBeds: 0,
        roomsRemained: 0,
        imageUrl: 'assets/images/default-img.jpg',
        fromDto(dto: OfferResponseModel) {}
      },
      {
        title: 'Супериор одноместный',
        mealTitle: 'С завтраком',
        priceInRub: 130_000,
        extraBeds: 0,
        roomsRemained: 0,
        imageUrl: 'assets/images/default-img.jpg',
        fromDto(dto: OfferResponseModel) {}
      }
    ],
    fromDto(dto: HotelResponseModel) {}
  },
];

//rangePrice = [50_000, 60_000]
export const hotelsMockAfterFilteringByPrice: HotelModel[] = [
  {
    hotelTitle: 'AZIMUT Сити Отель Олимпик Москва (Корптариф для Контура)',
    address: 'Олимпийский проспект, 18/1',
    thumbnailUrl: 'https://images.acase.ru/acase_images/9900035/343068687_A.jpg',
    cityCentreDistance: 'Центр города - 3,24 км',
    offers: [
      {
        title: 'Супериор одноместный',
        mealTitle: 'С завтраком',
        priceInRub: 50_000,
        extraBeds: 0,
        roomsRemained: 0,
        imageUrl: 'assets/images/default-img.jpg',
        fromDto(dto: OfferResponseModel) {}
      },
      {
        title: 'Супериор одноместный',
        mealTitle: 'С завтраком',
        priceInRub: 55_000,
        extraBeds: 0,
        roomsRemained: 0,
        imageUrl: 'assets/images/default-img.jpg',
        fromDto(dto: OfferResponseModel) {}
      },
      {
        title: 'Супериор одноместный',
        mealTitle: 'С завтраком',
        priceInRub: 51_000,
        extraBeds: 0,
        roomsRemained: 0,
        imageUrl: 'assets/images/default-img.jpg',
        fromDto(dto: OfferResponseModel) {}
      }
    ],
    fromDto(dto: HotelResponseModel) {}
  },
  {
    hotelTitle: 'Борис Годунов',
    address: 'Нижний Кисельный переулок, 4',
    thumbnailUrl: 'https://images.acase.ru/acase_images/1303628/2669635940_A.jpg',
    cityCentreDistance: 'Центр города - 1,07 км',
    offers: [
      {
        title: 'Двухместный стандарт с одной кроватью',
        mealTitle: 'С завтраком',
        priceInRub: 60_000,
        extraBeds: 0,
        roomsRemained: 0,
        imageUrl: 'assets/images/default-img.jpg',
        fromDto(dto: OfferResponseModel) {}
      }
    ],
    fromDto(dto: HotelResponseModel) {}
  }
];

// address = 'Олимпийский проспект'
export const hotelsMockAfterFilteringByAddress: HotelModel[] = [
  {
    hotelTitle: 'AZIMUT Сити Отель Олимпик Москва (Корптариф для Контура)',
    address: 'Олимпийский проспект, 18/1',
    thumbnailUrl: 'https://images.acase.ru/acase_images/9900035/343068687_A.jpg',
    cityCentreDistance: 'Центр города - 3,24 км',
    offers: [
      {
        title: 'Супериор одноместный',
        mealTitle: 'С завтраком',
        priceInRub: 50_000,
        extraBeds: 0,
        roomsRemained: 0,
        imageUrl: 'assets/images/default-img.jpg',
        fromDto(dto: OfferResponseModel) {}
      },
      {
        title: 'Супериор одноместный',
        mealTitle: 'С завтраком',
        priceInRub: 55_000,
        extraBeds: 0,
        roomsRemained: 0,
        imageUrl: 'assets/images/default-img.jpg',
        fromDto(dto: OfferResponseModel) {}
      },
      {
        title: 'Супериор одноместный',
        mealTitle: 'С завтраком',
        priceInRub: 51_000,
        extraBeds: 0,
        roomsRemained: 0,
        imageUrl: 'assets/images/default-img.jpg',
        fromDto(dto: OfferResponseModel) {}
      },
      {
        title: 'Супериор одноместный',
        mealTitle: 'С завтраком',
        priceInRub: 100_000,
        extraBeds: 0,
        roomsRemained: 0,
        imageUrl: 'assets/images/default-img.jpg',
        fromDto(dto: OfferResponseModel) {}
      }
    ],
    fromDto(dto: HotelResponseModel) {}
  }
];
