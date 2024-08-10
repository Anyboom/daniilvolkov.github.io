<script setup lang="ts">

</script>

<template>
  <main class="main">
    <div class="main__inner">
      <h2 class="main__caption">Личный сайт frontend разработчика</h2>
      <h1 class="main__title">Волков Даниил</h1>
    </div>
  </main>
</template>

<style scoped lang="scss">
  .main{
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    &__inner{
      text-align: center;
    }
    &__title{
      line-height: 9rem;
      font-size: 9.6rem;
      margin: 2rem 0;
      font-weight: 600;
    }
    &__caption{
      font-size: 2.4rem;
    }
  }

  @media (max-width: 576px){
    .main{
      padding: 0 2rem;
      &__caption{
        font-size: 1.8rem;
      }
      &__title{
        line-height: 5rem;
        font-size: 4.6rem;
        margin: 2rem 0;
        font-weight: 600;
      }
    }
  }
</style>