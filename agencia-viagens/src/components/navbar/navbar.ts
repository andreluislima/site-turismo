import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Toggle } from "../toggle/toggle";
import { RouterLink, RouterLinkActive } from "@angular/router";
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [CommonModule, Toggle, RouterLink, RouterLinkActive,RouterModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
})
export class Navbar {

  isMenuOpen = false;

  toggleMenu(){
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenu(){
    this.isMenuOpen = false;
  }
  
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
      "item": "passeios & experiencias",
      "img": "assets/img/icons/navbar/icons-mundo.png"
    },
    {
      "item": "sobre",
      "img": "assets/img/icons/navbar/icons-pessoa.png"
    },
     
  ];
}
