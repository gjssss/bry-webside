<script setup lang="tsx">
const current = ref(0)
const width = ref(0)
const cardWidth = ref(720)
const computedStyle = computed(() => {
  return {
    'transform': `translateX(${(-current.value) * (cardWidth.value + 30)}px)`,
    'padding-left': `${width.value / 3}px`,
    '--w': '100%',
    '--h': '80%',
  }
})
onMounted(() => {
  if (document) {
    width.value = window.document.documentElement.clientWidth
    addEventListener('resize', () => {
      width.value = window.document.documentElement.clientWidth
    })
  }
})
const dataList = ref([
  {
    img: '/images/senpai-saying/senpai-male.svg',
    name: 'zekin',
    department: '技术组',
    info: '22级-计算机学院',
    desc:
    <>
      <div class="flex gap-2">
        <div class="msg-title-bg ml-2">
          <div class="relative z-1">
            北邮摸鱼硕士
          </div>
        </div>
        <div>大厂实习</div>
      </div>
      <div class="flex gap-2">
        <div>救火队长</div>
        <div class="msg-title-bg ml-2">
          <div class="relative z-1">
            各类竞赛奖项
          </div>
        </div>
      </div>
    </>,
    saying: <>从构建处理器的第一个门电路开始……到串联起每一个北邮人的计算机网络……再到服务北邮人的各种服务，在这里你可以体验计算机的方方面面。现在，开启你最伟大的探索吧：从计算机体系结构到计算机网络技术实践。</>,
  },
  {
    img: '/images/senpai-saying/senpai-female-4.svg',
    name: 'momo',
    department: '新媒体组',
    info: '21级-网络空间安全学院',
    desc:
    <>
      <div class="flex gap-2">
        <div class="msg-title-bg ml-2">
          <div class="relative z-1">
            永远年轻的大三学姐^^
          </div>
        </div>
        <div>可进可退可盐可甜</div>
      </div>
      <div class="flex gap-2">
        <div>除了工科摄影遛狗插花啥都干</div>
        <div class="msg-title-bg ml-2">
          <div class="relative z-1">
            国奖获得者
          </div>
        </div>
      </div>
    </>,
    saying:
    <>
      年级（纪）越大，BYR Team越成为我的快乐老家，可可爱爱的学妹，温温柔柔的学弟，酷酷飒飒的老板老板娘以及一些可爱的小碎嘴子。
      <b>成年人的生活太需要这样的轻松和志趣</b>
      ，我们是线上的好友和伙伴，也是线下的小姐妹、好朋友。如果一定要用一个词来形容我们，那便是
      <b>松弛与理想并存</b>
      吧。
    </>,
  },
  {
    img: '/images/senpai-saying/senpai-female-2.svg',
    name: 'Sprr',
    department: '设计组',
    info: '20级-数字媒体设计学院',
    desc:
    <>
      <div class="flex gap-2">
        <div>三好学生</div>
        <div class="msg-title-bg ml-2">
          <div class="relative z-1">
            智育top1
          </div>
        </div>
      </div>
      <div class="flex gap-2">
        <div class="msg-title-bg ml-2">
          <div class="relative z-1">
            没有滑板的铲屎官不是好设计师
          </div>
        </div>
      </div>
    </>,
    saying: <>这里有最自由和包容的土壤，有最可爱和有趣的灵魂。发现问题、设计构思、解决问题。在北邮人，让设计真正的落地，服务更多的人。</>,
  },
  {
    img: '/images/senpai-saying/senpai-male.svg',
    name: '好圆圆圆',
    department: '产品组',
    info: '20级-数字媒体设计学院',
    desc:
    <>
      <div class="flex gap-2">
        <div class="msg-title-bg ml-2">
          <div class="relative z-1">
            国奖获得者
          </div>
        </div>
        <div>支教团美术老师一枚</div>
        {' '}
        <div>救火队长</div>

      </div>
      <div class="flex gap-2">
        <div>德艺双馨</div>
        <div class="msg-title-bg ml-2">
          <div class="relative z-1">
            十余项设计竞赛获奖
          </div>
        </div>
      </div>
    </>,
    saying: <>在北邮人团队，你会收获亲自设计的项目上线服务全体北邮人的机会，你会收获为同一目标努力工作的好友，欢迎你加入北邮人团队大家庭，收获属于自己的未来！</>,
  },
  {
    img: '/images/senpai-saying/senpai-female-4.svg',
    name: 'zekin',
    department: '技术组',
    info: '22级-计算机学院',
    desc:
    <>
      <div class="flex gap-2">
        <div class="msg-title-bg ml-2">
          <div class="relative z-1">
            中科院在读博士
          </div>
        </div>
        <div>前技术组划水负责人</div>
      </div>
      <div class="flex gap-2">
        <div>人工SMT&BGA平台</div>
        <div class="msg-title-bg ml-2">
          <div class="relative z-1">
            初创&大厂实习
          </div>
        </div>
      </div>
    </>,
    saying: <>在这里可以接触各路神仙，挑战各种问题，发展各式能力，探索各类可能。一个自驱的团队可以帮你能力与乐趣两开花，解决现实问题的同时丰富你的履历。如果你觉得 [这里忘了] 就去建设它，那这里就是最适合的地方，改变北邮的机会正触手可及！It’s now or never !</>,
  },
  {
    img: '/images/senpai-saying/senpai-female-3.svg',
    name: '+1',
    department: '新媒体组',
    info: '17级-数字媒体设计学院',
    desc:
    <>
      <div class="flex gap-2">
        <div class="msg-title-bg ml-2">
          <div class="relative z-1">
            北邮人产品设计新媒体前负责人
          </div>
        </div>
        <div>活力研究生</div>
      </div>
      <div class="flex gap-2">
        <div class="msg-title-bg ml-2">
          <div class="relative z-1">
            退休老干部(除了技术啥都干)
          </div>
        </div>
      </div>
    </>,
    saying:
    <>
      BYR Team在北邮是一个响当当的名号，在这里确实认识了很多
      <b>技术巨巨、设计大佬、运营鬼才</b>
      。重要的是大家都有
      <b>有趣而自由的灵魂</b>
      ，团队也有供大家自由创作和发挥才能的空间。可能有些组织退出了就不再联系，但加入BYR Team，就会一直都是BYR Team的一员。我们有自己的传承，我们拥抱新人。
    </>,
  },
])
</script>

