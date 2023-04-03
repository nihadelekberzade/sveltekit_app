import { writable } from 'svelte/store'
import type { IProduct } from './products'

export const cartStore = writable({
	id: '1',
	products: [],
	totalSum: 0,
	productCount: 0
} as ICartStore)

export interface ICartStore {
	id: string
	products: Array<IProduct>
	totalSum: number
	productCount: number
}

export const setCart = (cart: ICartStore) => {
	cartStore.set(cart)
}

export const addProductToCart = (product: IProduct) => {
	cartStore.update((value: ICartStore) => {
		const newProducts = [...value.products, product]
		const productCount = value.productCount + 1
		return {
			...value,
			products: newProducts,
			productCount
		}
	})
}
export const setTotalSum = (sum: number) => {
	cartStore.update((value: ICartStore) => {
		return {
			...value,
			totalSum: sum
		}
	})
}
