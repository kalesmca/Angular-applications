import { Component, OnInit } from '@angular/core';
import { CreateLayout } from './layout';
import { CreateDonor } from './model';

@Component({
  selector: 'app-create-donar',
  templateUrl: './create-donar.component.html',
  styleUrls: ['./create-donar.component.scss']
})
export class CreateDonarComponent implements OnInit {
  layoutConfig = new CreateLayout();
  donor = new CreateDonor();
  constructor() { }

  ngOnInit() {
    console.log(this.layoutConfig)
    console.log(this.donor);
  }

  save() {
    console.log('save :', this.layoutConfig);
  }

}
