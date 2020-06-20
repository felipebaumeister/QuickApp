import { OcupacaoModule } from './ocupacao.module';

describe('OcupacaoModule', () => {
  let ocupacaoModule: OcupacaoModule;

  beforeEach(() => {
    ocupacaoModule = new OcupacaoModule();
  });

  it('should create an instance', () => {
    expect(ocupacaoModule).toBeTruthy();
  });
});
