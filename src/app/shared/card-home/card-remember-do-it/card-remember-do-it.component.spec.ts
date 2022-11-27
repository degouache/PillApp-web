import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardRememberDoItComponent } from './card-remember-do-it.component';

describe('CardRememberDoItComponent', () => {
  let component: CardRememberDoItComponent;
  let fixture: ComponentFixture<CardRememberDoItComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardRememberDoItComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardRememberDoItComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
