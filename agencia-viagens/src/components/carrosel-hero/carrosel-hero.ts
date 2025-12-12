import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { Carousel } from "primeng/carousel";

@Component({
  selector: 'app-carrosel-hero',
  standalone: true,
  imports: [Carousel, CommonModule, ButtonModule],
  templateUrl: './carrosel-hero.html',
  styleUrl: './carrosel-hero.scss',
})
export class CarroselHero implements OnInit {

 responsiveOptions: any[] = [];

  slides = [
    { img: 'assets/img/banner-teste.svg' },
    { img: 'assets/img/banner-teste.svg' },
    { img: 'assets/img/banner-teste.svg' }
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
