import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ObservableTestParentComponent } from './observable-test-parent.component';

describe('ObservableTestParentComponent', () => {
  let component: ObservableTestParentComponent;
  let fixture: ComponentFixture<ObservableTestParentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ObservableTestParentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ObservableTestParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
