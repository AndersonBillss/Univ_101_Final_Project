import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CampusResourcesComponent } from './campus-resources.component';

describe('CampusResourcesComponent', () => {
  let component: CampusResourcesComponent;
  let fixture: ComponentFixture<CampusResourcesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CampusResourcesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CampusResourcesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
