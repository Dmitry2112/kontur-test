import {TestBed} from '@angular/core/testing';
import {HotelDataService} from './hotel-data.service';
import {provideHttpClient} from '@angular/common/http';
import {provideHttpClientTesting} from '@angular/common/http/testing';
import {hotelsMockForHotelService, rangePriceMock} from '../../../../mocks/hotels';
import {of} from 'rxjs';

describe('HotelDataService', () => {
  let service: HotelDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        provideHttpClient(),
        provideHttpClientTesting(),
      ]
    });
    service = TestBed.inject(HotelDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('getRangePrice', () => {
    it('should return range price', (done: DoneFn) => {
      spyOn(service, 'getAllHotels').and.returnValue(of(hotelsMockForHotelService));

      service.getRangePrice().subscribe((range) => {
        expect(range).toEqual(rangePriceMock);
        done();
      })
    });
  });
});
