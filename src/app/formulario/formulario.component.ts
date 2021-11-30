import { Component, OnInit } from '@angular/core';
import { CountryNumber } from '../Pipes/CountryNumber';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  ciudades:any;
  codigos:any;
  telefonos:any;

  constructor() {
    this.ciudades="";
    this.codigos="";
    this.telefonos="";


  }

  ngOnInit(): void {
  }
}
