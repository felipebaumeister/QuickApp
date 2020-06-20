import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AvaliacaoCandidatoComponent } from './avaliacao-candidato.component';

describe('AvaliacaoCandidatoComponent', () => {
  let component: AvaliacaoCandidatoComponent;
  let fixture: ComponentFixture<AvaliacaoCandidatoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AvaliacaoCandidatoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AvaliacaoCandidatoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
