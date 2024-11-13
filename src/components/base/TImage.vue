<script setup lang="ts">
  import type { PortfolioItemType } from "@/types/PotrfolioItemType.ts";
  import { ref } from "vue";
  import TLoader from "@/components/base/TLoader.vue";

  const props = defineProps<{
    image: PortfolioItemType;
  }>();

  const isLoading = ref(true);

  function imageLoaded() {
    isLoading.value = false;
  }
</script>

<template>
  <div v-show="isLoading" class="loader-wrapper">
    <t-loader></t-loader>
  </div>
  <img
    v-show="!isLoading"
    class="w-full h-full"
    :src="props.image.url"
    :alt="props.image.alt"
    @load="imageLoaded"
  />
</template>

<style lang="scss" scoped>
  .loader-wrapper {
    padding: 200px 0;
    * {
      margin: 0 auto;
    }
  }
</style>
