<script setup lang="ts">
defineProps<{
  group: {
    avator: string
    name: string
    time: string
    messages: {
      render: VNode
      props?: object
    }[]
  }
  direction: 'left' | 'right'
}>()
</script>

<template>
  <div class="flex gap-20px" :class="direction === 'right' ? 'flex-row-reverse' : ''">
    <div>
      <img :src="group.avator">
    </div>
    <div class="flex flex-col gap-5px" :class="direction === 'right' ? 'items-end' : 'items-start'">
      <div class="flex items-center gap-10px" :class="direction === 'right' ? 'flex-row-reverse' : ''">
        <div>{{ group.name }}</div>
        <div class="text-14px c-gray">
          {{ group.time }}
        </div>
      </div>
      <MediaMsgItem
        v-for="(item, index) in group.messages"
        :key="index"
        :pos="direction"
        :is-end="index === group.messages.length - 1"
        v-bind="item.props"
      >
        <component :is="item.render" />
      </MediaMsgItem>
    </div>
  </div>
</template>

<style>

</style>
