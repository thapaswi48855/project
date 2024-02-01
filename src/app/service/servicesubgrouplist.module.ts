import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServicesubgrouplistComponent } from './servicesubgrouplist.component';
import { SharedcomponentModule } from '../sharedcomponent/sharedcomponent.module';
import { RouterModule, Routes } from '@angular/router';

const routes:Routes=[
  {path:'',component:ServicesubgrouplistComponent}
]

@NgModule({
  declarations: [
    ServicesubgrouplistComponent
  ],
  imports: [
    CommonModule,
    SharedcomponentModule,
    RouterModule.forChild(routes)
  ]
})
export class ServicesubgrouplistModule { }
