import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewitemComponent } from './newitem.component';
import { SharedcomponentModule } from '../sharedcomponent/sharedcomponent.module';
import { RouterModule, Routes } from '@angular/router';

const routes:Routes=[
  {path:'',component:NewitemComponent}
]

@NgModule({
  declarations: [
    NewitemComponent
  ],
  imports: [
    CommonModule,
    SharedcomponentModule,
    RouterModule.forChild(routes)
  ]
})
export class NewitemModule { }
