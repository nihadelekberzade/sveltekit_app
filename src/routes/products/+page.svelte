<script>
	import { productsStore } from '../../store/products'
	import ProductList from '$lib/components/ProductList.svelte'
</script>

<svelte:head>
	<title>Products</title>
</svelte:head>

<section>
	<h1 class="text-2xl text-center mb-8 font-bold">All products</h1>
	<ProductList products={$productsStore.products} />
</section>
