import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailkprComponent } from './detailkpr.component';

describe('DetailkprComponent', () => {
  let component: DetailkprComponent;
  let fixture: ComponentFixture<DetailkprComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailkprComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailkprComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
