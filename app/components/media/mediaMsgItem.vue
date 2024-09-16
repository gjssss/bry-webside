<script setup lang="ts">
const props = defineProps<{
  pos: 'left' | 'right'
  isEnd: boolean
  full?: boolean
}>()

const classObj = computed(() => {
  const { pos, isEnd, full } = props
  const ans = []
  if (pos === 'left') {
    ans.push('rounded-tl-4px rounded-tr-24px rounded-br-24px')
    ans.push('text-black bg-white')
  }
  else {
    ans.push('rounded-tl-24px rounded-tr-4px rounded-bl-24px')
    ans.push('bg-#4AA3FF text-white')
  }
  if (!isEnd) {
    ans.push(pos === 'left' ? 'rounded-bl-4px' : 'rounded-br-4px')
  }
  else {
    ans.push('rounded-b-24px')
  }
  if (full) {
    ans.push('w-full')
  }
  return ans
})
</script>

<template>
  <div class="px-5 py-2 shadow-[#DEE6F2] shadow-[0_0_4px_0]" :class="classObj">
    <slot />
  </div>
</template>

<style>

</style>
