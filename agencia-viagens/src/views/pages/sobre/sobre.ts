import { Component } from '@angular/core';
import { Vitrine } from "../../../components/vitrine/vitrine";
import { Depoimentos } from "../depoimentos/depoimentos";

@Component({
  selector: 'app-sobre',
  imports: [Vitrine, Depoimentos],
  templateUrl: './sobre.html',
  styleUrl: './sobre.scss',
})
export class Sobre {
  title="Sobre"
}
