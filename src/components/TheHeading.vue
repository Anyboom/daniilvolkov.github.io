<script setup lang="ts">

import { ref } from 'vue'
import { RouterLink } from 'vue-router'

let links = ref([
  {
    title: "Главная",
    name: "home"
  },
  {
    title: "Обо мне",
    name: "about"
  },
  {
    title: "Портфолио",
    name: "portfolio"
  },
  {
    title: "Навыки",
    name: "skills"
  },
])

let showMenu = ref(false);

const toggleMenu = function(){
  showMenu.value = !showMenu.value;
}

</script>

<template>
<header class="header">
  <div class="header__button">
    <span class="header__button-link" href="#" @click="toggleMenu">
      <img class="header__button-icon" src="../assets/img/menu.svg" alt="">
    </span>
  </div>
  <Transition>
    <nav class="header__nav" v-show="showMenu">
      <ul class="header__list">
        <li class="header__list-item" v-for="link in links" :key="link.name">
          <RouterLink @click="toggleMenu" class="header__list-link" :to="{ name: link.name}">{{ link.title }}</RouterLink>
        </li>
      </ul>
    </nav>
  </Transition>
</header>
</template>

<style scoped lang="scss">
  .header{
    &__button{
      position: fixed;
      right: 5rem;
      top: 5rem;
      z-index: 1100;
    }
    &__button-link{
      cursor: pointer;
    }
    &__nav{
      height: 100%;
      width: 100%;
      background: $color-gray;
      position: fixed;
      justify-content: center;
      align-items: center;
      z-index: 1000;
      top: 0;
      display: flex;
      left: 0;
      transition: opacity 0.3s ease;
    }
    &__list{
      list-style: none;
    }
    &__list-item{
      text-align: center;
      &:not(:last-of-type){
        margin-bottom: 4rem;
      }
    }
    &__list-link{
      font-weight: 600;
      font-size: 4.8rem;
      color: $color-dark;
      text-transform: uppercase;
      &:hover{
        text-decoration: underline;
      }
    }
  }

  .v-enter-from,
  .v-leave-to{
    opacity: 0;
  }

  .v-enter-to,
  .v-leave-from{
    opacity: 1;
  }

  .v-enter-active,
  .v-leave-active{
    transition: all 0.3s ease;
  }

  .router-link-exact-active{
    text-decoration: underline;
  }
</style>