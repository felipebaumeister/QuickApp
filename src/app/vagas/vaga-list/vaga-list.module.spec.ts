import { VagaListModule } from './vaga-list.module';

describe('VagaListModule', () => {
  let vagaListModule: VagaListModule;

  beforeEach(() => {
    vagaListModule = new VagaListModule();
  });

  it('should create an instance', () => {
    expect(vagaListModule).toBeTruthy();
  });
});
