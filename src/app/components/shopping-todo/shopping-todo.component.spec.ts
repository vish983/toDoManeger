import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppingTodoComponent } from './shopping-todo.component';

describe('ShoppingTodoComponent', () => {
  let component: ShoppingTodoComponent;
  let fixture: ComponentFixture<ShoppingTodoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShoppingTodoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShoppingTodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
