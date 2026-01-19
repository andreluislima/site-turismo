import { Component } from '@angular/core';
import { Depoimentos } from '../depoimentos/depoimentos';
import { BannerTitlePages } from '../../../components/banner-title-pages/banner-title-pages';
import { BtnWhatsapp } from '../../../components/btn-whatsapp/btn-whatsapp';
import { BannerPages } from '../../../app/domain/banner-pages';
import { BANNER_PAGES } from '../../../app/data/data.banner-pages';

@Component({
  selector: 'app-solucoes-viagens',
  imports: [Depoimentos, BannerTitlePages, BtnWhatsapp],
  templateUrl: './solucoes-viagens.html',
  styleUrl: './solucoes-viagens.scss',
})
export class SolucoesViagens {
  banner: BannerPages = BANNER_PAGES.find((banner) => banner.id === 2) ?? {
    id: 5,
    title: 'soluções de viagem',
    img: 'assets/img/banner-tages/banner-geral.svg',
  };
}
