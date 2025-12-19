import { Component } from '@angular/core';
import { Depoimentos } from "../depoimentos/depoimentos";
import { Catalogo } from "../catalogo/catalogo";

@Component({
  selector: 'app-pacotes',
  standalone:true,
  imports: [Depoimentos, Catalogo],
  templateUrl: './pacotes.html',
  styleUrl: './pacotes.scss',
})
export class Pacotes {

  title = 'pacotes para viagens'
}
