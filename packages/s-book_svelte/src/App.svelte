<script>
	import Header from "./components/Header.svelte";
	import Tabs from "./components/Tab.svelte";
	
	// let message = "";
	const changeMessage = (event) => message = event.detail
</script>

<main>
	<Header />
	<Tabs on:changeMessage={changeMessage}>
		<div slot="out">first</div>
		<div slot="inner">second</div>
	</Tabs>
</main>

<style>
	main {
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>
