import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NovoCandidatoComponent } from './novo-candidato.component';

describe('NovoCandidatoComponent', () => {
  let component: NovoCandidatoComponent;
  let fixture: ComponentFixture<NovoCandidatoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NovoCandidatoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NovoCandidatoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
