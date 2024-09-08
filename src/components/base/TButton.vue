<script setup lang="ts">
  import { ref } from "vue";

  let props = defineProps({
    link: {
      type: Boolean,
      required: false,
    },
    href: {
      type: String,
      required: false,
    },
    label: {
      type: String,
      required: true,
    },
  });

  let styles = ref({
    "bg-primary text-white px-10 py-3 hover:bg-primary-darken rounded-full":
      !props.link,
    "text-primary hover:text-primary-darken font-medium inline-block ":
      props.link,
  });
</script>

<template>
  <component
    :is="href ? 'a' : 'button'"
    :href="props.href"
    class="inline-block transition"
    :class="styles"
  >
    {{ props.label }}
  </component>
</template>

<style scoped lang="scss"></style>
