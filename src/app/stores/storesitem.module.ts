import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoresitemComponent } from './storesitem.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedcomponentModule } from '../sharedcomponent/sharedcomponent.module';
// import { SharedcomponentModule } from 'src/sharedcomponent/sharedcomponent.module';

const routes:Routes=[
  {path:'',component:StoresitemComponent}
]

@NgModule({
  declarations: [
    StoresitemComponent
  ],
  imports: [
    CommonModule,
    SharedcomponentModule,
    RouterModule.forChild(routes)
  ]
})
export class StoresitemModule { }
