import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModulelistComponent } from './modulelist.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedcomponentModule } from '../sharedcomponent/sharedcomponent.module';

const routes:Routes=[
  {path:'',component:ModulelistComponent}
]

@NgModule({
  declarations: [
    ModulelistComponent
  ],
  imports: [
    CommonModule,
    SharedcomponentModule,
    RouterModule.forChild(routes)
  ]
})
export class ModulelistModule { }
