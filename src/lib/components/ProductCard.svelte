<script lang="ts">
	import type { IProduct } from '../../store/products'
	import { addProductToCart, cartStore } from '../../store/cart'

	export let product: IProduct | null = null
	export const productLink = `/products/${product ? product.id : ''}`
	$: thisProductInCart = () => {
		if (!product || !product.id) return null
		const productInCart = $cartStore.products.find((p: IProduct) => p.id === product.id)
		return productInCart ? productInCart.brand : null
	}

	const addToCart = async () => {
		if (!product) return
		addProductToCart(product)
	}
</script>

<div class="product-card cursor-pointer">
	<div class="dot" />
	<a
		href={productLink}
		data-sveltekit-preload-data="hover"
		class="w-full"
	>
		<img
			loading="lazy"
			alt="product thumbnail"
			src={product.thumbnail}
			class="w-full"
		/>
	</a>
	<a
		href={productLink}
		data-sveltekit-preload-data="hover"
	>
		<h2 class="product-card__title">
			{product.title}
		</h2>
	</a>

	<a
		href={productLink}
		data-sveltekit-preload-data="hover"
	>
		<h3 class="product-card__price">
			{product.price}
		</h3>
	</a>

	<button
		on:click={addToCart}
		class="btn-blue product-card__cart-btn"
	>
		add to cart
	</button>
</div>

<style lang="postcss">
	.product-card {
		cursor: pointer;
		@apply relative cursor-pointer;
	}
	.product-card .dot {
		@apply w-4 h-4 bg-red-700 rounded-full absolute top-4 right-6;
	}
	.product-card__title {
		@apply p-2 text-lg pb-0;
	}
	.product-card__price {
		@apply p-2 text-base pt-1;
	}
	.product-card__cart-btn {
		@apply w-full;
	}
	img {
		height: 200px;
	}
</style>
