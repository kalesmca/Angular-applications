import { Injectable } from "@angular/core";
import { AngularFirestore } from "@angular/fire/firestore";

@Injectable({
  providedIn: "root"
})
export class ApiServiceService {
  constructor(public db: AngularFirestore) { }
  createUser(value) {
    return this.db.collection("users").add({
      name: value.name,
      age: parseInt(value.age)
    });
  }

  getUsers() {
    return this.db.collection("users").snapshotChanges();
  }
}
