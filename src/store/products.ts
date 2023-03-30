import { writable } from 'svelte/store'
import { fetchProducts } from '../repositories/products'

export const productsStore = writable({
	products: [],
	total: 0,
	skip: 0,
	limit: 0
} as IProductsStore)

export interface IProductsStore {
	products: Array<IProduct>
	total: number
	skip: number
	limit: number
}

export interface IProduct {
	id: number
	title: string
	description: string
	price: number
	rating: number
	stock: number
	brand: string
	category: string
	thumbnail: string
	images: Array<string>
}

export const setProducts = (products: IProductsStore) => {
	productsStore.set(products)
}

export const getProducts = async () => {
	return await fetchProducts()
}
