<script setup lang="ts">

</script>

<template>
  <main class="home">
    <div class="home__inner">
      <h2 class="home__caption">Личный сайт frontend разработчика</h2>
      <h1 class="home__title">Волков Даниил</h1>
    </div>
  </main>
</template>

<style scoped lang="scss">
  .home{
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

  @media (max-width: 768px){
    .home{
      &__title{
        font-size: 6.6rem;
      }
      &__caption{
        font-size: 2rem;
      }
    }
  }
  @media (max-width: 576px){
    .home{
      &__inner{
        max-width: 200px;
      }
      &__title{
        line-height: 4rem;
        font-size: 3rem;
        letter-spacing: 0.2rem;
        margin: 1.5rem 0;
      }
      &__caption{
        font-size: 1.4rem;
      }
    }
  }
</style>