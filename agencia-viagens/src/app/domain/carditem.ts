export interface CardItem {
  id: number;
  titulo: String;
  cidade: String;
  uf?: String;
  imgBanner: string;
  imgIcon?: string;
  descricao: string;
  saida?: string;
  data?: string;
  incluido?:string;
  preco?: string;
  formaPagamento?:string;
}
