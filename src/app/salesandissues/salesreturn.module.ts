import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SalesreturnComponent } from './salesreturn.component';
import { SharedcomponentModule } from '../sharedcomponent/sharedcomponent.module';
import { RouterModule, Routes } from '@angular/router';

const routes:Routes=[
  {path:'',component:SalesreturnComponent}
]

@NgModule({
  declarations: [
    SalesreturnComponent
  ],
  imports: [
    CommonModule,
    SharedcomponentModule,
    RouterModule.forChild(routes)
  ]
})
export class SalesreturnModule { }
