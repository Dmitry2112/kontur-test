import {ComponentFixture, TestBed} from '@angular/core/testing';
import {OfferCardComponent} from './offer-card.component';
import {offerMock} from '../../../../mocks/mock-data';
import {By} from '@angular/platform-browser';

describe('OfferCardComponent', () => {
  let component: OfferCardComponent;
  let fixture: ComponentFixture<OfferCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OfferCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OfferCardComponent);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('offer', offerMock);

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render ".offer-card"', () => {
    const offerCard = fixture.debugElement.query(By.css('.offer-card'));
    expect(offerCard.nativeElement).not.toBeNull();
  });

  it('should render ".offer-card__img"', () => {
    const offerCardImg = fixture.debugElement.query(By.css('.offer-card__img'));
    expect(offerCardImg.nativeElement).not.toBeNull();
  });

  it('should render ".offer-card__title", title = "Супериор одноместный"', () => {
    const offerCardTitle = fixture.debugElement.query(By.css('.offer-card__title'));
    expect(offerCardTitle.nativeElement).not.toBeNull();
    expect(offerCardTitle.nativeElement.textContent.trim()).toBe('Супериор одноместный');
  });

  it('should render ".offer-card__sub-info", mealTitle = "С завтраком", extraBeds = "Дополнительные места: 1"', () => {
    const offerCardSubInfo = fixture.debugElement.queryAll(By.css('.offer-card__sub-info'));
    const [mealTitle, extraBeds] = offerCardSubInfo;

    expect(mealTitle.nativeElement).not.toBeNull();
    expect(mealTitle.nativeElement.textContent.trim()).toBe('С завтраком');

    expect(extraBeds.nativeElement).not.toBeNull();
    expect(extraBeds.nativeElement.textContent.trim()).toBe('Дополнительные места: 1');
  });

  it('should render ".offer-card__rooms-remained", roomsRemained = "Доступно 1 номеров"', () => {
    const offerCardRoomsRemained = fixture.debugElement.query(By.css('.offer-card__rooms-remained'));
    expect(offerCardRoomsRemained.nativeElement).not.toBeNull();
    expect(offerCardRoomsRemained.nativeElement.textContent.trim()).toBe('Доступно 1 номеров');
  });

  it('should render ".offer-card__price", priceInRub = "100 000 ₽"', () => {
    const offerCardPrice = fixture.debugElement.query(By.css('.offer-card__price'));
    expect(offerCardPrice.nativeElement).not.toBeNull();
    expect(offerCardPrice.nativeElement.textContent.trim()).toBe('100 000 ₽');
  });
});
