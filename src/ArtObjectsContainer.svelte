<script>
  import { artObjects } from './stores.js';
  import ArtObject from './ArtObject.svelte';
</script>

<section>
  {#each $artObjects as artObject}
    {#if artObject.imagecount === 0 && artObject.colorcount === 0}
      <ArtObject description={artObject.description} period={artObject.period} title={artObject.title}
        century={artObject.century} medium={artObject.medium} />
    {:else if artObject.colorcount > 0 && artObject.imagecount > 0 && artObject.images.length > 0}
      <ArtObject description={artObject.description} colors={artObject.colors}
        period={artObject.period} image={artObject.images[0].baseimageurl}
        title={artObject.title} century={artObject.century} medium={artObject.medium} />
    {:else if artObject.colorcount > 0}
      <ArtObject description={artObject.description} colors={artObject.colors}
        period={artObject.period} title={artObject.title}
        century={artObject.century} medium={artObject.medium} />
    {:else if artObject.imagecount > 0 && artObject.images.length > 0}
      <ArtObject description={artObject.description} period={artObject.period}
        image={artObject.images[0].baseimageurl} title={artObject.title}
        century={artObject.century} medium={artObject.medium} />
    {/if}
  {/each}
</section>

<style>

  section {
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 95%;
    height: 600px;
    overflow: auto;
    flex-wrap: wrap;
  }

</style>
