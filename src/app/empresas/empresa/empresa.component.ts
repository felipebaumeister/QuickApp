import { EmpresaService } from './empresa.service';
import { UserService } from 'src/app/core/user/user.service';
import { CandidatoService } from 'src/app/candidatos/candidato/candidato.service';
import { VagaService } from './../../vagas/vaga/vaga.service';
import { User } from './../../core/user/user';
import { Vaga } from './../../vagas/vaga/vaga';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Empresa } from './empresa';

@Component({
  selector: 'app-empresa',
  templateUrl: './empresa.component.html',
  styleUrls: ['./empresa.component.css']
})
export class EmpresaComponent implements OnInit {

  vagas: Vaga[] = [];
  empresa: Empresa;

  user$: Observable<User>;

  constructor(private vagaService: VagaService,
    private candidatoService: CandidatoService,
    private userService: UserService,
    private empresaService: EmpresaService) {
    this.user$ = userService.getUser();
  }

  ngOnInit() {

    if (!this.empresaService.exists()) {
      this.user$.subscribe((user) => {

        this.empresaService.getByIdUser(user.id).subscribe((empresa) => {

          const newEmpresa = empresa as Empresa;
          this.empresaService.setData(newEmpresa);
        }, err => console.log(err))

      })
    } else {
      this.empresa = this.empresaService.getData();
      this.vagaService.getVagasDisponiveisByEmpresa(this.empresa.id)
        .subscribe(vagasDisponiveis => {

          this.vagas = vagasDisponiveis;
        },
          err => console.error(err))
    }

  }

}
