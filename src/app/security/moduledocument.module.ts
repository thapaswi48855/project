import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModuledocumentComponent } from './moduledocument.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedcomponentModule } from '../sharedcomponent/sharedcomponent.module';

const routes:Routes=[
  {path:'',component:ModuledocumentComponent}
]

@NgModule({
  declarations: [
    ModuledocumentComponent
  ],
  imports: [
    CommonModule,
    SharedcomponentModule,
    RouterModule.forChild(routes)
  ]
})
export class ModuledocumentModule { }
