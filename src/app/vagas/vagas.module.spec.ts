import { VagasModule } from './vagas.module';

describe('VagasModule', () => {
  let vagasModule: VagasModule;

  beforeEach(() => {
    vagasModule = new VagasModule();
  });

  it('should create an instance', () => {
    expect(vagasModule).toBeTruthy();
  });
});
