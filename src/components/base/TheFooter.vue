<script setup lang="ts">
  const props = defineProps({
    phone: {
      type: String,
      required: true,
    },
    vk: {
      type: String,
      required: true,
    },
    github: {
      type: String,
      required: true,
    },
  });
</script>

<template>
  <footer class="flex gap-0 flex-row justify-between my-14">
    <div>
      <span>{{ props.phone }}</span>
    </div>
    <div class="flex gap-1">
      <a :href="props.vk" target="_blank">
        <font-awesome-icon
          icon="fa-brands fa-vk"
          size="xl"
          class="text-primary hover:text-primary-darken transition"
        />
      </a>
      <a :href="props.github" target="_blank">
        <font-awesome-icon
          icon="fa-brands fa-square-github"
          size="xl"
          class="text-primary hover:text-primary-darken transition"
        />
      </a>
    </div>
  </footer>
</template>
