import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaxsubgroupComponent } from './taxsubgroup.component';
import { SharedcomponentModule } from '../sharedcomponent/sharedcomponent.module';
import { RouterModule, Routes } from '@angular/router';

const routes :Routes =[
  {path:'',component:TaxsubgroupComponent}
]

@NgModule({
  declarations: [
    TaxsubgroupComponent
  ],
  imports: [
    CommonModule,
    SharedcomponentModule,
    RouterModule.forChild(routes)
  ]
})
export class TaxsubgroupModule { }
