<script>
  import { categoryOptions, selectedOption } from './stores.js';
  import Period from './Period.svelte';
  let search = '';
  let hasError = false;
  let periods = $categoryOptions;

  const searchPeriods = () => {
    hasError = false;
    const filteredPeriods = $categoryOptions.filter(period => {
      const nameLowerCase = period.name.toLowerCase();
      const searchLowerCase = search.toLowerCase();
      return nameLowerCase.includes(searchLowerCase)
    });
    if (filteredPeriods.length) {
      periods = filteredPeriods
    } else {
      periods = [];
      hasError = true;
    }
  }

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      searchPeriods();
    }
  }

  const handleReset = () => {
    search = '';
    searchPeriods();
  }

</script>

<section>
  <form>
    <input on:keydown={handleKeyDown} bind:value={search} placeholder="search period..." />
    <button on:click|preventDefault={searchPeriods}>Search</button>
    <button on:click|preventDefault={handleReset}>Reset</button>
  </form>
  <div>
    <p hidden={!hasError}>There are no matches for {search}</p>
    {#each periods as period}
      <Period name={period.name} id={period.id} />
    {/each}
  </div>
</section>


<style>
  section {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
  }

  form {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 80%;
    margin-bottom: 15px;
  }

  input {

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
</style>
