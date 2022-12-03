import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrugTakeComponent } from './drug-take.component';

describe('DrugTakeComponent', () => {
  let component: DrugTakeComponent;
  let fixture: ComponentFixture<DrugTakeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DrugTakeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DrugTakeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
