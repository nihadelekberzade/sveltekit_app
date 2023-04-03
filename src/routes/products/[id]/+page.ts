import { fetchSingleProduct } from '../../../repositories/products'

// @ts-ignore
export const load = async ({ params }) => {
	const product = await fetchSingleProduct(params.id)
	return {
		product
	}
}
