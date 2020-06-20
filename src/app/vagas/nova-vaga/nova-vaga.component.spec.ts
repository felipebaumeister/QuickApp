import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NovaVagaComponent } from './nova-vaga.component';

describe('NovaVagaComponent', () => {
  let component: NovaVagaComponent;
  let fixture: ComponentFixture<NovaVagaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NovaVagaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NovaVagaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
