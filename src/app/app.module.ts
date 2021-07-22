import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ScrollDemoComponent} from './scroll-demo/scroll-demo.component';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {NgScrollbarModule} from 'ngx-scrollbar';
import {NormalListComponent} from './normal-list/normal-list.component';

@NgModule({
  declarations: [
    AppComponent,
    ScrollDemoComponent,
    NormalListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    RouterModule,
    BrowserModule,
    NgScrollbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
