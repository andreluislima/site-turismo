import { Component } from '@angular/core';
import { Depoimentos } from "../depoimentos/depoimentos";
import { BannerTitlePages } from "../../../components/banner-title-pages/banner-title-pages";
import { BtnWhatsapp } from "../../../components/btn-whatsapp/btn-whatsapp";

@Component({
  selector: 'app-solucoes-viagens',
  imports: [Depoimentos, BannerTitlePages, BtnWhatsapp],
  templateUrl: './solucoes-viagens.html',
  styleUrl: './solucoes-viagens.scss',
})
export class SolucoesViagens {
  title = "Soluções de viagens"
}
