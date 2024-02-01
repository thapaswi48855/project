import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RaisepurchaseorderComponent } from './raisepurchaseorder.component';
import { SharedcomponentModule } from '../sharedcomponent/sharedcomponent.module';
import { RouterModule, Routes } from '@angular/router';

const routes:Routes=[
  {path:'',component:RaisepurchaseorderComponent}
]

@NgModule({
  declarations: [
    RaisepurchaseorderComponent
  ],
  imports: [
    CommonModule,
    SharedcomponentModule,
    RouterModule.forChild(routes)
  ]
})
export class RaisepurchaseorderModule { }
