import { Injectable } from '@angular/core';
import { expStru } from './work-exp-data-struct';
import { exps } from './work-exp-data';
import { Observable, of } from 'rxjs';
@Injectable({
	providedIn: 'root'
})
export class WorkExpService {
	constructor() {}
	getWorkExps(): Observable<expStru[]> {
		return of(exps);
	}
}
