import { VagaCandidato } from './../../candidatos/vaga-candidato/vaga-candidato';
import { Ocupacao } from './../../ocupacao/ocupacao';
import { Empresa } from './../../empresas/empresa/empresa';

export interface Vaga {
id : string;
titulo: string;
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
tipoContratacao: string;
duracao: number;
valor: number;
dataInicio: string;
dataFim: string;
cidade: string;
estado: string;
}