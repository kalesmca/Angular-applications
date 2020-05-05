import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppFlowchartComponent } from './app-flowchart/app-flowchart.component';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { DiagramModule } from '@syncfusion/ej2-ng-diagrams';
import { ChildComponent } from './child/child.component';
import { ObservableTestParentComponent } from './observable-test-parent/observable-test-parent.component';
import { ObservableTestChildComponent } from './observable-test-child/observable-test-child.component';

/**
 * Module
 */
@NgModule({
    imports: [
        BrowserModule, DiagramModule, FormsModule
    ],
    declarations: [AppFlowchartComponent, AppComponent, ChildComponent, ObservableTestParentComponent, ObservableTestChildComponent],
    bootstrap: [ObservableTestParentComponent],
    providers: [ ]
})
export class AppModule { }