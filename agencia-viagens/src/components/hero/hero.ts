import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TesteCarrosel } from "../teste-carrosel/teste-carrosel";
import { CarroselHero } from "../carrosel-hero/carrosel-hero";

@Component({
  selector: 'app-hero',
  imports: [CommonModule, TesteCarrosel, CarroselHero],
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
