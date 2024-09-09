<script setup lang="ts">
const isNext = ref(false)

if (document) {
  const { y } = useScroll(document)
  const { height } = useWindowSize()
  watchEffect(() => {
    if (isNext.value && y.value < height.value - 100) {
      isNext.value = false
    }
    else if (!isNext.value && y.value > height.value - 100) {
      isNext.value = true
    }
  })
}
</script>

<template>
  <div class="fixed top-0 z-100 w-full flex items-center justify-between px-12 py-3" :class="isNext ? 'backdrop-blur-sm bg-#fff7' : ''">
    <Logo :width="149" :height="40" :color="isNext ? 'black' : 'white'" class="transition-all" />
    <div class="flex gap-16 transition-all" :class="isNext ? 'c-black' : 'c-white'">
      <a href="https://bbs.byr.cn/">北邮人BT</a>
      <a href="https://byr.pt/">北邮人论坛</a>
      <a href="https://byrio.org/">BYRIO技术社区</a>
    </div>
  </div>
</template>

<style>
</style>
