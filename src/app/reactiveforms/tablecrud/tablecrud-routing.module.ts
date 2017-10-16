import { TablecrudComponent } from './tablecrud.component';


import { NgModule } from "@angular/core";
import {  Routes, RouterModule } from "@angular/router";


const routes: Routes = [
    {
        path: '', component: TablecrudComponent,
        children: [
           

            { path: 'close', loadChildren: './close/close.module#CloseModule' },

        ]

    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class TablecrudRoutingModule {}