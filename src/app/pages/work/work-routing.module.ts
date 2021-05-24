import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WorkOverviewComponent } from './work-overview/work-overview.component';
import { WorkExpComponent } from './work-exp/work-exp.component';
import { WorkPortfolioComponent } from './work-portfolio/work-portfolio.component';
const routes: Routes = [
	{
		path: '',
		component: WorkOverviewComponent,
		children:
			[
				{ path: 'workExp', component: WorkExpComponent },
				{ path: 'workPortfolio', component: WorkPortfolioComponent }
			]
	}
];

@NgModule({
	imports: [ RouterModule.forChild(routes) ],
	exports: [ RouterModule ]
})
export class WorkRoutingModule {}
