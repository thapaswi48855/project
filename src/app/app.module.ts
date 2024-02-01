import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { SharedcomponentModule } from './sharedcomponent/sharedcomponent.module';
import { GloblData } from './globaldata';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';










@NgModule({
  declarations: [
    AppComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedcomponentModule,
    BrowserAnimationsModule

  ],
  providers: [GloblData],
  bootstrap: [AppComponent]
})
export class AppModule { }
