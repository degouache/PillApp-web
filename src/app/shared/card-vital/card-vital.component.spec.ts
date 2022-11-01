import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardVitalComponent } from './card-vital.component';

describe('CardVitalComponent', () => {
  let component: CardVitalComponent;
  let fixture: ComponentFixture<CardVitalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardVitalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardVitalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
