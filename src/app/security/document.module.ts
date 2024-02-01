import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DocumentComponent } from './document.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedcomponentModule } from '../sharedcomponent/sharedcomponent.module';

const routes:Routes=[{
  path:'',component:DocumentComponent
}]

@NgModule({
  declarations: [
    DocumentComponent
  ],
  imports: [
    CommonModule,
    SharedcomponentModule,
    RouterModule.forChild(routes)
    
  ]
})
export class DocumentModule { }
