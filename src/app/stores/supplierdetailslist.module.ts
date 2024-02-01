import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SupplierdetailslistComponent } from './supplierdetailslist.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedcomponentModule } from '../sharedcomponent/sharedcomponent.module';
// import { SharedcomponentModule } from 'src/sharedcomponent/sharedcomponent.module';

const routes:Routes=[
  {path:'',component:SupplierdetailslistComponent}
]

@NgModule({
  declarations: [
    SupplierdetailslistComponent
  ],
  imports: [
    CommonModule,
    SharedcomponentModule,
    RouterModule.forChild(routes)
  ]
})
export class SupplierdetailslistModule { }
