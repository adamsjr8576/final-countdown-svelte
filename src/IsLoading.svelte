<script>
let src = './images/monalisa.png';
</script>

<section>
  <img src={src} alt='image of mona losa' />
  <p>Loading...</p>
</section>

<style>
  section {
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 100;
    background-color: rgba(255, 255, 255, .7);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  img {
    width: 200px;
    animation: grow 5s linear infinite
  }

  @keyframes grow {
    0% {
      width: 200px;
    }
    100% {
      width: 600px;
    }
  }
</style>
