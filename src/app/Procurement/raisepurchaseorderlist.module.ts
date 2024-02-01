import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RaisepurchaseorderlistComponent } from './raisepurchaseorderlist.component';
import { SharedcomponentModule } from '../sharedcomponent/sharedcomponent.module';
import { RouterModule, Routes } from '@angular/router';

const routes:Routes=[
  {path:'',component:RaisepurchaseorderlistComponent}
]

@NgModule({
  declarations: [
    RaisepurchaseorderlistComponent
  ],
  imports: [
    CommonModule,
    SharedcomponentModule,
    RouterModule.forChild(routes)
  ]
})
export class RaisepurchaseorderlistModule { }
