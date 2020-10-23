import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ThreeRoutingModule } from './three-routing.module';
import { ThreeOneComponent } from './three-one/three-one.component';
import {NgZorroAntdModule} from "ng-zorro-antd";


@NgModule({
  declarations: [
    ThreeOneComponent
  ],
  imports: [
    CommonModule,
    ThreeRoutingModule,
    NgZorroAntdModule
  ]
})
export class ThreeModule { }
