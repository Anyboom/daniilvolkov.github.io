<script setup lang="ts">
  import { ref } from 'vue'

  interface IImage {
    src: any;
    background: string;
  }

  let images = ref<IImage[]>([
    {
      src: "img/bootstrap.svg",
      background: "#7952b3",
    },
    {
      src: "img/figma.svg",
      background: "#03011c",
    },
    {
      src: "img/git.svg",
      background: "#f44d27",
    },
    {
      src: "img/javascript.svg",
      background: "#f0dc4e",
    },
    {
      src: "img/jquery.svg",
      background: "#182a38",
    },
    {
      src: "img/npm.svg",
      background: "#cc3534",
    },
    {
      src: "img/tailwind.svg",
      background: "#161d2d",
    },
    {
      src: "img/typescript.svg",
      background: "#2d79c7",
    },
    {
      src: "img/vite.svg",
      background: "#2fd5c8",
    },
    {
      src: "img/sass.svg",
      background: "#cc6699",
    },
    {
      src: "img/css.svg",
      background: "#214ce5",
    },
    {
      src: "img/html.svg",
      background: "#e34e25",
    },
    {
      src: "img/vue.svg",
      background: "#1f2027",
    }
  ]);
</script>

<template>
  <div class="skills">
    <div class="container-fluid">
      <div class="row">
        <div class="col-12">
          <h1 class="title">Навыки</h1>
        </div>
        <div class="col-6 col-sm-6 col-md-4 col-lg-2" :key="image.src" v-for="image in images">
          <div class="skills__item" :style="{ 'background': image.background }">
            <img class="skills__image" :src="image.src" alt="#">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.skills {
  &__item {
    background: #979797;
    width: 100%;
    aspect-ratio: 1;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  &__image{
    width: 100%;
    height: 100%;
  }
}
</style>