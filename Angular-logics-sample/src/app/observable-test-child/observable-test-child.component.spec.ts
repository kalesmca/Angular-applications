import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ObservableTestChildComponent } from './observable-test-child.component';

describe('ObservableTestChildComponent', () => {
  let component: ObservableTestChildComponent;
  let fixture: ComponentFixture<ObservableTestChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ObservableTestChildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ObservableTestChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
