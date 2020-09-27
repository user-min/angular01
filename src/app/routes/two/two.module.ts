import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TwoRoutingModule } from './two-routing.module';
import { TwoFirstComponent } from './two-first/two-first.component';
import { TwoSecondComponent } from './two-second/two-second.component';


@NgModule({
  declarations: [TwoFirstComponent, TwoSecondComponent],
  imports: [
    CommonModule,
    TwoRoutingModule
  ]
})
export class TwoModule { }
