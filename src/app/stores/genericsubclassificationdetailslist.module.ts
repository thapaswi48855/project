import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GenericsubclassificationdetailslistComponent } from './genericsubclassificationdetailslist.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedcomponentModule } from '../sharedcomponent/sharedcomponent.module';
// import { SharedcomponentModule } from 'src/sharedcomponent/sharedcomponent.module';

const routes:Routes=[{path:'',component:GenericsubclassificationdetailslistComponent}]

@NgModule({
  declarations: [
    GenericsubclassificationdetailslistComponent
  ],
  imports: [
    CommonModule,
    SharedcomponentModule,
    RouterModule.forChild(routes)
  ]
})
export class GenericsubclassificationdetailslistModule { }
