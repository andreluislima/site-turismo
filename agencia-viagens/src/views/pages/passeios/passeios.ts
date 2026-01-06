import { Component } from '@angular/core';
import { Vitrine } from "../../../components/vitrine/vitrine";
import { Depoimentos } from "../depoimentos/depoimentos";
import { BannerTitlePages } from "../../../components/banner-title-pages/banner-title-pages";
import { BtnWhatsapp } from "../../../components/btn-whatsapp/btn-whatsapp";

@Component({
  selector: 'app-passeios',
  imports: [Vitrine, Depoimentos, BannerTitlePages, BtnWhatsapp],
  templateUrl: './passeios.html',
  styleUrl: './passeios.scss',
})
export class Passeios {
  title= "Passeios"
}
