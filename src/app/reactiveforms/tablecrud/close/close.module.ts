import { FormsModule, ReactiveFormsModule } from '@angular/Forms';


import { NgModule } from '@angular/core';

import { CommonModule } from "@angular/common";
import { CloseComponent } from "./close.component";
import { CloseRoutingModule } from "./close-routing.module";



@NgModule({
  declarations: [CloseComponent
  
  ],
  imports: [
    CommonModule,
      FormsModule,
      ReactiveFormsModule,
      
    CloseRoutingModule
  ],
  providers: []
 
})
export class CloseModule { }
