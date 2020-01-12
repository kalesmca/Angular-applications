import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { NgModule } from "@angular/core";
import { environment } from '../environments/environment';


import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule, AngularFireModule.initializeApp(environment.firebaseConfig), AngularFirestoreModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
