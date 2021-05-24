import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LifeShowComponent } from './life-show/life-show.component';
const routes: Routes = [
	{
		path: '',
		component: LifeShowComponent
	}
];

@NgModule({
	imports: [ RouterModule.forChild(routes) ],
	exports: [ RouterModule ]
})
export class LifeRoutingModule {}
