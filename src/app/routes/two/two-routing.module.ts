import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TwoFirstComponent} from './two-first/two-first.component';
import {TwoSecondComponent} from './two-second/two-second.component';


const routes: Routes = [
  {path: '', redirectTo: 'two-first', pathMatch: 'full'},
  {path: 'two-first', component: TwoFirstComponent},
  {path: 'two-second', component: TwoSecondComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TwoRoutingModule { }
