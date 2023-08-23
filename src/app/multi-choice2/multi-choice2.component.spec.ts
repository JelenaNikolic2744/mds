import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiChoice2Component } from './multi-choice2.component';

describe('MultiChoice2Component', () => {
  let component: MultiChoice2Component;
  let fixture: ComponentFixture<MultiChoice2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MultiChoice2Component]
    });
    fixture = TestBed.createComponent(MultiChoice2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
