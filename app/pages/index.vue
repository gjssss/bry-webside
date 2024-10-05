<script setup lang="ts">
const contentContainer = ref<HTMLDivElement>()
onMounted(() => {
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.classList.add('show')
        }, 300)
        observer.unobserve(entry.target) // 只触发一次
      }
    })
  })
  Array.from(contentContainer.value?.children ?? []).forEach((element) => {
    element.classList.add('animate')
    observer.observe(element)
  })
})
</script>

<template>
  <div class="w-full of-hidden bg-#f5f5f5">
    <NavComp />
    <div class="absolute left-0 top-0 h-screen w-full">
      <div class="bg-image h-full w-full" />
    </div>
    <div class="relative z-1 h-screen w-full from-black/40 bg-gradient-to-r px-8 pt-8 md:pl-80px md:pt-80px">
      <div class="h-full max-w-564px flex flex-col justify-center gap-4 c-white">
        <div class="font-smiley-sans text-48px md:text-64px">
          We want you:
        </div>
        <div class="font-smiley-sans text-48px md:text-64px">
          我们在这里
        </div>
        <div class="font-smiley-sans text-48px md:text-64px">
          等风也等你
        </div>
        <div>
          成立于2000年初，北邮人团队已经陪伴了北邮师生20年有余。我们一直致力于服务北邮人，为北邮师生提供更加便利的服务，一代代北邮人薪火传承北邮人的服务实干精神，用青春书写北邮人的辉煌历程。而现在，无论你是新生还是老司机，只要你怀揣梦想，热爱探索，我们都欢迎你的加入！北邮人总有适合你的地方，让我们一起书写精彩的青春篇章！We Want You！
        </div>
        <div class="flex justify-center md:block">
          <a class="mt-4 inline-block cursor-pointer rounded-full bg-#fff8 px-8 py-4 backdrop-blur-sm">加入我们</a>
        </div>
      </div>
    </div>
    <div ref="contentContainer" class="relative z-1 px-4 pt-12 md:px-0">
      <div class="mx-a max-w-1280px">
        <ByrTitle>关于BYR-Team</ByrTitle>
        <div class="mt-3 px-6 py-3 text-sm leading-loose space-y-4 sm:py-9 lg:text-base sm:space-y-2">
          <p>北邮人团队是一个充满活力和创意的大家庭，北邮人团队由技术、设计、产品和新媒体4个大组组成，汇集着来自各个专业背景的优秀学子。在这里，你将有机会结识志同道合的朋友，分享彼此的想法，一起成长。每个组都有不同的分工和任务，每个组也都有各自的特色和风格。无论你是技术控，还是气氛组，是爱热闹，还是享受奋斗，你都能在北邮人团队找到你大展宏图的地方。</p>
          <p>有人称北邮人为第二神秘的团队，但其实北邮人做的一切早已和大家结缘。或许是你在北邮人论坛上的吐槽，或许是你预约的健身房，抑或是你在第二课堂上的签到......它们背后都有一群人在默默开发和维护，我们努力延续这些产品的生命力，并在此基础上为大家设计更好的功能。</p>
        </div>
      </div>
      <div class="mx-a max-w-1280px">
        <ByrTitle>我们的产品</ByrTitle>
        <OurProduction class="mt-20px" />
      </div>
      <div class="mx-a mt-40px max-w-1280px">
        <ByrTitle>部门介绍</ByrTitle>
        <OurDepartment class="mt-40px" />
      </div>
      <div class="mx-a mt-40px max-w-1280px">
        <ByrTitle>加入byrTeam的N个理由</ByrTitle>
        <ByrReason />
      </div>
      <div class="mx-a mt-40px max-w-1280px">
        <ByrTitle>学长学姐说</ByrTitle>
      </div>
      <div>
        <Saying class="mt-6" />
      </div>
      <div class="mx-a mt-40px max-w-1280px">
        <ByrTitle>招新公告与招新流程</ByrTitle>
        <img src="/images/process/process-desktop-2024.svg" alt="" class=">md:hidden mt-4 w-full">
        <img src="/images/process/process-mobile-2024.svg" alt="" class="mt-4 w-full md:hidden">
      </div>
    </div>
    <WebFooter />
  </div>
</template>

<style>
.bg-image {
  background-image: url('https://team.byrio.work/_next/static/media/demo-hero-bg.1a3a89ae.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
}
.animate {
  transition: all 0.3s ease-in-out;
  opacity: 0;
  transform: translateY(50px);
}
.show {
  opacity: 1;
  transform: translateY(0);
}
</style>
