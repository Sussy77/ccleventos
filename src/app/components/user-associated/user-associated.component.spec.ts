import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserAssociatedComponent } from './user-associated.component';

describe('UserAssociatedComponent', () => {
  let component: UserAssociatedComponent;
  let fixture: ComponentFixture<UserAssociatedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserAssociatedComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserAssociatedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
