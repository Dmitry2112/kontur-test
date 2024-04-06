import {ComponentFixture, TestBed} from '@angular/core/testing';
import {AboutHotelPageComponent} from './about-hotel-page.component';
import {provideHttpClient} from '@angular/common/http';
import {provideHttpClientTesting} from '@angular/common/http/testing';
import {provideRouter} from '@angular/router';
import {HotelDataService} from '../../data/services/hotel-data.service';
import {hotelMock} from '../../../../mocks/mock-data';
import {By} from '@angular/platform-browser';
import {of} from 'rxjs';

describe('AboutHotelPageComponent', () => {
  let component: AboutHotelPageComponent;
  let fixture: ComponentFixture<AboutHotelPageComponent>;
  const fakeHotelDataService = jasmine.createSpyObj(['getHotelByTitle']);

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutHotelPageComponent],
      providers: [
        provideHttpClient(),
        provideHttpClientTesting(),
        provideRouter([]),
        {
          provide: HotelDataService,
          useValue: fakeHotelDataService
        }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutHotelPageComponent);
    component = fixture.componentInstance;
    fakeHotelDataService.getHotelByTitle.and.returnValue(of(hotelMock));

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render ".about-page__content"', () => {
    const aboutPageContent = fixture.debugElement.query(By.css('.about-page__content'));
    expect(aboutPageContent.nativeElement).not.toBeNull();
  });

  it('should render ".about-page__link"', () => {
    const aboutPageLink = fixture.debugElement.query(By.css('.about-page__link'));
    expect(aboutPageLink.nativeElement).not.toBeNull();
  });
});
