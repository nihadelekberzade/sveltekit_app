<script lang="ts">
	import type { IProduct } from '../../../store/products'

	export let data: {
		product: IProduct
	}
	let product: IProduct = data.product
</script>

<svelte:head>
	<title>{product.title}</title>
</svelte:head>

<section>
	<img
		src={product.thumbnail}
		alt="thumbnail"
	/>
	<h1>
		Slug page {product.title}
	</h1>
</section>
