import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutHotelPageComponent } from './about-hotel-page.component';

describe('AboutHotelPageComponent', () => {
  let component: AboutHotelPageComponent;
  let fixture: ComponentFixture<AboutHotelPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutHotelPageComponent]
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
