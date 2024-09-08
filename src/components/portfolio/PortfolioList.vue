<template>
  <TransitionGroup
    tag="div"
    name="list"
    class="grid sm:grid-cols-2 md:grid-cols-3 gap-8 grid-cols-1"
  >
    <slot></slot>
  </TransitionGroup>
</template>

<style>
  .list-enter-active,
  .list-leave-active {
    transition-property: color, background-color, border-color,
      text-decoration-color, fill, stroke, opacity, box-shadow, transform,
      filter, backdrop-filter;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 150ms;
  }
  .list-enter-from,
  .list-leave-to {
    opacity: 0;
    transform: translateY(20px);
  }
</style>
