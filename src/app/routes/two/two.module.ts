import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TwoRoutingModule } from './two-routing.module';
import { TwoFirstComponent } from './two-first/two-first.component';
import { TwoSecondComponent } from './two-second/two-second.component';
import {NgZorroAntdModule, NzButtonModule} from "ng-zorro-antd";
import { TwoThirdComponent } from './two-third/two-third.component';


@NgModule({
  declarations: [
    TwoFirstComponent,
    TwoSecondComponent,
    TwoThirdComponent
  ],
  imports: [
    CommonModule,
    TwoRoutingModule,
    NzButtonModule,
    NgZorroAntdModule
  ]
})
export class TwoModule { }
