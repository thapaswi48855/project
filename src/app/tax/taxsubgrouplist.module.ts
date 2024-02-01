import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaxsubgrouplistComponent } from './taxsubgrouplist.component';
import { SharedcomponentModule } from '../sharedcomponent/sharedcomponent.module';
import { RouterModule, Routes } from '@angular/router';

const routes:Routes=[
  {path:'',component:TaxsubgrouplistComponent}
]

@NgModule({
  declarations: [
    TaxsubgrouplistComponent
  ],
  imports: [
    CommonModule,
    SharedcomponentModule,
    RouterModule.forChild(routes)
  ]
})
export class TaxsubgrouplistModule { }
