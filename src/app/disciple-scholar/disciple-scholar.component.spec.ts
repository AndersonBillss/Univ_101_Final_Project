import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscipleScholarComponent } from './disciple-scholar.component';

describe('DiscipleScholarComponent', () => {
  let component: DiscipleScholarComponent;
  let fixture: ComponentFixture<DiscipleScholarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DiscipleScholarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DiscipleScholarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
