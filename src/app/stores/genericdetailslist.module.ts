import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GenericdetailslistComponent } from './genericdetailslist.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedcomponentModule } from '../sharedcomponent/sharedcomponent.module';
// import { SharedcomponentModule } from 'src/sharedcomponent/sharedcomponent.module';

const routes:Routes=[
  {path:'',component:GenericdetailslistComponent}
]

@NgModule({
  declarations: [
    GenericdetailslistComponent
  ],
  imports: [
    CommonModule,
    SharedcomponentModule,
    RouterModule.forChild(routes)
  ]
})
export class GenericdetailslistModule { }
