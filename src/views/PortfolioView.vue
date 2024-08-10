<script setup lang="ts">

</script>

<template>
  <div class="main">
    <h1 class="main__title">Портфолио</h1>
    <div class="main__row">
      <div class="main__item">
        <img src="" alt="#">
      </div>
      <div class="main__item">
        <img src="" alt="#">
      </div>
      <div class="main__item">
        <img src="" alt="#">
      </div>
      <div class="main__item">
        <img src="" alt="#">
      </div>
      <div class="main__item">
        <img src="" alt="#">
      </div>
      <div class="main__item">
        <img src="" alt="#">
      </div>
      <div class="main__item">
        <img src="" alt="#">
      </div>
      <div class="main__item">
        <img src="" alt="#">
      </div>
    </div>
    <div class="main__more">
      <a href="#" class="main__more-link">Показать еще</a>
    </div>
  </div>
</template>

<style scoped lang="scss">
.main {
  &__title {
    font-weight: 600;
    font-size: 4.8rem;
    text-transform: uppercase;
    margin-bottom: 6rem;
  }
  &__row{
    display: grid;
    gap: 2.4rem;
    grid-template-columns: repeat(4, 1fr);
  }
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
  .main__more{
    text-align: center;
    margin-top: 5rem;
  }
}
</style>