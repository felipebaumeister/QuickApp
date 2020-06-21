import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidatoVagaListComponent } from './candidato-vaga-list.component';

describe('CandidatoVagaListComponent', () => {
  let component: CandidatoVagaListComponent;
  let fixture: ComponentFixture<CandidatoVagaListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CandidatoVagaListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CandidatoVagaListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
