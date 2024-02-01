import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewitemlistComponent } from './newitemlist.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedcomponentModule } from '../sharedcomponent/sharedcomponent.module';

const routes:Routes=[
  {path:'',component:NewitemlistComponent}
]

@NgModule({
  declarations: [
    NewitemlistComponent
  ],
  imports: [
    CommonModule,
    SharedcomponentModule,
    RouterModule.forChild(routes)
  ]
})
export class NewitemlistModule { }
