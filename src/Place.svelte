<script>
  import { getObjectsByPeriod } from './apiCalls.js';
  import { artObjects } from './stores.js';
  export let name;
  export let id;
  export let pathForward;

  let pathforwardSplit = pathForward.split('\\');
  let pathForwardJoin = pathforwardSplit.join(', ');

  const handleClick = async () => {
    const objects = await getObjectsByPeriod(id);
    artObjects.set(objects.records);
  }

</script>

<p on:click={handleClick} tabIndex=2 >{name}, {pathForwardJoin}</p>

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
