import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ScrollDemoComponent} from './scroll-demo/scroll-demo.component';
import {NormalListComponent} from './normal-list/normal-list.component';

const routes: Routes = [
  { path: 'scrollbar', component: ScrollDemoComponent },
  { path: 'normal-list', component: NormalListComponent }
  ];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
