import { Ocupacao } from './../../ocupacao/ocupacao';
import { User } from './../../core/user/user';

export interface Candidato{
    id: string;
    nome: string;
    sobrenome: string;
    telefoneCelular: string;
    telefoneResidencial: string;
    telefoneComercial: string;
    CEP: string;
    endereco: string;
    numero: number;
    complemento: string;
    CPF_CNPJ: string;
    dataCriacao: string;
    dataAtualizacao: string;
    dataNascimento: string;
    idUsuario: string;
    usuario: User;
    idCupacao: string;
    ocupacao: Ocupacao;
    competencias: string;
}

// public List<VagaCandidato> VagasCandidato { get; set; }
// public List<Vaga> VagasAprovadas { get; set; }