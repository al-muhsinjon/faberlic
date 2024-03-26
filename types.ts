export interface Categories {
  id: number;
  translations: {
    ru: {
      name: string;
      description: string;
      tag: string;
      short_description: string;
    };
    en: {
      name: string;
      description: string;
      tag: string;
      short_description: string;
    };
    uz: {
      name: string;
      description: string;
      tag: string;
      short_description: string;
    };
  };
  image: string;
  is_active: boolean;
}

export interface Products {
  id: number;
  translations: {
    ru: {
      name: string;
      description: string;
      tag: string;
      short_description: string;
    };
    en: {
      name: string;
      description: string;
      tag: string;
      short_description: string;
    };
    uz: {
      name: string;
      description: string;
      tag: string;
      short_description: string;
    };
  };
  product_reviews: [];
  average_rating: number;
  price: number;
  category: {
    id: number;
    translations: {
      ru: { name: string };
      en: { name: string };
      uz: { name: string };
    };
    is_active: boolean;
    category: number;
  };
  images: [
    {
      id: number;
      image: string;
      product: number;
    }
  ];
  created_at: Date;
  updated_at: Date;
  is_featured: boolean;
  related_products: [];
}
[];

export interface Datas {
  id: number;
  title: string;
  src: string;
}
