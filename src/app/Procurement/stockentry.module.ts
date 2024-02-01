import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StockentryComponent } from './stockentry.component';
import { SharedcomponentModule } from '../sharedcomponent/sharedcomponent.module';
import { RouterModule, Routes } from '@angular/router';

const routes:Routes=[
  {path:'',component:StockentryComponent}
]

@NgModule({
  declarations: [
    StockentryComponent
  ],
  imports: [
    CommonModule,
    SharedcomponentModule,
    RouterModule.forChild(routes)
  ]
})
export class StockentryModule { }
