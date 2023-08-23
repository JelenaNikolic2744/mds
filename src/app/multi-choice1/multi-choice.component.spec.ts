import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiChoiceComponent } from './multi-choice.component';

describe('MultiChoiceComponent', () => {
  let component: MultiChoiceComponent;
  let fixture: ComponentFixture<MultiChoiceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MultiChoiceComponent]
    });
    fixture = TestBed.createComponent(MultiChoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
