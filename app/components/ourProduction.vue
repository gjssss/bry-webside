<script setup lang="tsx">
const data = ref([
  {
    title: '北邮人论坛',
    image: '/images/service/service-byrbbs.png',
    brief: '北邮人共同的精神原乡 对一代又一代的北邮人而言 既是逗号 也是起点',
    content: (
      <p>
        作为一名北邮人，一个不能不知道，也不能不去的地方，就是北邮人论坛。建站于2003年9月26日，它是北邮人的温馨家园，支持网页和
        App 访问。超过 90% 的同学使用北邮人论坛获取信息。
      </p>
    ),
  },
  {
    title: '北邮第二课堂',
    image: '/images/service/service-dekt.png',
    brief: '我们致力于保障师生参加活动的体验',
    content: (
      <p>
        北邮第二课堂主要通过活动申请、管理、发布、报名、签到、评价等功能记录学生在第一课堂之外的活动，对学生综合素质进行评定，生成用户画像帮助同学们正确了解自身优势、弥补自身不足，并为学校决策提供科学依据。
      </p>
    ),
  },
])

const current = ref(0)
</script>

<template>
  <div class="w-full">
    <div class="flex justify-between">
      <div v-for="item, index in data" :key="index" class="relative">
        <img
          :class="current === index ? 'scale-100%' : 'scale-50%'"
          class="w-100px transition"
          :src="item.image"
          :alt="item.title"
        >
        <CircleSvg
          :actived="current === index"
          class="absolute left-50% top-50% translate--50%"
          @click="current = index"
        />
      </div>
    </div>
    <div class="relative mt-20px rounded-20px bg-white px-6 py-4">
      <div class="product-title-bg relative mb-20px min-w-163px w-fit text-center text-2xl">
        <a href="">{{ data[current]?.title }}</a>
      </div>

      <div class="text-[#0067D1] opacity-80">
        “{{ data[current]?.brief }}”
      </div>
      <div class="indent-2rem">
        <component :is="data[current]?.content" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.product-title-bg::after {
  content: '';
  top: 100%;
  left: 0;
  background-image: url('/images/service/underline.svg');
  background-position: center;
  background-repeat: no-repeat;
  width: 100%;
  height: 19px;
  display: block;
  position: absolute;
}
</style>
