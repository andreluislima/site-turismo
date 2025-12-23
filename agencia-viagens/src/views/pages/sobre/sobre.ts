import { Component } from '@angular/core';
import { Vitrine } from "../../../components/vitrine/vitrine";
import { Depoimentos } from "../depoimentos/depoimentos";
import { BannerTitlePages } from "../../../components/banner-title-pages/banner-title-pages";

@Component({
  selector: 'app-sobre',
  imports: [Vitrine, Depoimentos, BannerTitlePages],
  templateUrl: './sobre.html',
  styleUrl: './sobre.scss',
})
export class Sobre {
  title="Sobre"
}
