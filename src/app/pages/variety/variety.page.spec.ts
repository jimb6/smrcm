import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VarietyPage } from './variety.page';

describe('VarietyPage', () => {
  let component: VarietyPage;
  let fixture: ComponentFixture<VarietyPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(VarietyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
