import {fetchProducts} from "../../repositories/products";
import {setProducts} from "../../store/products";

export const load = async () => {
  console.log('load')
  const res =  await fetchProducts()
  console.log('res',res)
  setProducts(res)
}