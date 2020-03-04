<script>
  import { categoryOptions, selectedOption } from './stores.js';
  import Option from './Option.svelte';
  let search = '';
  let hasError = false;
  let options = $categoryOptions;

  const searchOptions = () => {
    hasError = false;
    const filteredOptions = $categoryOptions.filter(option => {
        const nameLowerCase = option.name.toLowerCase();
        const searchLowerCase = search.toLowerCase();
        return nameLowerCase.includes(searchLowerCase)
      });
    if (filteredOptions.length) {
      options = filteredOptions
    } else {
      options = [];
      hasError = true;
    }
  }

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      searchOptions();
    }
  }

  const handleReset = () => {
    search = '';
    searchOptions();
  }

  const handleGoBack = () => {
    selectedOption.set('');
  }

</script>

<section>
  <form>
    <button class="back-button" on:click={handleGoBack} >Back</button>
    <input data-testid='search-input' on:keydown={handleKeyDown} bind:value={search} placeholder="search period..." />
    <button data-testid='search-button' on:click|preventDefault={searchOptions}>Search</button>
    <button data-testid='reset-button' on:click|preventDefault={handleReset} class="reset-button">Reset</button>
  </form>
  <div>
    <p data-testid='search-error' hidden={!hasError}>There are no matches for {search}</p>
    {#each options as option}
      <Option name={option.name} id={option.id} />
    {/each}
  </div>
</section>


<style>
  section {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    width: 100%;
  }

  form {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    width: 90%;
    margin-bottom: 15px;
  }

  input {
    font-size: 1em;
    padding: 8px;
    border: 0;
    border-radius: 5px;
    border: 2px solid black;
    margin: 0 15px;
    width: 200px;
    outline: 0;
    background-color: #F6F6FB;
  }

  input:hover,
  input:focus {
    border: 2px solid #ff3e00;
  }

  button {
    font-size: 1em;
    width: 125px;
    margin: 0 15px;
    border-radius: 5px;
    border: 2px solid black;
    background-color: #F6F6FB;
    cursor: pointer;
  }

  button:hover,
  button:focus {
    border: 2px solid #ff3e00;
  }

  button:active {
    transform: scale(.95);
  }

  .back-button {
    margin-right: 18%;
  }

  div {
    width: 90%;
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    flex-wrap: wrap;
    height: 550px;
    overflow: auto;
    padding: 0 25px;
  }

  @media screen and (max-width: 375px) {
    .back-button {
      margin: 0;
    }

    form {
      flex-direction: column;
      height: 175px;
      justify-content: space-around;
    }
	}
</style>
