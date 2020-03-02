<script>
  export let description;
  export let colors;
  export let period;
  export let image = '';
  export let title;
  export let century;
  export let medium;
</script>

<article>
  <img src={image} alt={title} />
  <section>
    <div>

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
  </section>
</article>

<style>

  article {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 350px;
    height: 550px;
    margin: 15px;
    border: 1px solid black;
  }

  img {
    height: 250px;
    width: 350px;
  }

  section {
    overflow: auto;
    height: 350px;
    width: 97%;
  }

  h4 {
    text-decoration: underline;
    margin: 5px 0;
  }

  p {
    margin: 0;
  }

  .description-p {
    height: 75px;
    overflow: auto;
    width: 85%;
    border: 1px solid black;
    margin: auto;
  }

  div {
    margin: 15px 0;
  }

</style>
