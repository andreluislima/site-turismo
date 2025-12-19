import { Component } from '@angular/core';
import { Vitrine } from "../../../components/vitrine/vitrine";
import { Depoimentos } from "../depoimentos/depoimentos";

@Component({
  selector: 'app-passeios',
  imports: [Vitrine, Depoimentos],
  templateUrl: './passeios.html',
  styleUrl: './passeios.scss',
})
export class Passeios {
  title= "Passeios"
}
