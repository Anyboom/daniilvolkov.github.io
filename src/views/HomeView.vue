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

  const mail = "anyboom@mail.ru";
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
      url: "/img/portfolio_2.png",
      alt: "#",
    },
    {
      url: "/img/portfolio_3.png",
      alt: "#",
    },
    {
      url: "/img/portfolio_4.png",
      alt: "#",
    },
    {
      url: "/img/portfolio_2.png",
      alt: "#",
    },
    {
      url: "/img/portfolio_3.png",
      alt: "#",
    },
    {
      url: "/img/portfolio_4.png",
      alt: "#",
    },
    {
      url: "/img/portfolio_2.png",
      alt: "#",
    },
    {
      url: "/img/portfolio_3.png",
      alt: "#",
    },
    {
      url: "/img/portfolio_4.png",
      alt: "#",
    },
    {
      url: "/img/portfolio_4.png",
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
        Даниил, 22 года, является талантливым фронтенд-разработчиком с годом
        опыта в индустрии программирования. В своей профессиональной
        деятельности он сосредоточен на создании интуитивно понятных
        интерфейсов, способствующих позитивному пользовательскому опыту. Даниил
        гордится тем, что разработал крупный сервис, который стал востребованным
        среди пользователей благодаря своей функциональности и
        удобству.</t-paragraph
      >

      <t-paragraph>
        В своей работе он активно использует современные технологии, такие как
        HTML, CSS и JavaScript, а также библиотеки и фреймворки, такие как React
        или Vue.js. Это позволяет ему создавать высококачественные
        веб-приложения, соответствующие актуальным требованиям
        рынка.</t-paragraph
      >

      <t-paragraph>
        Помимо программирования, Даниил увлекается фотографией. Этот творческий
        хобби помогает ему развивать глаз на детали и эстетику, что, безусловно,
        благоприятно сказывается на его работе как разработчика.</t-paragraph
      >

      <t-paragraph>
        Как личность, Даниил отличается ответственностью, креативностью и
        стремлением к постоянному обучению, что позволяет ему эффективно решать
        задачи и добиваться успехов в карьере. Он всегда ищет новые возможности
        для личного и профессионального роста.</t-paragraph
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
            :image="item.url"
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
    <the-footer
      :mail="mail"
      :phone="phone"
      :github="github"
      :vk="vk"
    ></the-footer>
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
