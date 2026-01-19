import { Component } from '@angular/core';
import { Vitrine } from '../../../components/vitrine/vitrine';
import { Depoimentos } from '../depoimentos/depoimentos';
import { BannerTitlePages } from '../../../components/banner-title-pages/banner-title-pages';
import { BtnWhatsapp } from '../../../components/btn-whatsapp/btn-whatsapp';
import { Router } from '@angular/router';
import { VitrineOpenEvent } from '../../../app/domain/vitrine-base';
import { PASSEIOS } from '../../../app/data/data.passeios';
import { BannerPages } from '../../../app/domain/banner-pages';
import { BANNER_PAGES } from '../../../app/data/data.banner-pages';

@Component({
  selector: 'app-passeios',
  imports: [Vitrine, Depoimentos, BannerTitlePages, BtnWhatsapp],
  standalone: true,
  templateUrl: './passeios.html',
  styleUrl: './passeios.scss',
})
export class Passeios {
  banner: BannerPages = BANNER_PAGES.find((banner) => banner.id === 2) ?? {
    id: 5,
    title: 'soluções de viagem',
    img: 'assets/img/banner-tages/banner-geral.svg',
  };
  
  passeios = PASSEIOS;
  constructor(private router: Router) {}

  onOpen(event: VitrineOpenEvent) {
    this.router.navigate(['/passeios', event.id]);
  }
}
