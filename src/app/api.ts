export interface Product {
  id: string;
  name: string;
  price: number;
  imageURL: string;

}
//fetching json dummy
export async function getProducts(): Promise<Product[]> {
  const results = await fetch("/products.json")
  return results.json()
}



