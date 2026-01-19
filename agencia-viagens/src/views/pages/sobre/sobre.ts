import { Component } from '@angular/core';
import { Depoimentos } from '../depoimentos/depoimentos';
import { BannerTitlePages } from '../../../components/banner-title-pages/banner-title-pages';
import { BtnWhatsapp } from '../../../components/btn-whatsapp/btn-whatsapp';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { BANNER_PAGES } from '../../../app/data/data.banner-pages';
import { BannerPages } from '../../../app/domain/banner-pages';

@Component({
  selector: 'app-sobre',
  imports: [Depoimentos, BannerTitlePages, BtnWhatsapp],
  templateUrl: './sobre.html',
  styleUrl: './sobre.scss',
})
export class Sobre {
  banner: BannerPages = BANNER_PAGES.find(banner => banner.id === 5)??{
    id:5,
    title:'sobre',
    img:'assets/img/banner-tages/banner-modelo-02.svg'
  }
  
  textoHtml: SafeHtml;
  constructor(private sanitizer: DomSanitizer) {
    const html = `
       <p>Olá, eu sou a Thayná.</p>
       <p>Sou movida por um desejo simples e poderoso: transformar sonhos em destinos.</p>

      <p>Acredito que viajar é uma das experiências mais ricas que alguém pode viver — é pausa, descoberta, encontro, inspiração.</p>

      <p>Nasceu assim a minha agência: da paixão por criar jornadas que fazem brilhar os olhos, conectar pessoas ao mundo e tornar cada viagem única. Aqui, cada roteiro é pensado com carinho, cada detalhe importa e cada cliente é tratado como alguém que está prestes a viver algo especial.</p>

      <p>
        Minha missão é <strong>facilitar a sua experiência</strong>, oferecer <strong>segurança, praticidade</strong> e um atendimento humano — daquele que entende o que você busca, mesmo quando você ainda não sabe exatamente para onde quer ir.
        <br>
        Seja para relaxar, explorar, celebrar ou simplesmente fugir da rotina, estamos ao seu lado em cada passo.
      </p>

      <p>Porque viajar não é apenas ir — é sentir, viver e voltar diferente.</p>

      <p><strong>Seu próximo capítulo começa aqui. ✈️✨</strong></p>
    `;

    this.textoHtml = this.sanitizer.bypassSecurityTrustHtml(html);
  }
}
