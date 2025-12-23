import { Component } from '@angular/core';
import { Vitrine } from "../../../components/vitrine/vitrine";
import { Depoimentos } from "../depoimentos/depoimentos";
import { BannerTitlePages } from "../../../components/banner-title-pages/banner-title-pages";

@Component({
  selector: 'app-solucoes-viagens',
  imports: [Vitrine, Depoimentos, BannerTitlePages],
  templateUrl: './solucoes-viagens.html',
  styleUrl: './solucoes-viagens.scss',
})
export class SolucoesViagens {
  title = "Soluções de viagens"
}
