import { Component } from '@angular/core';
import { Vitrine } from "../../../components/vitrine/vitrine";
import { Depoimentos } from "../depoimentos/depoimentos";


@Component({
  selector: 'app-pacotes',
  standalone:true,
  imports: [Vitrine, Depoimentos],
  templateUrl: './pacotes.html',
  styleUrl: './pacotes.scss',
})
export class Pacotes {

  title = 'pacotes para viagens'
}
