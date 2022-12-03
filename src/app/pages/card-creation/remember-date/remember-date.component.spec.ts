import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RememberDateComponent } from './remember-date.component';

describe('RememberDateComponent', () => {
  let component: RememberDateComponent;
  let fixture: ComponentFixture<RememberDateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RememberDateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RememberDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
