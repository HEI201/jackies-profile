import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WorkRoutingModule } from './work-routing.module';
import { WorkExpComponent } from './work-exp/work-exp.component';
import { WorkPortfolioComponent } from './work-portfolio/work-portfolio.component';
import { WorkOverviewComponent } from './work-overview/work-overview.component';


@NgModule({
  declarations: [WorkExpComponent, WorkPortfolioComponent, WorkOverviewComponent],
  imports: [
    CommonModule,
    WorkRoutingModule
  ]
})
export class WorkModule { }
