<script lang="ts">

   import type {IProduct} from "../store/products";

   export let product : IProduct;
  export const productLink = `/products/${product.id}`
</script>

<div>
    <a href={productLink} data-sveltekit-preload-data="hover">
        <img alt="thumbnail" src={product.thumbnail}/>
    </a>
    <h2>
        {product.title}
    </h2>
</div>