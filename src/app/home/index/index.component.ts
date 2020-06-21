import { VagaService } from './../../vagas/vaga/vaga.service';
import { Vaga } from './../../vagas/vaga/vaga';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  vagas: Vaga[] = [];

  constructor(private vagaService: VagaService) { }

  ngOnInit() {

    this.vagaService.getVagasDisponiveis()
    .subscribe(vagas => this.vagas = vagas)

  }

}
