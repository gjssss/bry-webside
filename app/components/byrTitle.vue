<script setup lang="ts">

</script>

<template>
  <div class="font-smiley-sans text-bg relative text-3xl">
    <div class="relative z-1">
      <slot />
    </div>
  </div>
</template>

<style>
.text-bg::before {
  content: '';
  position: absolute;
  width: 200px;
  z-index: 0;
  height: 60%;
  bottom: 0;
  left: 0;
  background-image: linear-gradient(to right, #0067d1a6, #d9d9d900);
  transform: skewX(-12deg);
}
</style>
