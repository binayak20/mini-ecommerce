export interface Billboard {
  id: string;
  label: string;
  imageUrl: string;
}

export interface Category {
  id: string;
  name: string;
}
export interface Product {
  id: string;
  category: string;
  title: string;
  description: string;
  price: string;
  image: string;
}
export interface Image {
  id?: string;
  image?: string;
}
