import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LandPreperationPage } from './land-preperation.page';

describe('LandPreperationPage', () => {
  let component: LandPreperationPage;
  let fixture: ComponentFixture<LandPreperationPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(LandPreperationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
