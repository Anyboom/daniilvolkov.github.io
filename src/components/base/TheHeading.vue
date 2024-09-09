<script setup lang="ts">
  import TButton from "@/components/base/TButton.vue";
  import TParagraph from "@/components/base/TParagraph.vue";
  import TLogo from "@/components/base/TLogo.vue";
</script>

<template>
  <header class="flex lg:flex-row flex-col my-10 lg:my-20">
    <div class="basis-12/12 lg:basis-6/12 mb-8 lg:mb-0">
      <TLogo />
    </div>
    <div class="basis-12/12 lg:basis-6/12">
      <t-paragraph>
        Привет! Я фронтенд-разработчик, специализирующийся на создании
        современных веб-приложений с использованием Vue. Мне нравится
        разрабатывать отзывчивые и интерактивные интерфейсы, и я придаю большое
        значение чистоте кода и лучшим практикам в UX/UI-дизайне.
      </t-paragraph>
      <t-button
        href="https://t.me/anyboom"
        label="Написать мне"
        target="_blank"
      ></t-button>
    </div>
  </header>
</template>
