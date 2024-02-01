import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GenericsubclassificationdetailsComponent } from './genericsubclassificationdetails.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedcomponentModule } from '../sharedcomponent/sharedcomponent.module';
// import { SharedcomponentModule } from 'src/sharedcomponent/sharedcomponent.module';

const routes:Routes=[
  {path:'',component:GenericsubclassificationdetailsComponent}
]

@NgModule({
  declarations: [
    GenericsubclassificationdetailsComponent
  ],
  imports: [
    CommonModule,
    SharedcomponentModule,
    RouterModule.forChild(routes)
  ]
})
export class GenericsubclassificationdetailsModule { }
