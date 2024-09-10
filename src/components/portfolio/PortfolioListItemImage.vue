<script setup lang="ts">
  const props = defineProps({
    image: {
      required: true,
      type: String,
    },
    alt: {
      required: true,
      type: String,
    },
  });
</script>

<template>
  <img class="w-full h-full" :src="props.image" :alt="props.alt" />
</template>

<style scoped lang="scss"></style>
