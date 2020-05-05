
import { Component, ViewEncapsulation, Inject, OnInit, ViewChild, Renderer2 } from '@angular/core';

import { DiagramComponent, Diagram, NodeModel, ConnectorModel } from '@syncfusion/ej2-ng-diagrams';
import 'leader-line';
declare let LeaderLine: any;

@Component({
    selector: "app-root",
    
     templateUrl:'./app.component.html',

    styleUrls:['./app.component.css'],
    encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit {
    constructor(private renderer: Renderer2){
    }
    tableList = [{name:"kalees", age: 18},{name:"kumar", age: 19},{name:"saravana", age: 21},{name:"madhu", age: 18},{name:"mano", age: 32}]
    save(obj) {
        console.log('current obj ::', obj);
    }
    obj = {
        qty : "kalees"
    }
    ngOnInit(): void {
        
    }

    rowIndex = -1
    insert(item){
        item.flag = !item.flag;
        // let id = 'myId-'+i;                // Create a <li> node
        // const p: HTMLParagraphElement = this.renderer.createElement('tr');
        // this.renderer.appendChild(document.getElementById(id), p)
    }
    myObj:any={
        name:'',
        age:0
    };
    add(data) {
        this.tableList.push(data);
        this.myObj = {};

        this.tableList[1].name ="mine";

    }
}