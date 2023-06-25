import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LandPreparationPage } from './land-preparation.page';

describe('LandPreperationPage', () => {
  let component: LandPreparationPage;
  let fixture: ComponentFixture<LandPreparationPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(LandPreparationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
