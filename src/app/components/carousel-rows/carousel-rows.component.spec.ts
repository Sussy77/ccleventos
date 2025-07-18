import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselRowsComponent } from './carousel-rows.component';

describe('CarouselRowsComponent', () => {
  let component: CarouselRowsComponent;
  let fixture: ComponentFixture<CarouselRowsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarouselRowsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarouselRowsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
