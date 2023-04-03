import { axiosInstance } from '../axiosInstance'

export const fetchCart = async () => {
	try {
		const res = await axiosInstance.get('/cart')
		return res.data
	} catch (e) {
		console.log('fetchProducts error', e)
		return {
			products: [],
			total: 0,
			skip: 0,
			limit: 0
		}
	}
}
export const addProductToCart = async (productId: string) => {
	try {
		const res = await axiosInstance.get(`/products/${productId}`)
		return res.data
	} catch (e) {
		console.log('fetchProducts error', e)
		return {}
	}
}
