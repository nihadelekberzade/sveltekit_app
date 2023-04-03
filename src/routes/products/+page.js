import { getProducts, setProducts } from '../../store/products'

export const load = async () => {
	const res = await getProducts()
	setProducts(res)
}
