import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StockentrylistComponent } from './stockentrylist.component';
import { SharedcomponentModule } from '../sharedcomponent/sharedcomponent.module';
import { RouterModule, Routes } from '@angular/router';

const routes:Routes=[
  {path:'',component:StockentrylistComponent}
]

@NgModule({
  declarations: [
    StockentrylistComponent
  ],
  imports: [
    CommonModule,
    SharedcomponentModule,
    RouterModule.forChild(routes)
  ]
})
export class StockentrylistModule { }
