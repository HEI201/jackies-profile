import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LifeShowComponent } from './life-show.component';

describe('LifeShowComponent', () => {
  let component: LifeShowComponent;
  let fixture: ComponentFixture<LifeShowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LifeShowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LifeShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
