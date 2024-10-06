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
  <div :style="computedStyle" class="relative flex flex-shrink-0 flex-col items-center">
    <div class="flex items-center <md:w-screen">
      <img :src="data.img" alt="" class="relative z-1 flex-1 md:mx-10 <md:h-150px">
      <div>
        <div class="flex flex-col gap-2 md:flex-row md:items-end">
          <div class="font-smiley-sans text-2xl">
            @{{ data.name }}「{{ data.department }}」
          </div>
          <div class="text-sm text-[#727272]">
            {{ data.info }}
          </div>
        </div>
        <div class="mt-5 whitespace-nowrap text-sm max-sm:text-xs">
          <slot name="desc" />
        </div>
      </div>
    </div>
    <div class="ml-30px h-350px max-w-[612px] min-h-[300px] flex flex-auto grow-0 flex-col translate-y--68px items-center justify-center rounded-2xl bg-white p-4 px-[50px] py-[45px] md:ml-a max-sm:max-w-[320px] sm:min-h-[230px] <md:translate-y-0px max-sm:px-[30px] max-sm:py-[25px]">
      <p>
        <slot />
      </p>
      <img src="/images/senpai-saying/quote.svg" class="absolute bottom-0 right-0 translate-50%">
    </div>
  </div>
</template>

<style>

</style>
