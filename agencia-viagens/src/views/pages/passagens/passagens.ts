import { Component } from '@angular/core';
import { Vitrine } from "../../../components/vitrine/vitrine";
import { Depoimentos } from "../depoimentos/depoimentos";

@Component({
  selector: 'app-passagens',
  imports: [Vitrine, Depoimentos],
  templateUrl: './passagens.html',
  styleUrl: './passagens.scss',
})
export class Passagens {
  title="Passagens"
}
