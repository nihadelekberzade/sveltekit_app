import {writable} from "svelte/store";

export const productsStore = writable({
  products: [],
  total: 0,
  skip: 0,
  limit: 0
} as IProductsStore)

export interface IProductsStore {
  products: Array<IProduct>,
  total: number,
  skip: number,
  limit: number
}

export interface IProduct {
  id: number,
  title: string,
  description: string,
  price:number,
  rating: number,stock:number,
  brand: string,
  category: string,
  thumbnail:string,
  images: Array<string>
}

export const setProducts = (products : IProductsStore) => {
  console.log(products)
  productsStore.set(products)
}