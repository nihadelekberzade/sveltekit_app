import axios from "axios";

export const fetchCart = async () => {
    try {
        const res = await axios.get('https://dummyjson.com/products')
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
        const res = await axios.get(`https://dummyjson.com/products/${productId}`)
        return res.data
    } catch (e) {
        console.log('fetchProducts error', e)
        return {}
    }
}
