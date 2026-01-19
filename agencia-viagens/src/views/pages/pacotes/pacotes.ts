import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Vitrine } from '../../../components/vitrine/vitrine';
import { Depoimentos } from '../depoimentos/depoimentos';
import { BannerTitlePages } from '../../../components/banner-title-pages/banner-title-pages';
import { BtnWhatsapp } from '../../../components/btn-whatsapp/btn-whatsapp';
import { VitrineOpenEvent } from '../../../app/domain/vitrine-base';
import { PACOTES } from '../../../app/data/data.pacotes';
import { BannerPages } from '../../../app/domain/banner-pages';
import { BANNER_PAGES } from '../../../app/data/data.banner-pages';

@Component({
  selector: 'app-pacotes',
  standalone: true,
  imports: [Vitrine, Depoimentos, BannerTitlePages, BtnWhatsapp],
  templateUrl: './pacotes.html',
  styleUrl: './pacotes.scss',
})
export class Pacotes {
  pacotes = PACOTES;

  banner: BannerPages = BANNER_PAGES.find((banner) => banner.id === 1) ?? {
    id: 5,
    title: 'pacotes de viagem',
    img: 'assets/img/banner-tages/banner-geral.svg',
  };

  constructor(private router: Router) {}

  onOpen(event: VitrineOpenEvent) {
    this.router.navigate(['/pacotes', event.id]);
  }
}
