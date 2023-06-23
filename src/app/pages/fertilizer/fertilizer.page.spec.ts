import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FertilizerPage } from './fertilizer.page';

describe('FertilizerPage', () => {
  let component: FertilizerPage;
  let fixture: ComponentFixture<FertilizerPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(FertilizerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
