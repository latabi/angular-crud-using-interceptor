
import { ModalModule, BsModalService } from 'ngx-bootstrap/modal';
import { RouterModule } from '@angular/router';


import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { CarouselConfig, CarouselModule } from 'ngx-bootstrap/carousel';

import { HttpModule } from "@angular/http";
import { AppRoutingModule } from "./app-routing.module";
import { DataInterceptor } from "./sevices/data-interceptor";
import { ServicesService } from "./sevices/services.service";





@NgModule({
  declarations: [
    AppComponent,
  
   




  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
 CarouselModule.forRoot(),
    BrowserAnimationsModule,
 
  
    HttpClientModule,
    RouterModule,
    ModalModule.forRoot()
  ],
  providers: [ServicesService, BsModalService,
  {
      provide: HTTP_INTERCEPTORS,
      useClass: DataInterceptor,
      multi: true,
    },
    {
      provide: CarouselConfig,
      useValue: { interval: 1500, noPause: true }
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
