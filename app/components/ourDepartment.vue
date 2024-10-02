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
  <div class="flex gap-3 rounded-20px bg-white px-6 py-4">
    <div class="flex flex-col gap-6 rounded-20px bg-#f5f5f5 px-6 py-4">
      <div
        v-for="item, index in navList"
        :key="index"
        class="department-slider relative min-w-160px flex flex-1 cursor-pointer items-center justify-center px-3"
        :style="{ '--index': current, '--bg': `url(${navList[activateText]?.img})`, '--op': current === activateText ? 1 : 0 }"
        @click="current = index"
      >
        <div
          class="relative z-1 text-2xl tracking-widest transition-all transition-duration-300"
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
