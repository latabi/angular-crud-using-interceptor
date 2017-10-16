

import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { CloseComponent } from "./close.component";


const routes: Routes = [
    {
        path: '',
        component:  CloseComponent 
        
    }
    
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CloseRoutingModule {}