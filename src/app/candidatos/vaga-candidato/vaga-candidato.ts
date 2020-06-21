import { Vaga } from './../../vagas/vaga/vaga';
import { Candidato } from "../candidato/candidato";


export interface VagaCandidato{
   idCandidato: string;
   Candidato: Candidato;
   idVaga: string;
   Vaga: Vaga;
}