import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  imports: [CommonModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
})
export class Navbar {

  navPages = [
    {
      "item": "pacotes",
      "img": "assets/img/icons/navbar/icons-mala.png"
    },
    {
      "item": "soluções de viagem",
      "img": "assets/img/icons/navbar/icons-lampada.png"
    },
    {
      "item": "passagens",
      "img": "assets/img/icons/navbar/icons-ingressos.png"
    },
    {
      "item": "passeios e experiencias",
      "img": "assets/img/icons/navbar/icons-mundo.png"
    },
    {
      "item": "sobre",
      "img": "assets/img/icons/navbar/icons-pessoa.png"
    },
     
  ];
}
