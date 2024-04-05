import { TestBed } from '@angular/core/testing';

import { HotelDataService } from './hotel-data.service';
import {provideHttpClient} from '@angular/common/http';
import {provideHttpClientTesting} from '@angular/common/http/testing';

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
});
