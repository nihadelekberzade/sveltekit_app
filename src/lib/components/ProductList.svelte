<script lang="ts">
	import type { IProduct } from '../../store/products'
	import ProductCard from '$lib/components/ProductCard.svelte'

	export let products: Array<IProduct>
</script>

<div class="productList">
	<ul>
		{#each products as product}
			<li>
				<ProductCard {product} />
			</li>
		{/each}
	</ul>
</div>

<style lang="scss">
	.productList ul {
		@apply grid gap-5 columns-1 md:columns-2 lg:columns-3 max-xl:columns-4;
	}

	@media only screen and (min-width: 500px) {
		.productList ul {
			grid-template-columns: repeat(2, 1fr);
		}
	}

	@media only screen and (min-width: 1024px) {
		.productList ul {
			grid-template-columns: repeat(3, 1fr);
		}
	}
</style>
