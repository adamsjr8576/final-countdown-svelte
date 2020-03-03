<script>
  import { categoryOptions, selectedOption, isLoading } from './stores.js';
	import { getAllPeriods, getAllPlaces } from './apiCalls.js';

  const getPeriods = async () => {
    isLoading.set(true);
		let periods = await getAllPeriods(1);
		categoryOptions.set(periods.records);
		if (periods.info.pages > 1) {
      for (var i = 2; i <= periods.info.pages; i ++) {
        periods = await getAllPeriods(i);
        categoryOptions.update(store => [...store, ...periods.records]);
      }
    }
    isLoading.set(false);
		selectedOption.update(store => 'period');
	}

  const getPlaces = async () => {
    isLoading.set(true);
    let places = await getAllPlaces(1);
    categoryOptions.set(places.records);
    if (places.info.pages > 1) {
      for (var i = 2; i <= places.info.pages; i ++) {
        places = await getAllPlaces(i);
        categoryOptions.update(store => [...store, ...places.records]);
      }
    }
    isLoading.set(false);
		selectedOption.update(store => 'place');
  }

</script>

<h4>Please select a category below: </h4>
<section>
  <article class='period-article' on:click={getPeriods}>
    <h2>Period</h2>
    <p>Contains the periods used to describe items
    in the Harvard Art Museums collections.
    </p>
  </article>
  <article class='place-article' on:click={getPlaces}>
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

<style>
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
