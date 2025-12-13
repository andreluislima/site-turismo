import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { PACOTES } from '../../app/data/data.pacotes';
import { PacotesCard } from '../../app/domain/cards.pacotes';

@Component({
  selector: 'app-card',
  imports: [CommonModule],
  templateUrl: './card.html',
  styleUrl: './card.scss',
})
export class Card {

  pacotes: PacotesCard[] = PACOTES;
}
