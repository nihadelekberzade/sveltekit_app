<script>
	import Carousel from 'svelte-carousel'

	let carousel // for calling methods of the carousel instance
	export let images
	export let duration
	const handleNextClick = () => {
		carousel.goToNext()
	}
</script>

<div>
	<Carousel
		bind:this={carousel}
		{duration}
	>
		{#each images as image}
			<img
				src={image}
				alt="image"
			/>
		{/each}
	</Carousel>
	<button on:click={handleNextClick}>Next</button>
</div>
