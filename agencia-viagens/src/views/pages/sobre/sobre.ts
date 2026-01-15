import { Component } from '@angular/core';
import { Depoimentos } from "../depoimentos/depoimentos";
import { BannerTitlePages } from "../../../components/banner-title-pages/banner-title-pages";
import { BtnWhatsapp } from "../../../components/btn-whatsapp/btn-whatsapp";

@Component({
  selector: 'app-sobre',
  imports: [Depoimentos, BannerTitlePages, BtnWhatsapp],
  templateUrl: './sobre.html',
  styleUrl: './sobre.scss',
})
export class Sobre {
  title="Sobre"
}
