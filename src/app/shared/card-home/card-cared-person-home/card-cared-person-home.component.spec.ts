import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardCaredPersonHomeComponent } from './card-cared-person-home.component';

describe('CardCaredPersonHomeComponent', () => {
  let component: CardCaredPersonHomeComponent;
  let fixture: ComponentFixture<CardCaredPersonHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardCaredPersonHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardCaredPersonHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
