<script>
  import { getObjects } from './apiCalls.js';
  import { artObjects, selectedOption, isLoading } from './stores.js';
  export let name;
  export let id;

  const handleClick = async () => {
    const period = $selectedOption;
    isLoading.set(true);
    const objects = await getObjects(period, id);
    isLoading.set(false);
    artObjects.set(objects.records);
  }

</script>

<p data-testid='option-p' on:click={handleClick} tabIndex=1 >{name}</p>

<style>

  p {
    padding: 5px;
    border: 2px solid black;
    margin: 5px 10px;
    cursor: pointer;
    background-color: white;
    outline: 0;
  }

  p:hover,
  p:focus {
    border: 2px solid #ff3e00;
    transform: scale(1.08);
  }

  p:active {
    transform: scale(1);
  }

</style>
