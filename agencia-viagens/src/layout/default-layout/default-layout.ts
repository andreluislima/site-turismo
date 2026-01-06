import { Component } from '@angular/core';
import { Hero } from "../../components/hero/hero";
import { Destaques } from '../../views/pages/destaques/destaques';
import { Catalogo } from "../../views/pages/catalogo/catalogo";
import { Depoimentos } from "../../views/pages/depoimentos/depoimentos";
import { DicasViagem } from "../../views/pages/dicas-viagem/dicas-viagem";
 

@Component({
  selector: 'app-default-layout',
  imports: [Hero, Destaques, Catalogo, Depoimentos, DicasViagem],
  templateUrl: './default-layout.html',
  styleUrl: './default-layout.scss',
})
export class DefaultLayout {

}
