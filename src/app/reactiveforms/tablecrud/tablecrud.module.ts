import { TablecrudComponent } from './tablecrud.component';
import { FormsModule, ReactiveFormsModule } from '@angular/Forms';


import { NgModule } from '@angular/core';

import { CommonModule } from "@angular/common";
import { TablecrudRoutingModule } from "./tablecrud-routing.module";



@NgModule({
  declarations: [TablecrudComponent
  
  ],
  imports: [
    CommonModule,
      FormsModule,
      ReactiveFormsModule,
      
  TablecrudRoutingModule
  ],
  providers: []
 
})
export class TablecrudModule { }
