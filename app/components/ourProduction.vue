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
    url: 'https://bbs.byr.cn',
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
    url: 'https://dekt.bupt.edu.cn/qr?f=mp',
  },
  {
    title: '校园网指南',
    image: '/images/service/service-neticu-wiki.png',
    content: (
      <>
        <p>
          “校园网该怎么连？” “
          <b>mobile</b>
          和
          <b>portal</b>
          有什么区别？”
        </p>
        <p>“北邮校园网收费吗？” “不在校内又该怎么访问校内网站？”</p>
        <p>“我怎么又上不了网了？” “游戏延迟为什么这么高？”</p>
        <p>“不是吧，怎么网又炸了！”</p>
        <p>
          <b>校内诊断平台链接</b>
          {' '}
          <a
            class="ml-4 italic underline"
            target="_blank"
            href="https://buptnet.icu"
          >
            link
          </a>
        </p>
      </>
    ),
    brief: '网又炸了？校园网使用指南和诊断平台重磅上线！',
    url: 'https://wiki.buptnet.icu',
  },
  {
    title: 'Byrio社区',
    image: '/images/service/service-byrio.png',
    content:
      <>
        <p>
          BYRIOSC是一个围绕互联网技术与开源文化，主题涵盖科技、开发、设计、媒体，由开发者和创意工作者组成的线上交流、线下活动的学生社区。我们力求吸引富有热情和兴趣的开发者、创造者们加入，凝聚北邮各大学生技术组织的力量，建设成为最富有活力和创造力的学生技术社区。
        </p>
      </>,
    brief: '“FOR HACKER, GEEK & CREATOR LIKE YOU”',
    url: 'https://byrio.org',
  },
  {
    title: 'Gitlab',
    image: '/images/service/service-gitlab.png',
    content: (
      <>
        <p>
          GitLab是由GitLab公司开发的、基于Git的集成软件开发平台。另外，GitLab且具有wiki以及在线编辑、issue跟踪功能、CI/CD等功能。
        </p>
      </>
    ),
    brief: '“CI/CD真是太好用了.jpg”',
    url: 'https://git.byr.moe',
  },
  {
    title: '开源镜像服务',
    image: '/images/service/service-mirrors.png',
    content: (
      <p>
        当你还在为pip install, go add, cargo build, npm
        install发愁的时候，可以使用这个。
      </p>
    ),
    brief: '一个字：快！',
    url: 'https://mirrors.byr.ink',
  },
  {
    title: 'Overleaf',
    image: '/images/service/service-overleaf.png',
    content: (
      <p>
        Overleaf是一个云端协作式LaTeX编辑器，可用于编写和发布论文。这一编辑器与很多科学杂志出版商有合作关系，不但提供官方期刊的LaTeX模板，还能直接将文件提交至这些出版社。
      </p>
    ),
    brief: '科研必备',
    url: 'https://overleaf.byrio.work/',
  },
  {
    title: '研效体系',
    image: '/images/service/service-efficiency.png',
    content:
      <>
        我们拥有比肩大厂的研效体系，blazing
        fast的CI/CD流程，超丝滑的docker部署方案。
      </>,
    brief: '自动化部署什么的真是太酷了！',
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
          class="w-100px cursor-pointer transition"
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
      <a v-if="data[current]?.url" :href="data[current]?.url" class="i-carbon-arrow-right absolute right-20px top-20px rotate--45 cursor-pointer text-24px c-#0067D1" />
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
