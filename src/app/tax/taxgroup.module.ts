import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaxgroupComponent } from './taxgroup.component';
import { SharedcomponentModule } from '../sharedcomponent/sharedcomponent.module';
import { RouterModule, Routes } from '@angular/router';

const routes :Routes=[
  {path:'',component:TaxgroupComponent}
]

@NgModule({
  declarations: [
    TaxgroupComponent
  ],
  imports: [
    CommonModule,
    SharedcomponentModule,
    RouterModule.forChild(routes)
  ]
})
export class TaxgroupModule { }
