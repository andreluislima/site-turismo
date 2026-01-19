import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
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
  @Output() open = new EventEmitter<any>();

  onOpen(){
    this.open.emit(this.item);
  }

}
