import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HarvestPage } from './harvest.page';

describe('HarvestPage', () => {
  let component: HarvestPage;
  let fixture: ComponentFixture<HarvestPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(HarvestPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
