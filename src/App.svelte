<script>
	import { categoryOptions, selectedOption, artObjects, isLoading } from './stores.js';
	import CategorySelector from './CategorySelector.svelte';
	import OptionsContainer from './OptionsContainer.svelte';
	import ArtObjectscontainer from './ArtObjectscontainer.svelte';
	import IsLoading from './IsLoading.svelte';
</script>

<main>
	<header>
		<h1>Harvard Art Museum</h1>
	</header>
	{#if $isLoading === true}
		<IsLoading />
	{/if}
	{#if $selectedOption.length === 0}
		<CategorySelector />
	{/if}
	{#if $selectedOption.length > 0 && !$artObjects.length}
		<OptionsContainer />
	{/if}
	{#if $artObjects.length}
		<ArtObjectscontainer />
	{/if}
</main>

<style>
	main {
		text-align: center;
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

	@media screen and (max-width: 625px) {
	  header {
			height: 200px;
	  }
	}

	@media screen and (max-width: 375px) {
	  header {
			height: 250px;
	  }
	}

</style>
