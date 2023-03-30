import { axiosInstance } from '../axiosInstance'
import { AxiosInstanceClass } from '../classes/AxiosInstance'
import defaultAxiosConfig from '../utils/axiosConfigs/defaultAxios.config'
import type { IProduct } from '../store/products'

export const fetchProducts = async () => {
	try {
		const axiosInstance = new AxiosInstanceClass(defaultAxiosConfig)
		const res = await axiosInstance.axios.get('/products')
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
export const fetchSingleProduct = async (productId: string): Promise<IProduct | null> => {
	try {
		const res = await axiosInstance.get(`/products/${productId}`)
		return res.data
	} catch (e) {
		console.log('fetchSingleProduct error', e)
		return null
	}
}
