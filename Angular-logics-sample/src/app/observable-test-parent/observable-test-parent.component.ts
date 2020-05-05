import { Component, OnInit } from '@angular/core';
import {TestService} from '../test.service';

@Component({
  selector: 'app-observable-test-parent',
  templateUrl: './observable-test-parent.component.html',
  styleUrls: ['./observable-test-parent.component.css']
})
export class ObservableTestParentComponent implements OnInit {

  constructor(public service: TestService) { }
  obj = {
    name: '',
    age: 0
  };
  ngOnInit() {
  }

  save(){
    console.log(this.obj);
    this.service.saveData(this.obj);
  }

}
