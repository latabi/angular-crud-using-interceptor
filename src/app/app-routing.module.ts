import { Routes, RouterModule } from '@angular/router';

import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

const routes: Routes = [
    // {
    //     path: '',
    //     loadChildren: './binding/binding.module#BindingModule'
    // },
    
  
    {
        path: '',
        loadChildren: './reactiveforms/reactiveforms.module#ReactiveFormModule'
    },
    
     {
        path: 'reactiveforms',
        loadChildren: './reactiveforms/reactiveforms.module#ReactiveFormModule'
    }
    

];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}