<script lang='ts'>

	import type { IProduct } from '../../store/products';
	import { addProductToCart, cartStore } from '../../store/cart';

	export let product: IProduct | null = null;
	export const productLink = `/products/${product ? product.id : ''}`;
	$: thisProductInCart = () => {
		const _productInCart = $cartStore.products.find((p: IProduct) => p.id === product.id);
		console.log('thisProductInCart', _productInCart);
		return _productInCart ? _productInCart.brand : null;
	};

	const addToCart = () => {
		if (!product) return;
		addProductToCart(product);
	};

</script>

<div class='product_card'>
	<a href={productLink} data-sveltekit-preload-data='hover'>
		<img alt='thumbnail' src={product.thumbnail} />
	</a>
	<a href={productLink} data-sveltekit-preload-data='hover'>
		<h2>
			{product.title}
		</h2>
	</a>
	<div class='product_card__counters'>
		<button on:click={addToCart}>
			add to cart
		</button>
	</div>

</div>

<style lang='scss'>


  img {
    max-width: 100%;
    object-fit: cover;
    height: 200px;
    width: clamp(200px, 100%, 300px);
  }

  a {
    all: initial;
  }
</style>
