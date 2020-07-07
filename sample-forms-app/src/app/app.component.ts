import { Component,OnInit } from '@angular/core';
import { FormBuilder, Validator, Validators } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(public fb: FormBuilder) {
  }
  title = 'sample-forms-app';
  pInfo = this.fb.group({
    name : ['', Validators.required],
    addr: ['', Validators.required],
    email: ['', Validators.email]
  });
  ngOnInit() {
   this.pInfo.valueChanges.subscribe((data) => {
     console.log('data : change:', data);
   });
  }
}
