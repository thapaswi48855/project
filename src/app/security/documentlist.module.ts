import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DocumentlistComponent } from './documentlist.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedcomponentModule } from '../sharedcomponent/sharedcomponent.module';

const routes:Routes=[{
  path:'',component:DocumentlistComponent
}]

@NgModule({
  declarations: [
    DocumentlistComponent
  ],
  imports: [
    CommonModule,
    SharedcomponentModule,
    RouterModule.forChild(routes)
  ]
})
export class DocumentlistModule { }
