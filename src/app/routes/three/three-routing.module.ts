import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ThreeOneComponent} from './three-one/three-one.component';


const routes: Routes = [
  {path: '', redirectTo: 'three-one', pathMatch: 'full'},
  {path: 'three-one', component: ThreeOneComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ThreeRoutingModule { }
