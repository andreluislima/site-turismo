import { Component } from '@angular/core';
import { Depoimentos } from '../depoimentos/depoimentos';
import { BannerTitlePages } from '../../../components/banner-title-pages/banner-title-pages';
import { CommonModule } from '@angular/common';
import { PASSAGENS_NACIONAIS } from '../../../app/data/data.passagens-nacionais';
import { PASSAGENS_INTERNACIONAIS } from '../../../app/data/data.passagens-internacionais';
import { CardPassagens } from '../../../components/card-passagens/card-passagens';
import { BtnWhatsapp } from '../../../components/btn-whatsapp/btn-whatsapp';
import { BannerPages } from '../../../app/domain/banner-pages';
import { BANNER_PAGES } from '../../../app/data/data.banner-pages';

@Component({
  selector: 'app-passagens',
  imports: [Depoimentos, BannerTitlePages, CommonModule, CardPassagens, BtnWhatsapp],
  templateUrl: './passagens.html',
  styleUrl: './passagens.scss',
})
export class Passagens {
  banner: BannerPages = BANNER_PAGES.find((banner) => banner.id === 3) ?? {
    id: 5,
    title: 'soluções de viagem',
    img: 'assets/img/banner-tages/banner-geral.svg',
  };
  
  passagem_nacional = PASSAGENS_NACIONAIS;
  passagem_internacional = PASSAGENS_INTERNACIONAIS;
}
