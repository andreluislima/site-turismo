import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CarouselModule } from 'primeng/carousel';

@Component({
  selector: 'app-carrossel-depoimentos',
  standalone: true,
  imports: [CarouselModule, ButtonModule, CommonModule],
  templateUrl: './carrossel-depoimentos.html',
  styleUrl: './carrossel-depoimentos.scss',
})
export class CarrosselDepoimentos implements OnInit{

    title = "Depoimentos"
    responsiveOptions: any[] = [];

  slides = [
    { img: 'assets/img/depoimentos/1.svg' },
    { img: 'assets/img/depoimentos/2.svg' },
    { img: 'assets/img/depoimentos/3.svg' },
    { img: 'assets/img/depoimentos/4.svg' },
    { img: 'assets/img/depoimentos/5.svg' },

   ];

  ngOnInit(): void {
    this.responsiveOptions = [
      { breakpoint: '1400px', numVisible: 1, numScroll: 1 },
      { breakpoint: '1199px', numVisible: 1, numScroll: 1 },
      { breakpoint: '767px',  numVisible: 1, numScroll: 1 },
      { breakpoint: '575px',  numVisible: 1, numScroll: 1 }
    ];
  }
}

