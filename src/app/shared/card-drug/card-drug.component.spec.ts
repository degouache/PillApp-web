import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardDrugComponent } from './card-drug.component';

describe('CardDrugComponent', () => {
  let component: CardDrugComponent;
  let fixture: ComponentFixture<CardDrugComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardDrugComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardDrugComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
