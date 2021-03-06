import { User } from "src/app/core/user/user";

export interface Empresa  {
    id :string;
    nome : string;
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
    site: string;
}

// public Guid Id { get; set; }
// public string Site { get; set; }
// public List<Vaga> Vagas { get; set; }