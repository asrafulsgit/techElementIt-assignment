import { Product } from "@/interfaces/interface";

export const getProducts = async (): Promise<Product[]> => {
  const res = await fetch('https://fakestoreapi.com/products');
  if (!res.ok) {
    throw new Error('Failed to fetch products');
  }
  const products: Product[] = await res.json();
  return products;
};

export const getProduct = async (id: number): Promise<Product | null> => {
  const res = await fetch(`https://fakestoreapi.com/products/${id}`);
  if (!res.ok) {
    return null;
  }
  const product: Product = await res.json();
  return product;
};
