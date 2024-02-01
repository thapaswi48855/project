import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServicegroupComponent } from './servicegroup.component';
import { SharedcomponentModule } from '../sharedcomponent/sharedcomponent.module';
import { RouterModule, Routes } from '@angular/router';

const routes :Routes=[
  {path:'',component:ServicegroupComponent}
]

@NgModule({
  declarations: [
    ServicegroupComponent
  ],
  imports: [
    CommonModule,
    SharedcomponentModule,
    RouterModule.forChild(routes)
  ]
})
export class ServicegroupModule { }
