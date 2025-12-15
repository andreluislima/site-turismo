import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PASSEIOS } from '../../../app/data/data.passeios';
import { Card } from "../../../components/card/card";

@Component({
  selector: 'app-catalogo',
  imports: [CommonModule, Card],
  templateUrl: './catalogo.html',
  styleUrl: './catalogo.scss',
})
export class Catalogo {
 passeios = PASSEIOS;
}
