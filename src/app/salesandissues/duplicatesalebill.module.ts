import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DuplicatesalebillComponent } from './duplicatesalebill.component';
import { SharedcomponentModule } from '../sharedcomponent/sharedcomponent.module';
import { RouterModule, Routes } from '@angular/router';

const routes:Routes=[
  {path:'',component:DuplicatesalebillComponent}
]

@NgModule({
  declarations: [
    DuplicatesalebillComponent
  ],
  imports: [
    CommonModule,
    SharedcomponentModule,
    RouterModule.forChild(routes)
  ]
})
export class DuplicatesalebillModule { }
