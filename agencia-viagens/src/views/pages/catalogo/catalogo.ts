import { Component } from '@angular/core';
import { Card } from "../../../components/card/card";
import { PACOTES } from '../../../app/data/data.pacotes';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-catalogo',
  imports: [Card,CommonModule],
  templateUrl: './catalogo.html',
  styleUrl: './catalogo.scss',
})
export class Catalogo {
 pacotes = PACOTES;
}
