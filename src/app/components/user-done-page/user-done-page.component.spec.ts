import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDonePageComponent } from './user-done-page.component';

describe('UserDonePageComponent', () => {
  let component: UserDonePageComponent;
  let fixture: ComponentFixture<UserDonePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserDonePageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserDonePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
