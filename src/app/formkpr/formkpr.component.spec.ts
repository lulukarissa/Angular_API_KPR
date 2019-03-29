import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormkprComponent } from './formkpr.component';

describe('FormkprComponent', () => {
  let component: FormkprComponent;
  let fixture: ComponentFixture<FormkprComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormkprComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormkprComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
