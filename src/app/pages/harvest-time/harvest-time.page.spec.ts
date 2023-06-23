import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HarvestTimePage } from './harvest-time.page';

describe('HarvestTimePage', () => {
  let component: HarvestTimePage;
  let fixture: ComponentFixture<HarvestTimePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(HarvestTimePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
