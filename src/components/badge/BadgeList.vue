<script setup lang="ts">
  import TBadge from "@/components/badge/BadgeListItem.vue";

  const props = defineProps({
    items: {
      type: Array<string>,
      required: true,
    },
  });
</script>

<template>
  <div class="flex flex-wrap gap-4">
    <t-badge v-for="item in props.items" :key="item">{{ item }}</t-badge>
  </div>
</template>

<style scoped lang="scss"></style>
