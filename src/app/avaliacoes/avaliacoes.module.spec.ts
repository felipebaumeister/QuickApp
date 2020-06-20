import { AvaliacoesModule } from './avaliacoes.module';

describe('AvaliacoesModule', () => {
  let avaliacoesModule: AvaliacoesModule;

  beforeEach(() => {
    avaliacoesModule = new AvaliacoesModule();
  });

  it('should create an instance', () => {
    expect(avaliacoesModule).toBeTruthy();
  });
});
