import { Component, OnInit } from '@angular/core';
import { WorkExpService } from '../../../services/work-exp.service';
import { expStru } from '../../../services/work-exp-data-struct';
@Component({
	selector: 'app-work-exp',
	templateUrl: './work-exp.component.html',
	styleUrls: [ './work-exp.component.less' ]
})
export class WorkExpComponent implements OnInit {
	exps: expStru[];
	constructor(private workExpService: WorkExpService) {}
	getExps(): void {
		this.workExpService.getWorkExps().subscribe((exps) => (this.exps = exps));
	}
	ngOnInit(): void {
		this.getExps();
	}
}
