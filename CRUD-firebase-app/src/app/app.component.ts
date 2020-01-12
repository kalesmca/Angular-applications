import { Component, OnInit } from "@angular/core";
import { ApiServiceService } from "./services/api-service.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {
  title = "CRUD-firebase-app";
  constructor(private apiService: ApiServiceService) { }
  user = {
    name: "",
    age: 10
  };

  ngOnInit() {
    this.getAllUsers();
  }
  userList = [];

  getAllUsers() {
    console.log('usert calling');
    this.apiService.getUsers().subscribe((res) => {
      console.log("response:", res);
      this.userList = res;
    })
  }
  saveUser() {
    console.log("user ::", this.user);

    this.apiService.createUser(this.user)
      .then(
        res => {
          this.userList.push(this.user);
        }
      )

  }
}
