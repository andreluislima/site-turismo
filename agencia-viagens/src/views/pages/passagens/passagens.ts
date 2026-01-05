import { Component } from '@angular/core';
import { Vitrine } from "../../../components/vitrine/vitrine";
import { Depoimentos } from "../depoimentos/depoimentos";
import { BannerTitlePages } from "../../../components/banner-title-pages/banner-title-pages";
import { Card } from "../../../components/card/card";
import { CommonModule } from '@angular/common';
import { passagensNacionais } from '../../../app/data/data.passagens_nacionais';
import { passagensInternacionais } from '../../../app/data/data.passagens_internacionais';

@Component({
  selector: 'app-passagens',
  imports: [Vitrine, Depoimentos, BannerTitlePages, Card, CommonModule],
  templateUrl: './passagens.html',
  styleUrl: './passagens.scss',
})
export class Passagens {
  title="Passagens"
  passagem_nacional = passagensNacionais
  passagem_internacional = passagensInternacionais
}
