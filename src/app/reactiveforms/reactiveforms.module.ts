import { FormsModule, ReactiveFormsModule } from '@angular/Forms';
import { ReactiveformsComponent } from './reactiveforms.component';
import { NgModule } from '@angular/core';

import { CommonModule } from "@angular/common";
import { ReactiveFormsRoutingModule } from "./reactiveforms-routing.module";

@NgModule({
  declarations: [ReactiveformsComponent
  
  ],
  imports: [
    CommonModule,
      FormsModule,
       ReactiveFormsModule,
    ReactiveFormsRoutingModule
  ],
  providers: []
 
})
export class ReactiveFormModule { }
