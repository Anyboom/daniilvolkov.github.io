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
      <t-paragraph
        >Привет! Я фронтенд-разработчик с одним годом опыта. Специализируюсь на
        создании современных веб-приложений с использованием Vue. Увлекаюсь
        созданием отзывчивых и интерактивных интерфейсов, ценю чистый код и
        хорошие практики UX/UI. Открыт для новых профессиональных
        вызовов.</t-paragraph
      >
      <t-button>Написать мне</t-button>
    </div>
  </header>
</template>
