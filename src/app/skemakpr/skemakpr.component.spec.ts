import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SkemakprComponent } from './skemakpr.component';

describe('SkemakprComponent', () => {
  let component: SkemakprComponent;
  let fixture: ComponentFixture<SkemakprComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SkemakprComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkemakprComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
