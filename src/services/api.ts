import { ProductItem } from '../libs/types';

interface FakeStoreProduct {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

const BASE_URL = 'https://fakestoreapi.com';

export async function fetchProducts(): Promise<ProductItem[]> {
  try {
    const response = await fetch(`${BASE_URL}/products`);
    if (!response.ok) {
      throw new Error('Failed to fetch products');
    }
    const data: FakeStoreProduct[] = await response.json();
    
    return data.map((product) => ({
      id: product.id,
      name: product.title,
      category: product.category,
      price: product.price,
      image: product.image,
    }));
  } catch (error) {
    console.error('Error fetching products:', error);
    throw error;
  }
}