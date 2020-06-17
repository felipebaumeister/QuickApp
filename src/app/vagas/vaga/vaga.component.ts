import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-vaga',
  templateUrl: './vaga.component.html',
  styleUrls: ['./vaga.component.css']
})
export class VagaComponent implements OnInit {

  @Input() descricao = '';
  @Input() descricaoIntegra = '';
  @Input() empresaNome = '';


  constructor() { }

  ngOnInit() {
  }

}
