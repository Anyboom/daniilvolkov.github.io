<script setup lang="ts">
  import TTitle from "@/components/base/TTitle.vue";
  import TSection from "@/components/base/TSection.vue";
  import TParagraph from "@/components/base/TParagraph.vue";
  import TContainer from "@/components/base/TContainer.vue";
  import TheHeading from "@/components/base/TheHeading.vue";
  import TheFooter from "@/components/base/TheFooter.vue";
  import TBadgeList from "@/components/badge/BadgeList.vue";
  import PortfolioItem from "@/components/portfolio/PortfolioItem.vue";
  import PortfolioImage from "@/components/portfolio/PortfolioImage.vue";
  import PortfolioList from "@/components/portfolio/PortfolioList.vue";
  import TLink from "@/components/base/TLink.vue";
  import { ref } from "vue";
  import {
    Dialog,
    DialogPanel,
    TransitionChild,
    TransitionRoot,
  } from "@headlessui/vue";
  import type { PortfolioItemType } from "@/types/PotrfolioItemType";

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
  ];

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
  ];

  const open = ref(false);
  let selectedImage = ref<PortfolioItemType>();

  function showImage(image: PortfolioItemType) {
    selectedImage.value = image;
    open.value = true;
  }
</script>
<template>
  <t-container>
    <TheHeading></TheHeading>
    <t-section>
      <t-title>Обо мне</t-title>
      <t-paragraph
        >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum
        distinctio fugit, inventore magni molestiae nam necessitatibus neque,
        odit officia quae quia reiciendis veniam! Accusantium cupiditate
        excepturi illo, illum in iure sapiente. Ab accusamus aliquam aut autem
        corporis cumque distinctio dolorem dolorum enim error esse ex facere
        fugiat fugit impedit in iste labore magni maiores nemo officiis pariatur
        placeat provident qui quia repudiandae sapiente, sequi ullam unde vel
        velit veniam vero voluptatum. Adipisci amet asperiores delectus,
        deserunt dolorum ducimus fuga inventore ipsa minima nam nostrum numquam
        quos, recusandae tenetur, unde? A minima nam obcaecati pariatur qui
        quisquam repudiandae suscipit, tempore veniam?</t-paragraph
      >
      <t-paragraph
        >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum
        distinctio fugit, inventore magni molestiae nam necessitatibus neque,
        odit officia quae quia reiciendis veniam! Accusantium cupiditate
        excepturi illo, illum in iure sapiente. Ab accusamus aliquam aut autem
        corporis cumque distinctio dolorem dolorum enim error esse ex facere
        fugiat fugit impedit in iste labore magni maiores nemo officiis pariatur
        placeat provident qui quia repudiandae sapiente, sequi ullam unde vel
        velit veniam vero voluptatum. Adipisci amet asperiores delectus,
        deserunt dolorum ducimus fuga inventore ipsa minima nam nostrum numquam
        quos, recusandae tenetur, unde? A minima nam obcaecati pariatur qui
        quisquam repudiandae suscipit, tempore veniam?</t-paragraph
      >
    </t-section>
    <t-section>
      <t-title>Навыки</t-title>
      <t-badge-list :items="skills"></t-badge-list>
    </t-section>
    <t-section>
      <t-title>Портфолио</t-title>
      <portfolio-list>
        <portfolio-item
          v-for="item in portfolioImages"
          :key="item.url"
          @click="showImage(item)"
        >
          <portfolio-image :image="item.url" :alt="item.alt"></portfolio-image>
        </portfolio-item>
      </portfolio-list>
      <div class="text-center my-10">
        <t-link>Показать еще</t-link>
      </div>
    </t-section>
    <TheFooter :mail="mail" :phone="phone" :github="github" :vk="vk" />
  </t-container>
  <TransitionRoot as="template" :show="open">
    <Dialog class="relative z-10" @close="open = false">
      <TransitionChild
        as="template"
        enter="ease-out duration-300"
        enter-from="opacity-0"
        enter-to="opacity-100"
        leave="ease-in duration-200"
        leave-from="opacity-100"
        leave-to="opacity-0"
      >
        <div
          class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
        />
      </TransitionChild>

      <div class="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div
          class="flex min-h-full items-center justify-center p-4 text-center sm:items-center sm:p-0"
        >
          <TransitionChild
            as="template"
            enter="ease-out duration-300"
            enter-from="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enter-to="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leave-from="opacity-100 translate-y-0 sm:scale-100"
            leave-to="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <DialogPanel
              class="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-screen-2xl"
            >
              <div class="flex justify-end p-4 bg-gray-100">
                <span class="cursor-pointer" @click="open = false">
                  <font-awesome-icon
                    icon="fa-solid fa-xmark"
                    size="xl"
                    class="text-primary hover:text-primary-darken transition"
                  />
                </span>
              </div>
              <img
                v-if="selectedImage"
                class="w-full h-full"
                :src="selectedImage.url"
                :alt="selectedImage.alt"
              />
            </DialogPanel>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
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
