// src/app/service/productservice.ts
import { Injectable } from '@angular/core';
import { Product } from '../domain/product';

@Injectable({
  providedIn: 'root' // você pode manter isso mesmo usando providers no componente
})
export class ProductService {

  // método usado no seu componente
  getProductsSmall(): Promise<Product[]> {
    // aqui eu retorno uma Promise pra bater com o uso:
    // this.productService.getProductsSmall().then(...)
    const data = this.getProductsData();
    return Promise.resolve(data.slice(0, 9));
  }

  // mock de dados
  private getProductsData(): Product[] {
    return [
      {
        id: '1000',
        name: 'Pacote Maragogi',
        description: '3 dias de hospedagem + passeio nas piscinas naturais',
        price: 1200,
        quantity: 10,
        inventoryStatus: 'INSTOCK',
        category: 'Praia',
        image: 'assets/img/pacotes_viagens/al_maragogi.svg',
        rating: 5
      },
      {
        id: '1001',
        name: 'Pacote João Pessoa',
        description: 'Costa do Conde + Litoral Norte + Pôr do sol do Jacaré',
        price: 980,
        quantity: 5,
        inventoryStatus: 'LOWSTOCK',
        category: 'Praia',
        image: 'assets/img/pacotes_viagens/al_maragogi.svg',
        rating: 4
      },
      {
        id: '1002',
        name: 'Pacote Serra',
        description: 'Final de semana na serra com café da manhã incluso',
        price: 750,
        quantity: 0,
        inventoryStatus: 'OUTOFSTOCK',
        category: 'Serra',
        image: 'assets/img/pacotes_viagens/al_maragogi.svg',
        rating: 3
      },
      {
        id: '1000',
        name: 'Pacote Maragogi',
        description: '3 dias de hospedagem + passeio nas piscinas naturais',
        price: 1200,
        quantity: 10,
        inventoryStatus: 'INSTOCK',
        category: 'Praia',
        image: 'assets/img/pacotes_viagens/al_maragogi.svg',
        rating: 5
      },
      {
        id: '1001',
        name: 'Pacote João Pessoa',
        description: 'Costa do Conde + Litoral Norte + Pôr do sol do Jacaré',
        price: 980,
        quantity: 5,
        inventoryStatus: 'LOWSTOCK',
        category: 'Praia',
        image: 'assets/img/pacotes_viagens/al_maragogi.svg',
        rating: 4
      },
      {
        id: '1002',
        name: 'Pacote Serra',
        description: 'Final de semana na serra com café da manhã incluso',
        price: 750,
        quantity: 0,
        inventoryStatus: 'OUTOFSTOCK',
        category: 'Serra',
        image: 'assets/img/pacotes_viagens/al_maragogi.svg',
        rating: 3
      }
      // adicione mais itens se quiser
    ];
  }
}