<template>
  <div class="relative">
    <div class="absolute inset-y-0 left-0 z-10 w-1/3 from-[#F5F5F5] to-transparent bg-gradient-to-r max-sm:hidden" />
    <div class="absolute inset-y-0 right-0 z-10 w-1/3 from-[#F5F5F5] to-transparent bg-gradient-to-l max-sm:hidden" />
    <div :style="computedStyle" class="flex gap-30px transition-transform">
      <SayingItem v-for="(item, index) in dataList" :key="index" :data="item" :width="cardWidth">
        <template #desc>
          <component :is="item.desc" />
        </template>
        <template #default>
          <component :is="item.saying" />
        </template>
      </SayingItem>
    </div>
    <div class="absolute bottom-0 right-80px z-11 flex gap-8">
      <div
        class="rounded-full p-3 shadow transition-all"
        :class="current > 0 ? 'cursor-pointer hover:bg-#175ddc hover:c-white bg-white c-black' : 'bg-#d4d4d4 c-#a1a1a1'"
        @click="current > 0 ? current -= 1 : 1"
      >
        <div class="i-carbon-arrow-left text-32px" />
      </div>
      <div
        class="rounded-full p-3 shadow transition-all"
        :class="current < dataList.length - 1 ? 'cursor-pointer hover:bg-#175ddc hover:c-white bg-white c-black' : 'bg-#d4d4d4 c-#a1a1a1'"
        @click="current < dataList.length - 1 ? current += 1 : 1"
      >
        <div class="i-carbon-arrow-right text-32px" />
      </div>
    </div>
  </div>
</template>
