import {ComponentFixture, TestBed} from '@angular/core/testing';
import {HotelsComponent} from './hotels.component';
import {provideHttpClient} from '@angular/common/http';
import {provideHttpClientTesting} from '@angular/common/http/testing';
import {FilterService} from '../../services/filter.service';
import {By} from '@angular/platform-browser';
import {hotelsMockForHotelsComponent} from '../../../../mocks/mock-data';
import {of} from 'rxjs';

describe('HotelsComponent', () => {
  let component: HotelsComponent;
  let fixture: ComponentFixture<HotelsComponent>;
  const fakeFilterService = jasmine.createSpyObj(['filterHotels']);

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HotelsComponent],
      providers: [
        provideHttpClient(),
        provideHttpClientTesting(),
        {
          provide: FilterService,
          useValue: fakeFilterService
        }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HotelsComponent);
    component = fixture.componentInstance;
    fakeFilterService.filterHotels.and.returnValue(of(hotelsMockForHotelsComponent));

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render ".hotels"', () => {
    const hotels = fixture.debugElement.query(By.css('.hotels'));
    expect(hotels.nativeElement).not.toBeNull();
  });
});
