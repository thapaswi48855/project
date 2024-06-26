import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GenericdetailsComponent } from './genericdetails.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedcomponentModule } from '../sharedcomponent/sharedcomponent.module';
// import { SharedcomponentModule } from 'src/sharedcomponent/sharedcomponent.module';

const routes:Routes=[
  {path:'',component:GenericdetailsComponent}
]

@NgModule({
  declarations: [
    GenericdetailsComponent
  ],
  imports: [
    CommonModule,
    SharedcomponentModule,
    RouterModule.forChild(routes)
  ]
})
export class GenericdetailsModule { }
