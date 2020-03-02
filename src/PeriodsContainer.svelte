<script>
  import { categoryOptions, selectedOption } from './stores.js';
  import Period from './Period.svelte';
  let search = '';
  let periods = $categoryOptions;
  const searchPeriods = () => {
    const filteredPeriods = $categoryOptions.filter(period => period.name.includes(search));
    if (filteredPeriods.length) {
      periods = filteredPeriods
    }
  }
</script>

<section>
  <form>
    <input bind:value={search} placeholder="search period..." />
    <button type="button" on:click={searchPeriods}>Search</button>
  </form>
  <div>
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
