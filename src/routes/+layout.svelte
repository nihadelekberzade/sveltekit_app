<script>
	import Navbar from '$lib/components/Navbar.svelte'
	import Header from '$lib/layout/Header.svelte'
	import '../assets/styles/base.scss'
	// Import the functions you need from the SDKs you need
</script>

<div class="app">
	<Header />
	<main>
		<div class="navbar">
			<Navbar />
		</div>
		<slot />
	</main>
</div>

<style>
	main {
		display: flex;
		align-items: flex-start;
		@apply container max-w-5xl px-4;
	}
	.navbar {
		flex-basis: 275px;
		min-width: 275px;
	}
	@media (min-width: 480px) {
		footer {
			padding: 12px 0;
		}
	}
</style>
