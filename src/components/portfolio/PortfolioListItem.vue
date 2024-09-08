<script setup lang="ts"></script>

<template>
  <div
    class="overflow-hidden h-full cursor-pointer relative bg-gray-500 w-full aspect-square after:w-full after:h-full after:bg-primary after:absolute after:top-0 after:opacity-30 hover:after:opacity-15 after:transition"
  >
    <slot></slot>
  </div>
</template>

<style scoped lang="scss"></style>
