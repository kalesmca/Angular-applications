import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppFlowchartComponent } from './app-flowchart.component';

describe('AppFlowchartComponent', () => {
  let component: AppFlowchartComponent;
  let fixture: ComponentFixture<AppFlowchartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppFlowchartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppFlowchartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
