import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardRememberDateComponent } from './card-remember-date.component';

describe('CardRememberDateComponent', () => {
  let component: CardRememberDateComponent;
  let fixture: ComponentFixture<CardRememberDateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardRememberDateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardRememberDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
