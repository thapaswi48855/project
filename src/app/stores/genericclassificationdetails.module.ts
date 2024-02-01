import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GenericclassificationdetailsComponent } from './genericclassificationdetails.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedcomponentModule } from '../sharedcomponent/sharedcomponent.module';
// import { SharedcomponentModule } from 'src/sharedcomponent/sharedcomponent.module';

const routes:Routes=[
  {path:'',component:GenericclassificationdetailsComponent}
]

@NgModule({
  declarations: [
    GenericclassificationdetailsComponent
  ],
  imports: [
    CommonModule,
    SharedcomponentModule,
    RouterModule.forChild(routes)
  ]
})
export class GenericclassificationdetailsModule { }
