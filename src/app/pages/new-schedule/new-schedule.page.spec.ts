import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NewSchedulePage } from './new-schedule.page';

describe('NewSchedulePage', () => {
  let component: NewSchedulePage;
  let fixture: ComponentFixture<NewSchedulePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(NewSchedulePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
