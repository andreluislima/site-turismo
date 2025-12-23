import { Component } from '@angular/core';
import { Vitrine } from "../../../components/vitrine/vitrine";
import { Depoimentos } from "../depoimentos/depoimentos";
import { BannerTitlePages } from "../../../components/banner-title-pages/banner-title-pages";

@Component({
  selector: 'app-passagens',
  imports: [Vitrine, Depoimentos, BannerTitlePages],
  templateUrl: './passagens.html',
  styleUrl: './passagens.scss',
})
export class Passagens {
  title="Passagens"
}
