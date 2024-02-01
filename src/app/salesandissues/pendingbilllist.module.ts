import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PendingbilllistComponent } from './pendingbilllist.component';
import { SharedcomponentModule } from '../sharedcomponent/sharedcomponent.module';
import { RouterModule, Routes } from '@angular/router';

const routes:Routes=[
  {path:'',component:PendingbilllistComponent}
]

@NgModule({
  declarations: [
    PendingbilllistComponent
  ],
  imports: [
    CommonModule,
    SharedcomponentModule,
    RouterModule.forChild(routes)
  ]
})
export class PendingbilllistModule { }
