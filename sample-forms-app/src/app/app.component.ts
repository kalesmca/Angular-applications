import { Component,OnInit } from '@angular/core';
import { FormBuilder, Validator, Validators } from '@angular/forms';
import {PesonalInfoService} from './pesonal-info.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(public fb: FormBuilder, public pService: PesonalInfoService) {
  }
  title = 'sample-forms-app';
  pInfo: any;
  pInfoForm = this.fb.group({
    firstname : [''],
    lastname: [''],
    email: ['', Validators.email],
    gender: ['male'],
    date_of_birth: [''],
    person_id: [''],
    address1: ['', Validators.required],
    address2: ['', Validators.required],
    city: ['', Validators.required],
    zipcode: ['', Validators.required],
    country_id: ['', Validators.required],
    state_id: ['', Validators.required],
    current_location: ['', Validators.required]
  });
  ngOnInit() {
    this.pService.getUserInfo().subscribe((res)=>{
      console.log('Response ::', res);
      this.pInfo = res;
      this.pInfoForm.controls['firstname'].setValue(res.firstname);
      this.pInfoForm.controls['lastname'].setValue(res.lastname);
      this.pInfoForm.controls['email'].setValue(res.email);
      this.pInfoForm.controls['date_of_birth'].setValue(res.date_of_birth);
    });

   this.pInfoForm.valueChanges.subscribe((data) => {
     console.log('data : change:', data);
   });

  }

  update(){
    console.log('form value::', this.pInfoForm.value);
    const formattedParam = {
      id: this.pInfo.id,
      person_id: this.pInfo.person_id,
      address1: this.pInfoForm.value.address1,
      address2: this.pInfoForm.value.address2,
      city: this.pInfoForm.value.city,
      zipcode: this.pInfoForm.value.zipcode,
      country_id: this.pInfoForm.value.country_id,
      state_id: this.pInfoForm.value.state_id,
      current_location: this.pInfoForm.value.current_location
    }
    this.pService.update(formattedParam).subscribe((res) => {
      console.log('updated response ::', res);
    });
  }
}
