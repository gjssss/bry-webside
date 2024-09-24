import type { AnimationControls } from 'motion'
import { animate, spring } from 'motion'

export function useSpringRef(num: Ref<number>) {
  let anim: null | AnimationControls = null
  const springNum = ref(num.value)
  const watcher = watch(num, (newVal) => {
    const oldVal = springNum.value
    const delta = newVal - oldVal
    if (anim) {
      anim.stop()
    }
    anim = animate((process) => {
      springNum.value = delta * process + oldVal
    }, {
      easing: spring({
        damping: 50,
        stiffness: 400,
      }),
    })
  })

  onUnmounted(watcher)

  return springNum
}
