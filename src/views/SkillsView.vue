<template>
  <div class="main">
    <h1 class="main__title">Навыки</h1>
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

  &__row {
    display: grid;
    gap: 2.4rem;
    grid-template-columns: repeat(8, 1fr);
  }

  &__item {
    background: #979797;
    width: 100%;
    aspect-ratio: 1;
  }
}

@media (max-width: 991px){
  .main{
    &__row{
      grid-template-columns: repeat(6, 1fr);
    }
  }
}

@media (max-width: 768px){
  .main{
    &__row{
      grid-template-columns: repeat(4, 1fr);
    }
  }
}

@media (max-width: 578px){
  .main{
    &__row{
      grid-template-columns: repeat(2, 1fr);
    }
  }
}
</style>