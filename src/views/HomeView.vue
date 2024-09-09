<script setup lang="ts">
  import TTitle from "@/components/base/TTitle.vue";
  import TSection from "@/components/base/TSection.vue";
  import TParagraph from "@/components/base/TParagraph.vue";
  import TContainer from "@/components/base/TContainer.vue";
  import TheHeading from "@/components/base/TheHeading.vue";
  import TheFooter from "@/components/base/TheFooter.vue";
  import TBadgeList from "@/components/badge/BadgeList.vue";
  import PortfolioListItem from "@/components/portfolio/PortfolioListItem.vue";
  import PortfolioListItemImage from "@/components/portfolio/PortfolioListItemImage.vue";
  import PortfolioList from "@/components/portfolio/PortfolioList.vue";
  import { computed, ref } from "vue";
  import type { PortfolioItemType } from "@/types/PotrfolioItemType";
  import TModal from "@/components/base/TModal.vue";
  import TButton from "@/components/base/TButton.vue";

  const phone = "7-904-018-27-72";
  const vk = "https://vk.com/anyboom";
  const github = "https://github.com/anyboom";

  const skills = [
    "html",
    "javascript",
    "typescript",
    "css",
    "vue",
    "primevue",
    "tailwind",
    "bootstrap",
    "figma",
    "jquery",
    "npm",
    "vite",
    "sass",
    "docker",
    "express",
  ];

  const open = ref(false);
  let selectedImage = ref<PortfolioItemType>();

  function showImage(image: PortfolioItemType) {
    selectedImage.value = image;
    open.value = true;
  }

  const portfolioImages: PortfolioItemType[] = [
    {
      minuature: "/img/black&white/miniature.png",
      url: "/img/black&white/portfolio.png",
      alt: "#",
    },
    {
      minuature: "/img/tajam/miniature.png",
      url: "/img/tajam/portfolio.png",
      alt: "#",
    },
    {
      minuature: "/img/pinwall/miniature.png",
      url: "/img/pinwall/portfolio.png",
      alt: "#",
    },
  ];

  let step = 3;
  let portfolioImagesVisible = ref(3);
  let portfolioImagesComputed = computed(() => {
    return portfolioImages.slice(0, portfolioImagesVisible.value);
  });

  function loadMore() {
    portfolioImagesVisible.value += step;
  }
</script>
<template>
  <t-container>
    <the-heading></the-heading>
    <t-section>
      <t-title>Обо мне</t-title>
      <t-paragraph>
        Мое увлечение программированием началось еще в детстве, когда я старался
        разобраться, как написать небольшой скрипт для любимой игры. Этот первый
        шаг открыл для меня мир возможностей, и вскоре я начал посещать
        тематические кружки и участвовать в олимпиадах по программированию, где
        не раз занимал призовые места. С течением времени я поступил в колледж
        по специальности, которую так долго хотел освоить. Образование дало мне
        прочную базу знаний, которые я с успехом применил на практике в своей
        работе.
      </t-paragraph>
      <t-paragraph>
        На текущем этапе своей карьеры я активно использую современные
        проверенные технологии, такие как HTML, CSS, JavaScript и Vue. Это
        позволяет мне создавать высококачественные веб-приложения, которые
        радуют пользователей своей функциональностью и удобством.
      </t-paragraph>
      <t-paragraph>
        Помимо программирования, я увлекаюсь фотографией. Это творческое хобби
        развивает мой глаз на детали и эстетику, что, безусловно, положительно
        сказывается на моей работе как разработчика.</t-paragraph
      >
    </t-section>
    <t-section>
      <t-title>Использую в работе</t-title>
      <t-badge-list :items="skills"></t-badge-list>
    </t-section>
    <t-section>
      <t-title>Портфолио</t-title>
      <portfolio-list>
        <portfolio-list-item
          v-for="item in portfolioImagesComputed"
          :key="item.url"
          @click="showImage(item)"
        >
          <portfolio-list-item-image
            :image="item.minuature"
            :alt="item.alt"
          ></portfolio-list-item-image>
        </portfolio-list-item>
      </portfolio-list>
      <div
        class="text-center my-10"
        v-if="portfolioImagesComputed.length < portfolioImages.length"
      >
        <t-button link @click="loadMore" label="Показать еще"></t-button>
      </div>
    </t-section>
    <the-footer :phone="phone" :github="github" :vk="vk"></the-footer>
  </t-container>
  <t-modal v-model="open">
    <img
      v-if="selectedImage"
      class="w-full h-full"
      :src="selectedImage.url"
      :alt="selectedImage.alt"
    />
  </t-modal>
</template>

<style>
  .v-enter-from,
  .v-leave-from {
    opacity: 0;
  }

  .v-enter-to,
  .v-leave-to {
    opacity: 1;
  }

  .v-enter-active,
  .v-leave-active {
    transition: opacity 500ms ease-out;
  }
</style>
