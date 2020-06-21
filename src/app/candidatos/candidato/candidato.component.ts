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
  cadidato: Candidato;
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

        this.user$.subscribe((user) => {    
          this.candidatoService.getByIdUser(user.id).subscribe((cadidado) => {
            const newCadidado = cadidado as Candidato;
              this.candidatoService.setData(newCadidado);
            }, err => console.log(err))
        })
  }
}
