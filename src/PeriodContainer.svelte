<script>
  import { categoryOptions, selectedOption } from './stores.js';
  console.log($categoryOptions);
</script>

<section>
  <form>
    <input placeholder="search period..." />
    <button type="button">Search</button>
  </form>
  <div>
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
