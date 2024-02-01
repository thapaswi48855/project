import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AssignepermissionsComponent } from './assignepermissions.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedcomponentModule } from '../sharedcomponent/sharedcomponent.module';

const routes:Routes=[{
  path:'',component:AssignepermissionsComponent
}]

@NgModule({
  declarations: [
    AssignepermissionsComponent
  ],
  imports: [
    CommonModule,
    SharedcomponentModule,
    RouterModule.forChild(routes)
  ]
})
export class AssignepermissionsModule { }
