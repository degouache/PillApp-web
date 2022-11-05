import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardCaredPersonListComponent } from './card-cared-person-list.component';

describe('CardCaredPersonListComponent', () => {
  let component: CardCaredPersonListComponent;
  let fixture: ComponentFixture<CardCaredPersonListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardCaredPersonListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardCaredPersonListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
