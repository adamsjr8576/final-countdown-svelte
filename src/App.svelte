<script>
	import { categoryOptions, selectedOption } from './stores.js';
	import CategorySelector from './CategorySelector.svelte';

</script>

<main>
	<header>
		<h1>Harvard Art Museum</h1>
	</header>
	{#if $selectedOption.length === 0}
	<CategorySelector />
	{/if}
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: space-between;
	}

	header {
		width: 100%;
		height: 100px;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
		margin: 0;
		width: 100%;
		text-decoration: underline;
	}

</style>
