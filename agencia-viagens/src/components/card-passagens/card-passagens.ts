import { Component, Input } from '@angular/core';
import { CardItem } from '../../app/domain/carditem';

@Component({
  selector: 'app-card-passagens',
  standalone:true,
  imports: [],
  templateUrl: './card-passagens.html',
  styleUrl: './card-passagens.scss',
})
export class CardPassagens {
  @Input({required:true}) item!:CardItem;
}
