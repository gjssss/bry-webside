<script setup lang="ts">
const props = defineProps<{
  width: number
  data: {
    name: string
    department: string
    info: string
    img: string
  }
}>()
const computedStyle = computed(() => ({
  width: `${props.width}px`,
}))
</script>

<template>
  <div :style="computedStyle" class="relative flex-shrink-0">
    <div class="flex items-center">
      <img :src="data.img" alt="" class="relative z-1 mx-10">
      <div>
        <div>
          <span class="font-smiley-sans text-2xl">@{{ data.name }}「{{ data.department }}」</span>
          <span class="text-sm text-[#727272]">{{ data.info }}</span>
        </div>
        <div class="mt-5 text-sm max-sm:text-xs">
          <slot name="desc" />
        </div>
      </div>
    </div>
    <div class="ml-a max-w-[612px] min-h-[300px] flex flex-auto flex-col translate-y--68px items-center justify-center rounded-2xl bg-white p-4 px-[50px] py-[45px] max-sm:max-w-[320px] sm:min-h-[230px] max-sm:px-[30px] max-sm:py-[25px]">
      <p>
        <slot />
      </p>
    </div>
    <img src="/images/senpai-saying/quote.svg" class="absolute bottom-0 right-0 translate-x-50% translate-y--50%">
  </div>
</template>

<style>

</style>
