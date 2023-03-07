<script>
  import {productsStore} from "../../store/products";
  import ProductCard from "../../components/ProductCard.svelte";
</script>

<section>
    <h1>
        Products
    </h1>
    {#each $productsStore.products as product}
        <ProductCard {product} />
    {/each}
</section>