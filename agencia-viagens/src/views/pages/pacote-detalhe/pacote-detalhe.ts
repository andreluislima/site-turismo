import { Component } from '@angular/core';
import { Navbar } from "../../../components/navbar/navbar";
import { ActivatedRoute, Router } from '@angular/router';
import { PACOTES_DETALHES } from '../../../app/data/data.pacote-detalhe';
import { CommonModule } from '@angular/common';
import { Form } from "../../../components/form/form";

@Component({
  selector: 'app-pacote-detalhe',
  imports: [Navbar, CommonModule, Form],
  templateUrl: './pacote-detalhe.html',
  styleUrl: './pacote-detalhe.scss',
})
export class PacoteDetalhe {
  pacote:any;

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ){}

  ngOnInit(){
    const id = Number(this.route.snapshot.paramMap.get('id'));

    this.pacote = PACOTES_DETALHES.find(p => p.id === id);

    if(!this.pacote){
      this.router.navigate(['/pacotes']);
    }
  }
}
