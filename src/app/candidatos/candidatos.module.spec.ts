import { CandidatosModule } from './candidatos.module';

describe('CandidatosModule', () => {
  let candidatosModule: CandidatosModule;

  beforeEach(() => {
    candidatosModule = new CandidatosModule();
  });

  it('should create an instance', () => {
    expect(candidatosModule).toBeTruthy();
  });
});
