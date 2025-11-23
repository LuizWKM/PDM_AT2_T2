// Interface para avaliação do produto
export interface Rating {
  rate: number;
  count: number;
}

// Interface para produto
export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: Rating;
}
