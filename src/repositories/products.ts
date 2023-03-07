import axios from "axios";
import type {IProduct} from "../store/products";

export const fetchProducts = async () => {
  try {
    const res = await axios.get('https://dummyjson.com/products')
    return res.data
  }
  catch (e) {
    console.log('fetchProducts error',e)
    return {
      products: [],
      total: 0,
      skip:0,
      limit:0
    }
  }
}
export const fetchSingleProduct = async (productId:string)  => {
  try {
    const res = await axios.get(`https://dummyjson.com/products/${productId}`)
    return res.data
  }
  catch (e) {
    console.log('fetchProducts error',e)
    return {}
  }
}