// sum.test.js
import { assert, expect, it } from 'vitest'
import { nextTick, ref } from 'vue'
import { useVelocity } from './useVelocity.js'

function sleep(time: number) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true)
    }, time)
  })
}

it('test velocity', async () => {
  const distance = ref(100)
  const { velocity } = useVelocity(distance)
  await sleep(200)
  distance.value = 300
  await nextTick()
  assert.closeTo(velocity.value, /* 200m / 0.2s = 1000 */1000, 1000 * 0.05)
  await sleep(100)
  distance.value = 1300
  await nextTick()
  assert.closeTo(velocity.value, /* 1000m / 0.1s = 1000 */10000, 10000 * 0.05)
})
