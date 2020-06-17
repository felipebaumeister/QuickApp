import { Vaga } from './../../vaga/vaga';
import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-vagas',
  templateUrl: './vagas.component.html',
  styleUrls: ['./vagas.component.css']
})
export class VagasComponent implements OnChanges {

  @Input() vagas: Vaga[] = [];
  rows: any[] = [];

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    if(changes.vagas)
    this.rows = this.groupColumns(this.vagas);
  }

  groupColumns(vagas: Vaga[]){
    const newRows = [];
    for(let index =0; index < this.vagas.length; index+=3) {
      newRows.push(vagas.slice(index, index + 3))
 }
    return newRows;
}
}
