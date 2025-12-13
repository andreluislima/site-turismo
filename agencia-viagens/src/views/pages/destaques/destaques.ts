import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Card } from '../../../components/card/card';
import { PACOTES } from '../../../app/data/data.pacotes';

@Component({
  selector: 'app-destaques',
  standalone: true,
  imports: [CommonModule, Card],
  templateUrl: './destaques.html',
  styleUrl: './destaques.scss',
})
export class Destaques {
  pacotes = PACOTES;
}
