import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdditemcategorylistComponent } from './additemcategorylist.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedcomponentModule } from '../sharedcomponent/sharedcomponent.module';
// import { SharedcomponentModule } from 'src/sharedcomponent/sharedcomponent.module';

const routes:Routes=[
  {path:'',component:AdditemcategorylistComponent}
]

@NgModule({
  declarations: [
    AdditemcategorylistComponent
  ],
  imports: [
    CommonModule,
    SharedcomponentModule,
    RouterModule.forChild(routes)
  ]
})
export class AdditemcategorylistModule { }
