<script setup lang="ts">
  import TBadge from "@/components/badge/BadgeItem.vue";

  const props = defineProps({
    items: {
      type: Array<string>,
      required: true,
    },
  });
</script>

<template>
  <div class="flex flex-wrap gap-5">
    <t-badge v-for="item in props.items" :key="item">{{ item }}</t-badge>
  </div>
</template>

<style scoped lang="scss"></style>
