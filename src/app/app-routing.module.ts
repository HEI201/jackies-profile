import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
	{
		path: '',
		pathMatch: 'full',
		redirectTo: '/welcome'
	},
	{
		path: 'welcome',
		loadChildren: () => import('./pages/welcome/welcome.module').then((m) => m.WelcomeModule)
	},
	{
		path: 'life',
		loadChildren: () => import('./pages/life/life.module').then((m) => m.LifeModule)
	},
	{
		path: 'work',
		loadChildren: () => import('./pages/work/work.module').then((m) => m.WorkModule)
	},
	{
		path: 'contact',
		loadChildren: () => import('./pages/contact/contact.module').then((m) => m.ContactModule)
	},
	{
		path: 'about',
		loadChildren: () => import('./pages/about/about.module').then((m) => m.AboutModule)
	}
];

@NgModule({
	imports: [ RouterModule.forRoot(routes) ],
	exports: [ RouterModule ]
})
export class AppRoutingModule {}
