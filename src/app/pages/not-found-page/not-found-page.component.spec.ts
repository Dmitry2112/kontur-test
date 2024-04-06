import {ComponentFixture, TestBed} from '@angular/core/testing';
import {NotFoundPageComponent} from './not-found-page.component';
import {provideRouter} from '@angular/router';
import {By} from '@angular/platform-browser';

describe('NotFoundPageComponent', () => {
  let component: NotFoundPageComponent;
  let fixture: ComponentFixture<NotFoundPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NotFoundPageComponent],
      providers: [
        provideRouter([])
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NotFoundPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render ".not-found-page"', () => {
    const notFoundPage = fixture.debugElement.query(By.css('.not-found-page'));
    expect(notFoundPage.nativeElement).not.toBeNull();
  });

  it('should render ".not-found-page__link-to-main"', () => {
    const notFoundPageLinkToMain = fixture.debugElement.query(By.css('.not-found-page__link-to-main'));
    expect(notFoundPageLinkToMain.nativeElement).not.toBeNull();
  });
});
