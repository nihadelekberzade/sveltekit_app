<script>
	import { productsStore } from '../../store/products.ts';
	import ProductList from '../../lib/components/ProductList.svelte';
	import { cartStore } from '../../store/cart.ts';
</script>

<section>
	<h1>Cart Products</h1>
	<ProductList products={$cartStore.products} />
	<h1>All Products</h1>
	<ProductList products={$productsStore.products} />
</section>
