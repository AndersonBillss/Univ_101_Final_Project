import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContinuingPastGraduationComponent } from './continuing-past-graduation.component';

describe('ContinuingPastGraduationComponent', () => {
  let component: ContinuingPastGraduationComponent;
  let fixture: ComponentFixture<ContinuingPastGraduationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContinuingPastGraduationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContinuingPastGraduationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
