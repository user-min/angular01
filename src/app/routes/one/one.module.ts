import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OneRoutingModule } from './one-routing.module';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import {NzDatePickerModule} from "ng-zorro-antd";


@NgModule({
  declarations: [
    FirstComponent,
    SecondComponent
  ],
  imports: [
    CommonModule,
    OneRoutingModule,
    NzDatePickerModule
  ]
})
export class OneModule { }
