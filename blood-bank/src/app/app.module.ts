import 'hammerjs';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpConfigInterceptor } from './interceptor/httpconfig.interceptor';

import { AppMaterialModule } from './material/app.material.module';
import { AppComponent, DialogContentComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import { CreateDonarComponent } from './pages/create-donar/create-donar.component';
import { DonarListComponent } from './pages/donar-list/donar-list.component';
import { CardComponent } from './components/card/card.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppMaterialModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: HttpConfigInterceptor, multi: true }
  ],
  declarations: [AppComponent, DialogContentComponent, IndexComponent, CreateDonarComponent, DonarListComponent, CardComponent],
  entryComponents: [DialogContentComponent],
  //bootstrap: [AppComponent],
  bootstrap: [IndexComponent]
})
export class AppModule { }
