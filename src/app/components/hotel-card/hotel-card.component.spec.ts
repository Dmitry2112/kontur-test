import {ComponentFixture, TestBed} from '@angular/core/testing';
import {HotelCardComponent} from './hotel-card.component';
import {hotelMock} from '../../../../mocks/mock-data';
import {By} from '@angular/platform-browser';
import {HotelModel} from '../../data/models/hotel.model';
import {HotelResponseModel} from '../../data/response-models/hotel.response-model.interface';

describe('HotelCardComponent', () => {
  let component: HotelCardComponent;
  let fixture: ComponentFixture<HotelCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HotelCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HotelCardComponent);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('hotel', hotelMock);

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render ".hotel-card"', () => {
    const hotelCard = fixture.debugElement.query(By.css('.hotel-card'));
    expect(hotelCard.nativeElement).not.toBeNull();
  });

  it('should render ".hotel-card__title", hotelTitle = "AZIMUT Сити Отель Олимпик Москва (Корптариф для Контура)"', () => {
    const hotelCardTitle = fixture.debugElement.query(By.css('.hotel-card__title'));
    expect(hotelCardTitle.nativeElement).not.toBeNull();
    expect(hotelCardTitle.nativeElement.textContent.trim()).toBe('AZIMUT Сити Отель Олимпик Москва (Корптариф для Контура)');
  });

  it('should render ".hotel-card__address", address = "Олимпийский проспект, 18/1"', () => {
    const hotelCardAddress = fixture.debugElement.query(By.css('.hotel-card__address'));
    expect(hotelCardAddress.nativeElement).not.toBeNull();
    expect(hotelCardAddress.nativeElement.textContent.trim()).toBe('Олимпийский проспект, 18/1');
  });

  it('should render ".hotel-card__city-centre-distance", cityCentreDistance = "Центр города - 3,24 км"', () => {
    const hotelCardCityCentreDistance = fixture.debugElement.query(By.css('.hotel-card__city-centre-distance'));
    expect(hotelCardCityCentreDistance.nativeElement).not.toBeNull();
    expect(hotelCardCityCentreDistance.nativeElement.textContent.trim()).toBe('Центр города - 3,24 км');
  });

  it('should render ".hotel-card__img"', () => {
    const hotelCardImg = fixture.debugElement.query(By.css('.hotel-card__img'));
    expect(hotelCardImg.nativeElement).not.toBeNull();
  });

  describe('.hotel-card__offers-list', () => {
    const hotelMockWithOffersEmpty: HotelModel = {
      hotelTitle: 'AZIMUT Сити Отель Олимпик Москва (Корптариф для Контура)',
      address: 'Олимпийский проспект, 18/1',
      thumbnailUrl: 'https://images.acase.ru/acase_images/9900035/343068687_A.jpg',
      cityCentreDistance: 'Центр города - 3,24 км',
      offers: [],
      fromDto(dto: HotelResponseModel) {}
    };

    it('should render items of ".hotel-card__offers-list", offers.length > 0', () => {
      const hotelCardOffersItems = fixture.debugElement.queryAll(By.css('.hotel-card__offers-item'));
      expect(hotelCardOffersItems.length > 0).toBeTrue();
    });

    it('should not render items of ".hotel-card__offers-list", offers.length = 0', () => {
      fixture.componentRef.setInput('hotel', hotelMockWithOffersEmpty);
      fixture.detectChanges();

      const hotelCardOffersItems = fixture.debugElement.queryAll(By.css('.hotel-card__offers-item'));
      expect(hotelCardOffersItems.length === 0).toBeTrue();
    });
  });
});
