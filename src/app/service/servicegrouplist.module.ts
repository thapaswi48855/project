import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServicegrouplistComponent } from './servicegrouplist.component';
import { SharedcomponentModule } from '../sharedcomponent/sharedcomponent.module';
import { RouterModule, Routes } from '@angular/router';

const routes:Routes=[
  {path:'',component:ServicegrouplistComponent}
]

@NgModule({
  declarations: [
    ServicegrouplistComponent
  ],
  imports: [
    CommonModule,
    SharedcomponentModule,
    RouterModule.forChild(routes)
  ]
})
export class ServicegrouplistModule { }
