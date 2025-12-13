import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { CardItem } from '../../app/domain/carditem';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card.html',
  styleUrl: './card.scss',
})
export class Card {
  @Input({ required: true }) item!: CardItem;
}
