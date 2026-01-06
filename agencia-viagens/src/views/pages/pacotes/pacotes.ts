import { Component } from '@angular/core';
import { Vitrine } from "../../../components/vitrine/vitrine";
import { Depoimentos } from "../depoimentos/depoimentos";
import { BannerTitlePages } from "../../../components/banner-title-pages/banner-title-pages";
import { BtnWhatsapp } from "../../../components/btn-whatsapp/btn-whatsapp";


@Component({
  selector: 'app-pacotes',
  standalone:true,
  imports: [Vitrine, Depoimentos, BannerTitlePages, BtnWhatsapp],
  templateUrl: './pacotes.html',
  styleUrl: './pacotes.scss',
})
export class Pacotes {

  title = 'pacotes para viagens'
}
