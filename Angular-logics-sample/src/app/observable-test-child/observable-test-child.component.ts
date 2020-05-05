import { Component, OnInit } from '@angular/core';
import {TestService} from '../test.service';

@Component({
  selector: 'app-observable-test-child',
  templateUrl: './observable-test-child.component.html',
  styleUrls: ['./observable-test-child.component.css']
})
export class ObservableTestChildComponent implements OnInit {

  constructor(public myService: TestService) { }

  ngOnInit() {
    // this.myService.sites.subscribe((data) => {
    //   console.log('subscribed data ::', data);
    //   this.myFunction();
    // });
    this.myFunction();
   

  }
  myarray = []
  myFunction(){
    for(let i=0;i<10;i++)
{
  let obj: any = {
  }
  this.myService.sites.subscribe((data) => {
    console.log('looped subscribe data ::', data);
    obj.myName = data.name;
    
  });
  this.myarray.push(obj);

}
  }

}
