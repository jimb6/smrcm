import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PestDiseasesPage } from './pest-diseases.page';

describe('PestDiseasesPage', () => {
  let component: PestDiseasesPage;
  let fixture: ComponentFixture<PestDiseasesPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PestDiseasesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
