<script setup lang="ts">

</script>

<template>
  <div class="portfolio">
    <div class="container-fluid">
      <div class="row">
        <div class="col-12">
          <h1 class="title">Портфолио</h1>
        </div>
        <div class="col-12 col-md-6 col-lg-3">
          <div class="portfolio__item">
            <img class="portfolio__image" src="" alt="#">
          </div>
        </div>
        <div class="col-12 col-md-6 col-lg-3">
          <div class="portfolio__item">
            <img class="portfolio__image" src="" alt="#">
          </div>
        </div>
        <div class="col-12 col-md-6 col-lg-3">
          <div class="portfolio__item">
            <img class="portfolio__image" src="" alt="#">
          </div>
        </div>
        <div class="col-12 col-md-6 col-lg-3">
          <div class="portfolio__item">
            <img class="portfolio__image" src="" alt="#">
          </div>
        </div>
        <div class="col-12 col-md-6 col-lg-3">
          <div class="portfolio__item">
            <img class="portfolio__image" src="" alt="#">
          </div>
        </div>
        <div class="col-12 col-md-6 col-lg-3">
          <div class="portfolio__item">
            <img class="portfolio__image" src="" alt="#">
          </div>
        </div>
        <div class="col-12 col-md-6 col-lg-3">
          <div class="portfolio__item">
            <img class="portfolio__image" src="" alt="#">
          </div>
        </div>
        <div class="col-12 col-md-6 col-lg-3">
          <div class="portfolio__item">
            <img class="portfolio__image" src="" alt="#">
          </div>
        </div>
        <div class="col-12 col-md-6 col-lg-3">
          <div class="portfolio__item">
            <img class="portfolio__image" src="" alt="#">
          </div>
        </div>
        <div class="col-12">
          <div class="portfolio__more">
            <a href="#" class="portfolio__more-link">Показать еще</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.portfolio {
  &__item{
    background: #979797;
    width: 100%;
    aspect-ratio: 1;
  }
  &__more-link{
    font-size: 2rem;
    color: #0C120C;
    font-weight: 600;
  }
  &__more{
    text-align: center;
    margin-top: 5rem;
  }
}

@media(max-width: 567px){
  .portfolio {
    &__more{
      text-align: center;
      margin-top: 0rem;
    }
  }
}
</style>