import { Vaga } from './../vaga/vaga';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { VagaService } from '../vaga/vaga.service';

@Component({
  selector: 'app-vaga-list',
  templateUrl: './vaga-list.component.html',
  styleUrls: ['./vaga-list.component.css']
})
export class VagaListComponent implements OnInit {

  vagas : Vaga[] = [];
  filter: string = '';

  hasMore: boolean = true;
  currentPage: number = 1;
  userName: string = '';

  constructor(
    private activatedRoute: ActivatedRoute, 
    private vagaService : VagaService) {}
  
  ngOnInit() : void {
   //  this.userName = this.activatedRoute.snapshot.params.userName;
     this.vagas = this.activatedRoute.snapshot.data.vagas;

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

}
