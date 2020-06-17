import { Empresa } from './../../empresas/empresa/empresa';

export interface Vaga {
id : string;
descricao: string;
descricaoIntegra: string;
idEmpresa: string;
concluida: boolean;
idCandidatoAprovado: string;
idIdCupacao: string;
dataCriacao: Date;
dataAtualizacao: Date;
empresa : Empresa;

    // Id { get; set; }
    // public string Descricao { get; set; }
    // public string DescricaoIntegra { get; set; }
    // public Guid IdEmpresa { get; set; }
    // public Empresa Empresa { get; set; }
    // public bool Concluida { get; set; }
    // public Guid? IdCandidatoAprovado { get; set; }
    // public Candidato Candidato { get; set; }
    // public List<VagaCandidato> VagasCandidato { get; set; }
    // public Guid IdCupacao { get; set; }
    // public Ocupacao Ocupacao { get; set; }
}