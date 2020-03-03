<script>
  export let description;
  export let colors = [];
  export let period;
  export let image = '';
  export let title;
  export let century;
  export let medium;
</script>

<article>
  <img src={image} alt={title} />
    <div class='colors-container'>
      {#each colors as color}
        <div class="color-div" style="background-color: {color.color}"></div>
      {/each}
    </div>
    <div>
      <h4>Title:</h4>
      <p>{title}</p>
    </div>
    <div>
      <h4>Time:</h4>
      <p>{century} - {period}</p>
    </div>
    <div>
      <h4>Medium: </h4>
      <p>{medium}</p>
    </div>
    <div>
      <h4>Description: </h4>
      <p class="description-p">{description}</p>
    </div>
</article>

<style>

  article {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 350px;
    height: 550px;
    margin: 15px;
    border: 2px solid black;
    background-color: #F6F6FB;
    overflow: auto;
  }

  article:hover {
    border: 2px solid #ff3e00;
  }

  img {
    height: auto;
    width: 350px;
  }

  .colors-container {
    width: 95%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .color-div {
    height: 25px;
    width: 25px;
    margin: 0;
  }

  h4 {
    text-decoration: underline;
    margin: 5px 0;
  }

  p {
    margin: 0;
  }

  .description-p {
    height: 100px;
    overflow: auto;
    width: 90%;
    border: 1px solid black;
    margin: auto;
    padding: 10px
  }

  div {
    width: 90%;
    margin: 10px 0;
  }

</style>
