<script setup lang="ts">
const props = defineProps<{
  actived: boolean
}>()

const path = ref<SVGPathElement>()

onMounted(() => {
  const length = path.value?.getTotalLength()
  path.value?.style.setProperty('--l', String(length))

  watchEffect(async () => {
    if (props.actived) {
      path.value?.classList.add('animate-path')
    }
    else {
      path.value?.classList.remove('animate-path')
    }
  })
})
</script>

<template>
  <svg
    width="130"
    height="120"
    viewBox="0 0 117 104"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
  >
    <path
      ref="path"
      class="circle-path-style"
      d="M113.758 47.7575C100.925 67.2575 72.799 105.113 32.2585 86.2575C-10.7416 66.2579 -6.16411 7.76068 44.796 3.26009C101.575 -1.7544 115.259 46.7575 97.7588 71.7575C80.2588 96.7575 65.298 103.758 32.2585 100.257"
      stroke="#0067D1"
      fill="none"
    />
  </svg>
</template>

<style>
@keyframes stroke {
  to {
    stroke-dashoffset: 0;
  }
}
.circle-path-style {
  stroke-width: 6px;
  stroke-linecap: round;
  stroke-dashoffset: var(--l);
  stroke-dasharray: var(--l);
  opacity: 0;
  transition: opacity 0.8s ease-in-out;
}
.animate-path {
  animation: stroke 0.8s ease-in-out forwards;
  opacity: 1;
}
</style>
