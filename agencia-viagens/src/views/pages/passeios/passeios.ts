import { Component } from '@angular/core';
import { Vitrine } from "../../../components/vitrine/vitrine";
import { Depoimentos } from "../depoimentos/depoimentos";
import { BannerTitlePages } from "../../../components/banner-title-pages/banner-title-pages";
import { BtnWhatsapp } from "../../../components/btn-whatsapp/btn-whatsapp";
import { Router } from '@angular/router';
import { VitrineOpenEvent } from '../../../app/domain/vitrine-base';
import { PASSEIOS } from '../../../app/data/data.passeios';

@Component({
  selector: 'app-passeios',
  imports: [Vitrine, Depoimentos, BannerTitlePages, BtnWhatsapp],
  standalone:true,
  templateUrl: './passeios.html',
  styleUrl: './passeios.scss',
})
export class Passeios {
  title= "Passeios"
  passeios = PASSEIOS;
  constructor(private router:Router){}

  onOpen(event: VitrineOpenEvent){
    this.router.navigate(['/passeios', event.id])
  }
}
