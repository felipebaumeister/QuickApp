import { Vaga } from './../vaga/vaga';
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { VagaService } from '../vaga/vaga.service';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { VagaSearch } from '../vaga/vaga-search';

@Component({
  selector: 'app-vaga-list',
  templateUrl: './vaga-list.component.html',
  styleUrls: ['./vaga-list.component.css']
})
export class VagaListComponent implements OnInit {

  @Input()  vagas : Vaga[] = [];
  filter: string = '';
  vagaFiltroForm: FormGroup;
  
  hasMore: boolean = true;
  currentPage: number = 1;
  userName: string = '';

  constructor(
    private activatedRoute: ActivatedRoute, 
    private vagaService : VagaService,
    private formBuilder: FormBuilder) {}
  
  ngOnInit() : void {

     this.vagas = this.activatedRoute.snapshot.data.vagas;

     this.vagaFiltroForm = this.formBuilder.group({
      titulo: [``],
      descricao: ['']
    });
  }

  load () {

    this.
    vagaService.listFromFilter()
    .subscribe(vagas => {
      this.filter = '';
      this.vagas = this.vagas.concat(vagas);

      if(!vagas.length) this.hasMore = false;
    })
  }

  buscasVagas() {
    const vagaSearch = this.vagaFiltroForm.getRawValue() as VagaSearch;

    this.vagaService.listFromVagaSearch(vagaSearch).subscribe(vagas => {

      this.vagas = vagas;

      if(!vagas.length) this.hasMore = false;
    })
  }
  
  limpar() {
    this.vagaFiltroForm.reset()
    this.load();
  }

}
