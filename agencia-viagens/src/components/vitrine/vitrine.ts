import { Component } from '@angular/core';
import { PASSEIOS } from '../../app/data/data.passeios';
import { Card } from "../card/card";
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vitrine',
  imports: [Card, CommonModule],
  templateUrl: './vitrine.html',
  styleUrl: './vitrine.scss',
})
export class Vitrine {
  passeios = PASSEIOS;
  
  constructor (private router: Router){}
  
  abrirDetalhePasseio(item:any){
    this.router.navigate(['/passeios', item.id])
  }
}
