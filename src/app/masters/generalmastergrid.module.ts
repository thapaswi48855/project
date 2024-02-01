import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GeneralmastergridComponent } from './generalmastergrid.component';
import { SharedcomponentModule } from '../sharedcomponent/sharedcomponent.module';
import { RouterModule, Routes } from '@angular/router';

const routes:Routes=[
  {path:'',component:GeneralmastergridComponent}
]

@NgModule({
  declarations: [
    GeneralmastergridComponent
  ],
  imports: [
    CommonModule,
    SharedcomponentModule,
    RouterModule.forChild(routes)
  ]
})
export class GeneralmastergridModule { }
