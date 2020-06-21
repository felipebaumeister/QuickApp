import { VagaCandidato } from './../../candidatos/vaga-candidato/vaga-candidato';
import { Ocupacao } from './../../ocupacao/ocupacao';
import { Empresa } from './../../empresas/empresa/empresa';

export interface Vaga {
id : string;
descricao: string;
descricaoIntegra: string;
idEmpresa: string;
concluida: boolean;
idCandidatoAprovado: string;
dataCriacao: string;
dataAtualizacao: string;
empresa : Empresa;
idCupacao: string;
ocupacao: Ocupacao;
vagasCandidato: VagaCandidato[]

    // Id { get; set; }
    // public string Descricao { get; set; }
    // public string DescricaoIntegra { get; set; }
    // public Guid IdEmpresa { get; set; }
    // public Empresa Empresa { get; set; }
    // public bool Concluida { get; set; }
    // public Guid? IdCandidatoAprovado { get; set; }
    // public Candidato Candidato { get; set; }
    // public List<VagaCandidato> VagasCandidato { get; set; }

}