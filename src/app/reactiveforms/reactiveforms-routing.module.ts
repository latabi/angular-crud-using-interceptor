import { ReactiveformsComponent } from './reactiveforms.component';
import { NgModule } from "@angular/core";
import {  Routes, RouterModule } from "@angular/router";

const routes: Routes = [
    {
        path: '', component: ReactiveformsComponent,
        children: [
           

            { path: 'tablecrud', loadChildren: './tablecrud/tablecrud.module#TablecrudModule' },

        ]

    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ReactiveFormsRoutingModule {}