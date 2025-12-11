// src/app/domain/product.ts
export interface Product {
  id?: string;
  name?: string;
  description?: string;
  price?: number;
  quantity?: number;
  inventoryStatus?: 'INSTOCK' | 'LOWSTOCK' | 'OUTOFSTOCK';
  category?: string;
  image?: string;
  rating?: number;
}
