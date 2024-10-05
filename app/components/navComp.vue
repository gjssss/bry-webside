<script setup lang="ts">
const isNext = ref(false)
const isMenuOpen = ref(false)

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
const popout = ref()
const menu = ref()

onMounted(() => {
  onClickOutside(popout, () => {
    isMenuOpen.value = false
  }, {
    ignore: [
      menu.value,
    ],
  })
})
</script>

<template>
  <div class="fixed top-0 z-100 w-full flex items-center justify-between px-12 py-3" :class="isNext ? 'backdrop-blur-sm bg-#fff7' : ''">
    <Logo :width="149" :height="40" :color="isNext ? '#333' : 'white'" class="transition-all" />
    <div class="flex gap-16 transition-all <md:hidden" :class="isNext ? 'c-#333' : 'c-white'">
      <a href="https://bbs.byr.cn/">北邮人BT</a>
      <a href="https://byr.pt/">北邮人论坛</a>
      <a href="https://byrio.org/">BYRIO技术社区</a>
    </div>
    <div class="relative md:hidden">
      <div ref="menu" class="i-carbon-menu cursor-pointer text-36px" :class="isNext ? 'c-#333' : 'c-white'" @click="isMenuOpen = !isMenuOpen" />
      <Transition name="fade">
        <div
          v-if="isMenuOpen"
          ref="popout"
          class="absolute bottom-0 left-0 z-999 flex flex-col translate-x--100% translate-y-100% gap-4 rounded-lg bg-white p-4 text-sm c-black shadow"
        >
          <div class="whitespace-nowrap b-b-1">
            <a href="https://bbs.byr.cn/">北邮人BT</a>
          </div>
          <div class="whitespace-nowrap b-b-1">
            <a href="https://byr.pt/">北邮人论坛</a>
          </div>
          <div class="whitespace-nowrap b-b-1">
            <a href="https://byrio.org/">BYRIO技术社区</a>
          </div>
        </div>
      </Transition>
    </div>
  </div>
</template>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
