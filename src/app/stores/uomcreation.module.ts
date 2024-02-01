import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UomcreationComponent } from './uomcreation.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedcomponentModule } from '../sharedcomponent/sharedcomponent.module';
// import { SharedcomponentModule } from 'src/sharedcomponent/sharedcomponent.module';

const routes:Routes=[
  {path:'',component:UomcreationComponent}
]

@NgModule({
  declarations: [
    UomcreationComponent
  ],
  imports: [
    CommonModule,
    SharedcomponentModule,
    RouterModule.forChild(routes)
  ]
})
export class UomcreationModule { }
