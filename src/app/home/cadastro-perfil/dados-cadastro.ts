import { User } from './../../core/user/user';

export interface DadosCadastro {
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
    IdUsuario: string;
    usuario: User;
}




//adicionar

// public List<AvaliacaoEmpresa> AvaliacoesEmpresa { get; set; }
// public List<AvaliacaoCandidato> AvaliacoesCandidato { get; set; }