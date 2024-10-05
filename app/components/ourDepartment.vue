<script setup lang="ts">
import DesignShow from './design/designShow.vue'
import MediaShow from './media/mediaShow.vue'
import ProductShow from './productShow.vue'
import TechShow from './techShow.vue'

const navList = [
  {
    title: '新媒体组',
    img: '/images/departments/icon-media.svg',
    component: MediaShow,
  },
  {
    title: '设计组',
    img: '/images/departments/icon-design.svg',
    component: DesignShow,
  },
  {
    title: '技术组',
    img: '/images/departments/icon-tech.svg',
    component: TechShow,
  },
  {
    title: '产品运营组',
    img: '/images/departments/icon-product.svg',
    component: ProductShow,
  },
]
const current = ref(0)
const activateText = refDebounced(current, 150)
</script>

<template>
  <div class="flex flex-col gap-3 rounded-20px bg-white px-2 py-2 lg:flex-row md:px-6 md:py-4">
    <div class="flex flex-row rounded-20px bg-#f5f5f5 px-2 py-2 lg:flex-col md:gap-6 md:px-6 md:py-4">
      <div
        v-for="item, index in navList"
        :key="index"
        class="department-slider relative w-100px flex flex-1 flex-shrink-0 flex-col cursor-pointer items-center justify-center px-3 md:h-130px md:w-160px"
        :style="{ '--index': current, '--bg': `url(${navList[activateText]?.img})`, '--op': current === activateText ? 1 : 0 }"
        @click="current = index"
      >
        <div class="w-30px md:hidden">
          <img :src="navList[index]?.img" alt="" srcset="">
        </div>
        <div
          class="relative z-1 whitespace-nowrap text-sm tracking-widest transition-all transition-duration-300 lg:text-2xl md:text-xl"
          :class="activateText === index ? 'c-#0067D1 font-bold' : 'c-#a8a8a8 hover:text-zinc-500'"
        >
          {{ item.title }}
        </div>
      </div>
    </div>
    <div class="min-h-568px flex-1">
      <Transition name="fade" mode="out-in">
        <component :is="navList[current]?.component" />
      </Transition>
    </div>
  </div>
</template>

<style scoped>
  .department-slider:first-child::before {
  content: '';
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 1.1em;
  background: white;
  border-radius: 10px;
  z-index: 0;

  transform: translateX(calc(var(--index) * (100%)));
  transition: transform 0.3s ease-in-out;
}

@media (min-width: 768px) {
  .department-slider:first-child::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: white;
    border-radius: 10px;
    z-index: 0;

    transform: translateX(calc(var(--index) * (100% + 1.5rem)));
    transition: transform 0.3s ease-in-out;
  }
  .department-slider:first-child::after {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: 0;
    transform: translateX(calc(var(--index) * (100% + 1.5rem)));
    transition:
      opacity 0.15s ease-in-out,
      background 0.15s ease-in-out,
      transform 0.3s ease-in-out;

    opacity: var(--op, 1);
    background: var(--bg);
    background-position: center;
    background-repeat: no-repeat;
  }
}
@media (min-width: 1024px) {
  .department-slider:first-child::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: white;
    border-radius: 10px;
    z-index: 0;

    transform: translateY(calc(var(--index) * (100% + 1.5rem)));
    transition: transform 0.3s ease-in-out;
  }
  .department-slider:first-child::after {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: 0;
    transform: translateY(calc(var(--index) * (100% + 1.5rem)));
    transition:
      opacity 0.15s ease-in-out,
      background 0.15s ease-in-out,
      transform 0.3s ease-in-out;

    opacity: var(--op, 1);
    background: var(--bg);
    background-position: center;
    background-repeat: no-repeat;
  }
}
.fade-enter-active,
.fade-leave-active {
  transition: all 0.5s ease;
}

.fade-enter-from {
  opacity: 0;
  transform: translateX(-20px);
}
.fade-leave-to {
  opacity: 0;
  transform: translateX(20px);
}
</style>
