<script setup lang="tsx">
import dayjs from 'dayjs'

const scrollElem = ref()
const group1 = {
  avator: '/images/departments/media/avatar-purple-monster.svg',
  name: 'You',
  time: '05:04 PM',
  messages: [
    {
      render: <>新媒体组好酷啊！好想加！！❤</>,
    },
  ],
}
const group2 = {
  avator: '/images/departments/media/avatar-blue-cutie.svg',
  name: '新媒体组某不知名成员壹',
  time: '05:06 PM',
  messages: [
    {
      render: <>Hi，欢迎来到有趣灵魂聚集地新媒体组！ 我们是——</>,
    },
    {
      render: <>＃生活观察员＃</>,
    },
    {
      render:
      <>
        <p>在这里，与你同行，写你所想。</p>
        <p>
          我们驻守在官方新媒体平台，捕捉校园生活中的小确幸、小美好，以图文定格北邮人的独家记忆。
        </p>
      </>,
    },
    {
      render: (
        <div class="w-full flex justify-between">
          <div>
            <div class="msg-title-bg w-fit">
              <div class="relative w-fit">#春日邮啊邮：</div>
            </div>
            <div><a class="underline" href="#">藏在北三环里的小众宝藏打卡地</a></div>
            <div><a class="underline" href="#">北六环约会圣地，城区40min可达</a></div>
            <div><a class="underline" href="#">春日邮花图鉴</a></div>
          </div>
          <div>
            <div class="msg-title-bg w-fit">
              <div class="relative w-fit">#北邮爱情故事：</div>
            </div>
            <div><a class="underline" href="#">BYR七夕不规则访谈</a></div>
            <div><a class="underline" href="#">BYR520约会方式一览</a></div>
          </div>
        </div>
      ),
      props: {
        full: true,
      },
    },
  ],
}

const group3 = {
  avator: '/images/departments/media/avatar-dinosaur.svg',
  name: '新媒体组某不知名成员贰',
  time: '05:12 PM',
  messages: [
    {
      render: <>我们也是——</>,
    },
    {
      render: <>＃浪漫的幻想家＃</>,
    },
    {
      render:
      <>
        <p>在这里，梦境碰撞现实，一切皆有可能。</p>
        <p>我们点燃灵感的焰火，将天马行空的脑洞付诸笔下，摘星揽月、逐光织梦。</p>
      </>,
    },
    {
      render:
      <>
        <p><a class="underline">世界破破烂烂，小动物缝缝补补</a></p>
        <p><a class="underline">超能力与副作用的化学反应</a></p>
      </>,
    },
  ],
}
const group4 = ref()
const text = ref()
function sendMsg() {
  if (group4.value) {
    group4.value.messages.push({
      render: <>{text.value}</>,
    })
  }
  else {
    group4.value = {
      avator: '/images/departments/media/avatar-purple-monster.svg',
      name: 'You',
      time: dayjs().format('hh:mm A'),
      messages: [
        {
          render: <>{text.value}</>,
        },
      ],
    }
  }
  text.value = ''
  scrollElem.value.scrollTop = scrollElem.value.scrollHeight
}
</script>

<template>
  <div class="h-full flex flex-col of-hidden b b-#E5E7EB rounded-20px b-solid">
    <div class="h-75px flex items-center justify-between b-b b-#E5E7EB b-solid bg-#F6F8FC p-4 tracking-widest">
      <div class="text-2xl c-#333">
        🎉招新啦🎉
      </div>
    </div>
    <div ref="scrollElem" class="hide-scroll h-400px of-auto p-4">
      <div class="media-bg flex flex-col gap-20px">
        <MediaMsgGroup :group="group1" direction="right" />
        <div class="w-full text-center c-gray-5">
          北邮人团队 新媒体组 拍了拍 你，并发送了一条加群邀请
        </div>
        <MediaMsgGroup :group="group2" direction="left" />
        <MediaMsgGroup :group="group3" direction="left" />
        <MediaMsgGroup v-if="group4" :group="group4" direction="right" />
        <div class="h-50px w-full" />
      </div>
    </div>
    <div class="flex-1 b-t b-#E5E7EB b-solid p-4">
      <div class="h-full w-full flex items-center gap-20px rounded-full bg-#f6f8fc px-11 py-3">
        <img class="cursor-pointer" src="/images/departments/media/icon-pin.svg">
        <div class="h-full w-2px bg-gray-2" />
        <input
          v-model="text"
          type="text"
          class="flex-1 bg-transparent outline-none"
          placeholder="请输入..."
          @keypress.enter="sendMsg"
        >
        <img class="cursor-pointer" src="/images/departments/media/icon-smile.svg">
        <img class="cursor-pointer" src="/images/departments/media/icon-photo.svg">
        <img class="cursor-pointer" src="/images/departments/media/icon-location.svg">
      </div>
    </div>
  </div>
</template>

<style>
.media-bg {
  background-image: url('/images/departments/media/star-bg.svg');
}
</style>
