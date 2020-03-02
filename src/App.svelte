<script>
	import { categoryOptions, selectedOption } from './stores.js';
</script>

<main>
	<header>
		<h1>Harvard Art Museum</h1>
	</header>
	<h4>Please select a category below: </h4>
	<section>
		<article class='period-article'>
			<h2>Period</h2>
			<p>Contains the periods used to describe items
 			in the Harvard Art Museums collections.
			</p>
		</article>
		<article class='place-article'>
			<h2>Place</h2>
			<p>Contains the location used to describe items
 			in the Harvard Art Museums collections.
			</p>
		</article>
		<article class='classification-article'>
			<h2>Classification</h2>
			<p>Contains the Classifications used to describe
 			item in the Harvard Art Museums collections.
			</p>
		</article>
		<article class='gallery-article'>
			<h2>Gallery</h2>
			<p>Contains the Galleries and their items
 			in the Harvard Art Museums collections.
			</p>
		</article>
	</section>
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

	h4 {
		width: 100%;
		margin: 0;
		margin-bottom: 25px;
	}

	section {
		display: flex;
		align-items: center;
		justify-content: center;
		flex-wrap: wrap;
		height: 550px;
		width: 80%;
	}

	article {
		width: 500px;
		height: 275px;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		cursor: pointer;
		tab-index: 10;
	}

	article:hover,
	article:focus {
		transform: scale(1.03);
	}

	article:active {
		transform: scale(1);
	}

	.period-article {
		background-color: #C4E790;
	}

	.place-article {
		background-color: #90E7DE;
	}

	.classification-article {
		background-color: #B390E7;
	}

	.gallery-article {
		background-color: #E79098;
	}

	h2 {
		font-size: 2.5em;
	}

	p {
		width: 80%;
		text-align: center;
	}

</style>
