<script>
  import { getObjectsByPeriod } from './apiCalls.js';
  import { artObjects } from './stores.js';
  export let name;
  export let id;
  const handleClick = async () => {
    const objects = await getObjectsByPeriod(id);
    artObjects.set(objects.records);
  }
</script>

<p on:click={handleClick} >{name}</p>

<style>

  p {
    padding: 5px;
    border: 2px solid black;
    margin: 5px 10px;
    cursor: pointer;
    background-color: white;
  }

  p:hover {
    border: 2px solid #ff3e00;
    transform: scale(1.1);
  }

  p:active {
    transform: scale(1);
  }

</style>
