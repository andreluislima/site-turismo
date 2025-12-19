import { Component } from '@angular/core';
import { Vitrine } from "../../../components/vitrine/vitrine";
import { Depoimentos } from "../depoimentos/depoimentos";

@Component({
  selector: 'app-solucoes-viagens',
  imports: [Vitrine, Depoimentos],
  templateUrl: './solucoes-viagens.html',
  styleUrl: './solucoes-viagens.scss',
})
export class SolucoesViagens {
  title = "Soluções de viagens"
}
