import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PharmacyreceiptsComponent } from './pharmacyreceipts.component';
import { SharedcomponentModule } from '../sharedcomponent/sharedcomponent.module';
import { RouterModule, Routes } from '@angular/router';

const routes:Routes=[
  {path:'',component:PharmacyreceiptsComponent}
]

@NgModule({
  declarations: [
    PharmacyreceiptsComponent
  ],
  imports: [
    CommonModule,
    SharedcomponentModule,
    RouterModule.forChild(routes)
  ]
})
export class PharmacyreceiptsModule { }
