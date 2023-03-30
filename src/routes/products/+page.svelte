<svelte:head>
	<title>Products</title>
</svelte:head>

<script>
	import { productsStore } from '../../store/products.ts';
	import ProductList from '$lib/components/ProductList.svelte';
</script>

<section>
	<h1>All Products</h1>
	<ProductList products={$productsStore.products} />
</section>
