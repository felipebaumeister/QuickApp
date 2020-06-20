import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AvaliacaoEmpresaComponent } from './avaliacao-empresa.component';

describe('AvaliacaoEmpresaComponent', () => {
  let component: AvaliacaoEmpresaComponent;
  let fixture: ComponentFixture<AvaliacaoEmpresaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AvaliacaoEmpresaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AvaliacaoEmpresaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
