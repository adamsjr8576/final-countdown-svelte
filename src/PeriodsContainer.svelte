<script>
  import { categoryOptions, selectedOption } from './stores.js';
  import Period from './Period.svelte';
</script>

<section>
  <form>
    <input placeholder="search period..." />
    <button type="button">Search</button>
  </form>
  <div>
    {#each $categoryOptions as categoryOption}
      <Period name={categoryOption.name} id={categoryOption.id} />
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
    width: 85%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-wrap: wrap;
    height: 550px;
    overflow: auto;
  }
</style>
