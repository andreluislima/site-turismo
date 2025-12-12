import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CarroselHero } from "../carrosel-hero/carrosel-hero";

@Component({
  selector: 'app-hero',
  imports: [CommonModule, CarroselHero],
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
})
export class Hero {

  slides = [
    {
      "img":"assets/img/banner-01.svg"
    },
    {
      "img":"assets/img/banner-02.svg"
    },
    {
      "img":"assets/img/banner-03.svg"
    }
  ]
}
