import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RememberDoItComponent } from './remember-do-it.component';

describe('RememberDoItComponent', () => {
  let component: RememberDoItComponent;
  let fixture: ComponentFixture<RememberDoItComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RememberDoItComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RememberDoItComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
