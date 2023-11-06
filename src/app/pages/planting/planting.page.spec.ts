import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PlantingPage } from './planting.page';

describe('PlantingPage', () => {
  let component: PlantingPage;
  let fixture: ComponentFixture<PlantingPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PlantingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
