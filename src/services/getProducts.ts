import { Product } from "@/interfaces/interface";

export const getProducts = async () => {
  const res = await fetch('https://fakestoreapi.com/products');
  if (!res.ok) throw new Error('Failed to fetch products');
  return res.json();
};

export const getProduct = async(id: number): Promise<Product | null> =>{
  const res = await fetch(`https://fakestoreapi.com/products/${id}`)
  if (!res.ok) return null
  return res.json()
}