import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrescriptionlistComponent } from './prescriptionlist.component';
import { SharedcomponentModule } from '../sharedcomponent/sharedcomponent.module';
import { RouterModule, Routes } from '@angular/router';

const routes:Routes=[
  {path:'',component:PrescriptionlistComponent}
]

@NgModule({
  declarations: [
    PrescriptionlistComponent
  ],
  imports: [
    CommonModule,
    SharedcomponentModule,
    RouterModule.forChild(routes)
  ]
})
export class PrescriptionlistModule { }
