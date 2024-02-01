import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaxgrouplistComponent } from './taxgrouplist.component';
import { SharedcomponentModule } from '../sharedcomponent/sharedcomponent.module';
import { RouterModule, Routes } from '@angular/router';

const routes:Routes=[
  {path:'',component:TaxgrouplistComponent}
]

@NgModule({
  declarations: [
    TaxgrouplistComponent
  ],
  imports: [
    CommonModule,
    SharedcomponentModule,
    RouterModule.forChild(routes)
  ]
})
export class TaxgrouplistModule { }
