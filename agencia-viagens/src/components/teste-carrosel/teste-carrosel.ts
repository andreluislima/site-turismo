import { Component, OnInit } from '@angular/core';
import { CarouselModule } from 'primeng/carousel';
import { ButtonModule } from 'primeng/button';
import { TagModule } from 'primeng/tag';
import { Product } from '../../app/domain/product';
import { ProductService } from '../../app/service/productservice';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-teste-carrosel',
  standalone: true,
  imports: [CarouselModule, ButtonModule, TagModule, CommonModule],
  templateUrl: './teste-carrosel.html',
  styleUrls: ['./teste-carrosel.scss'],
  providers: [ProductService]
})
export class TesteCarrosel implements OnInit {

  products: Product[] = [];             // ✅ agora é sempre array
  responsiveOptions: any[] = [];        // opcional: inicializar também

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productService.getProductsSmall().then(data => {
      this.products = data.slice(0, 9);
    });

    this.responsiveOptions = [
      {
        breakpoint: '1400px',
        numVisible: 2,
        numScroll: 1
      },
      {
        breakpoint: '1199px',
        numVisible: 3,
        numScroll: 1
      },
      {
        breakpoint: '767px',
        numVisible: 2,
        numScroll: 1
      },
      {
        breakpoint: '575px',
        numVisible: 1,
        numScroll: 1
      }
    ];
  }

  getSeverity(status: string | undefined) {
    switch (status) {
      case 'INSTOCK':
        return 'success';
      case 'LOWSTOCK':
        return 'warn';
      case 'OUTOFSTOCK':
        return 'danger';
      default:
        return 'info';
    }
  }
}
