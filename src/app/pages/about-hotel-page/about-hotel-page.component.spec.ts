import {ComponentFixture, TestBed} from '@angular/core/testing';
import {AboutHotelPageComponent} from './about-hotel-page.component';
import {provideHttpClient} from '@angular/common/http';
import {provideHttpClientTesting} from '@angular/common/http/testing';
import {provideRouter} from '@angular/router';

describe('AboutHotelPageComponent', () => {
  let component: AboutHotelPageComponent;
  let fixture: ComponentFixture<AboutHotelPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutHotelPageComponent],
      providers: [
        provideHttpClient(),
        provideHttpClientTesting(),
        provideRouter([])
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutHotelPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
