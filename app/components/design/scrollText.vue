<script setup lang="ts">
import { wrap } from '@motionone/utils'

const props = defineProps<{
  factor: number
}>()
const { y } = useScroll(document)
const { velocity } = useVelocity(y)
const springVelocity = useSpringRef(velocity)
const direction = ref(props.factor)

const transformX = ref(-20)
const x = computed(() => wrap(-20, -45, transformX.value))

createAnimation((delta) => {
  if (velocity.value > 0) {
    direction.value = 1 * props.factor
  }
  else if (velocity.value < 0) {
    direction.value = -1 * props.factor
  }
  let v = springVelocity.value
  v = Math.abs(v)
  if (v > 50) {
    v = 50
  }
  transformX.value += direction.value * (v / 5 + 10) * (delta / 1000)
})
</script>

<template>
  <div :style="{ transform: `translateX(${x}%)` }" class="w-fit whitespace-nowrap">
    <span v-for="index in 4" :key="index">

      <slot />
    </span>
  </div>
</template>

<style>

</style>
