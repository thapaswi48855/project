import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DepartmentlistComponent } from './departmentlist.component';
import { SharedcomponentModule } from '../sharedcomponent/sharedcomponent.module';
import { RouterModule, Routes } from '@angular/router';

const routes:Routes=[
  {path:'',component:DepartmentlistComponent}
]

@NgModule({
  declarations: [
    DepartmentlistComponent
  ],
  imports: [
    CommonModule,
    SharedcomponentModule,
    RouterModule.forChild(routes)
  ]
})
export class DepartmentlistModule { }
