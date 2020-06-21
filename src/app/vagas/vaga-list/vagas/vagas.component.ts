import { Vaga } from './../../vaga/vaga';
import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-vagas',
  templateUrl: './vagas.component.html',
  styleUrls: ['./vagas.component.css']
})
export class VagasComponent {

  @Input() vagas: Vaga[] = [];
  rows: any[] = [];

  constructor() { }

}
