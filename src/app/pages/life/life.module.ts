import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LifeRoutingModule } from './life-routing.module';
import { LifeShowComponent } from './life-show/life-show.component';


@NgModule({
  declarations: [LifeShowComponent],
  imports: [
    CommonModule,
    LifeRoutingModule
  ]
})
export class LifeModule { }
