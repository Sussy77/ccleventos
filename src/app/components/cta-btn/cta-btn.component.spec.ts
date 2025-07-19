import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CtaBtnComponent } from './cta-btn.component';

describe('CtaBtnComponent', () => {
  let component: CtaBtnComponent;
  let fixture: ComponentFixture<CtaBtnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CtaBtnComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CtaBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
