import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManufacturecreationComponent } from './manufacturecreation.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedcomponentModule } from '../sharedcomponent/sharedcomponent.module';
// import { SharedcomponentModule } from 'src/sharedcomponent/sharedcomponent.module';

const routes:Routes=[
  {path:'',component:ManufacturecreationComponent}
]

@NgModule({
  declarations: [
    ManufacturecreationComponent
  ],
  imports: [
    CommonModule,
    SharedcomponentModule,
    RouterModule.forChild(routes)
  ]
})
export class ManufacturecreationModule { }
