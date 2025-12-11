import { Component } from '@angular/core';
import { Navbar } from "../../components/navbar/navbar";
import { Hero } from "../../components/hero/hero";
import { Footer } from "../../components/footer/footer";
import { Destaques } from '../../views/pages/destaques/destaques';
import { Catalogo } from "../../views/pages/catalogo/catalogo";
import { ConteudoComplementar } from "../../views/pages/conteudo-complementar/conteudo-complementar";

@Component({
  selector: 'app-default-layout',
  imports: [Navbar, Hero, Footer, Destaques, Catalogo, ConteudoComplementar],
  templateUrl: './default-layout.html',
  styleUrl: './default-layout.scss',
})
export class DefaultLayout {

}
