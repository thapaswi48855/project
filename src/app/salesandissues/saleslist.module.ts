import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SaleslistComponent } from './saleslist.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedcomponentModule } from '../sharedcomponent/sharedcomponent.module';

const routes:Routes=[
  {path:'',component:SaleslistComponent}
]

@NgModule({
  declarations: [
    SaleslistComponent
  ],
  imports: [
    CommonModule,
    SharedcomponentModule,
    RouterModule.forChild(routes)
  ]
})
export class SaleslistModule { }
