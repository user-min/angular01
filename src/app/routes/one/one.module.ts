import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OneRoutingModule } from './one-routing.module';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import {NzDatePickerModule, NzTimePickerModule} from 'ng-zorro-antd';
import {FormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    FirstComponent,
    SecondComponent
  ],
  imports: [
    CommonModule,
    OneRoutingModule,
    NzDatePickerModule,
    FormsModule,
    NzTimePickerModule
  ]
})
export class OneModule { }
