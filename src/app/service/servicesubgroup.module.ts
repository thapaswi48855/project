import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServicesubgroupComponent } from './servicesubgroup.component';
import { SharedcomponentModule } from '../sharedcomponent/sharedcomponent.module';
import { RouterModule, Routes } from '@angular/router';

const routes :Routes=[
  {path:'',component:ServicesubgroupComponent}
]

@NgModule({
  declarations: [
    ServicesubgroupComponent
  ],
  imports: [
    CommonModule,
    SharedcomponentModule,
    RouterModule.forChild(routes)
  ]
})
export class ServicesubgroupModule { }
