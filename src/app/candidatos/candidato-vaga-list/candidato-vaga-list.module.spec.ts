import { CandidatoVagaListModule } from './candidato-vaga-list.module';

describe('CandidatoVagaListModule', () => {
  let candidatoVagaListModule: CandidatoVagaListModule;

  beforeEach(() => {
    candidatoVagaListModule = new CandidatoVagaListModule();
  });

  it('should create an instance', () => {
    expect(candidatoVagaListModule).toBeTruthy();
  });
});
