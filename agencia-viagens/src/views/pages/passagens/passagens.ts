import { Component } from '@angular/core';
import { Depoimentos } from "../depoimentos/depoimentos";
import { BannerTitlePages } from "../../../components/banner-title-pages/banner-title-pages";
import { CommonModule } from '@angular/common';
import { passagensNacionais } from '../../../app/data/data.passagens_nacionais';
import { passagensInternacionais } from '../../../app/data/data.passagens_internacionais';
import { CardPassagens } from "../../../components/card-passagens/card-passagens";
import { BtnWhatsapp } from "../../../components/btn-whatsapp/btn-whatsapp";

@Component({
  selector: 'app-passagens',
  imports: [Depoimentos, BannerTitlePages, CommonModule, CardPassagens, BtnWhatsapp],
  templateUrl: './passagens.html',
  styleUrl: './passagens.scss',
})
export class Passagens {
  title="Passagens"
  passagem_nacional = passagensNacionais
  passagem_internacional = passagensInternacionais
}
