import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PendingcreditbilllistComponent } from './pendingcreditbilllist.component';
import { SharedcomponentModule } from '../sharedcomponent/sharedcomponent.module';
import { RouterModule, Routes } from '@angular/router';

const routes:Routes=[
  {path:'',component:PendingcreditbilllistComponent}
]

@NgModule({
  declarations: [
    PendingcreditbilllistComponent
  ],
  imports: [
    CommonModule,
    SharedcomponentModule,
    RouterModule.forChild(routes)
  ]
})
export class PendingcreditbilllistModule { }
