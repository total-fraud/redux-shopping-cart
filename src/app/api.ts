export interface Product {
  id: string;
  name: string;
  price: number;
  imageURL: string;

}

export async function getProducts(): Promise<Product[]> {
  const results = await fetch("/products.json")
  return results.json()
}



