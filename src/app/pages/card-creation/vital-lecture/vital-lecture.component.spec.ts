import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VitalLectureComponent } from './vital-lecture.component';

describe('VitalLectureComponent', () => {
  let component: VitalLectureComponent;
  let fixture: ComponentFixture<VitalLectureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VitalLectureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VitalLectureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
