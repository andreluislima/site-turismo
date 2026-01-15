import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Card } from '../card/card';
import { VitrineOpenEvent, VitrineTipo } from '../../app/domain/vitrine-base';
import { CardItem } from '../../app/domain/carditem';

@Component({
  selector: 'app-vitrine',
  standalone: true,
  imports: [Card, CommonModule],
  templateUrl: './vitrine.html',
  styleUrl: './vitrine.scss',
})
export class Vitrine {
  @Input({ required: true }) items: CardItem[] = [];
  @Input({ required: true }) tipo!: VitrineTipo;

  @Output() open = new EventEmitter<VitrineOpenEvent>();

  abrir(item: CardItem) {
    this.open.emit({ id: item.id, tipo: this.tipo });
  }

  trackById = (_: number, item: CardItem) => item.id;
}
