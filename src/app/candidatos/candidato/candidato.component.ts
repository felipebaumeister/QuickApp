import { UserService } from 'src/app/core/user/user.service';
import { User } from './../../core/user/user';
import { CandidatoService } from './candidato.service';
import { Component, OnInit } from '@angular/core';

import { VagaService } from './../../vagas/vaga/vaga.service';
import { Vaga } from './../../vagas/vaga/vaga';
import { Candidato } from './candidato';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-candidato',
  templateUrl: './candidato.component.html',
  styleUrls: ['./candidato.component.css']
})
export class CandidatoComponent implements OnInit {

  vagas: Vaga[] = [];
  vagasAprovadas: Vaga[] = [];
  candidato: Candidato;
  user$: Observable<User>;
  
  constructor(private vagaService: VagaService,
    private candidatoService: CandidatoService,
    private userService: UserService) { 
      this.user$ = userService.getUser();
    }

  ngOnInit() {

    this.vagaService.getVagasDisponiveis()
      .subscribe(vagasDisponiveis => {
        this.vagas = vagasDisponiveis;
      },
        err => console.error(err))

        if(!this.candidatoService.exists()){
        this.user$.subscribe((user) => {    
          this.candidatoService.getByIdUser(user.id).subscribe((candidado) => {
            const newCadidado = candidado as Candidato;
              this.candidatoService.setData(newCadidado);
              this.candidato = newCadidado;
              this.vagaService.getVagasConcluidasByCandidato(newCadidado.id)
              .subscribe(vagasAprovadas => {
                this.vagasAprovadas = vagasAprovadas;
              },
                err => console.error(err))

            }, err => console.log(err))
        })
      }else{
        this.candidato = this.candidatoService.getData();
        this.vagaService.getVagasConcluidasByCandidato(this.candidato.id)
        .subscribe(vagasAprovadas => {
          this.vagasAprovadas = vagasAprovadas;
        },
          err => console.error(err))
      }
  }
}
