import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppBuildingComponent } from './app-building.component';

describe('AppBuildingComponent', () => {
  let component: AppBuildingComponent;
  let fixture: ComponentFixture<AppBuildingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppBuildingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppBuildingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
