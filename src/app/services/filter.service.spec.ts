import {TestBed} from '@angular/core/testing';
import {FilterService} from './filter.service';
import {provideHttpClient} from '@angular/common/http';
import {provideHttpClientTesting} from '@angular/common/http/testing';
import {FilterFormValues} from '../components/filters/types/filter-form-values.type';
import {hotelsMockForFilterService, hotelsMockAfterFilteringByAddress, hotelsMockAfterFilteringByPrice} from '../../../mocks/mock-data';
import {HotelDataService} from '../data/services/hotel-data.service';
import {of} from 'rxjs';
import {RangePrice} from '../components/filters/types/range-price.type';

describe('FilterService', () => {
  let service: FilterService;
  const fakeHotelDataService = jasmine.createSpyObj(['getHotelsByAddress']);

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        provideHttpClient(),
        provideHttpClientTesting(),
        {
          provide: HotelDataService,
          useValue: fakeHotelDataService
        }
      ]
    });
    service = TestBed.inject(FilterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('changeFilters', () => {
    const filters: Partial<FilterFormValues> = {
      address: 'abc',
      rangePrice: [10, 100]
    }

    it('should set "address$" to "abc"', () => {
      service.changeFilters(filters);
      expect(service.address$.value).toBe('abc');
    });

    it('should set "rangePrice$" to "[10, 100]"', () => {
      service.changeFilters(filters);
      expect(service.rangePrice$.value).toEqual([10, 100])
    });

    it('should set "address$" to "abc" and "rangePrice$" to "[10, 100]" same time', () => {
      service.changeFilters(filters);
      expect(service.address$.value).toBe('abc');
      expect(service.rangePrice$.value).toEqual([10, 100]);
    });
  });

  describe('filterHotels', () => {
    it('should filter hotels by price', (done: DoneFn) => {
      fakeHotelDataService.getHotelsByAddress.and.returnValue(of(hotelsMockForFilterService));
      const rangePrice: RangePrice = [50_000, 60_000];

      service.address$.next('');
      service.rangePrice$.next(rangePrice);

      service.filterHotels().subscribe(hotels => {
        expect(hotels.length).toBe(hotelsMockAfterFilteringByPrice.length);
        expect(hotels[0].hotelTitle).toBe(hotelsMockAfterFilteringByPrice[0].hotelTitle);
        expect(hotels[hotels.length - 1].hotelTitle).toBe(hotelsMockAfterFilteringByPrice[hotelsMockAfterFilteringByPrice.length - 1].hotelTitle);
        done();
      });
    });

    it('should filter hotels by address', (done: DoneFn) => {
      fakeHotelDataService.getHotelsByAddress.and.returnValue(of(hotelsMockAfterFilteringByAddress));
      const address = 'Олимпийский проспект, 18/1';
      const rangePrice: RangePrice = [0, 500_000];

      service.address$.next(address);
      service.rangePrice$.next(rangePrice);

      service.filterHotels().subscribe(hotels => {
        expect(hotels.length).toBe(hotelsMockAfterFilteringByAddress.length);
        expect(hotels[0].hotelTitle).toBe(hotelsMockAfterFilteringByAddress[0].hotelTitle);
        expect(hotels[hotels.length - 1].hotelTitle).toBe(hotelsMockAfterFilteringByAddress[hotelsMockAfterFilteringByAddress.length - 1].hotelTitle);
        done();
      });
    });
  });
});
