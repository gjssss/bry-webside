import { ref, watch } from 'vue'

/**
 * Compute Velocity for changing number
 * @param num number Ref which needs to watch and compute velocity
 * @param option useVelocity Option
 */
export function useVelocity(num: Ref<number>, option?: UseVelocityOption) {
  const _option = option ?? {}
  const _gap = _option.gap ?? 300
  const _onChange = _option.onChange

  const velocity = ref()

  let startTime: Date | null = null
  let timer: null | NodeJS.Timeout = null
  let lastNumber: null | number = null

  function getVelocity() {
    if (startTime) {
      const endTime = new Date()
      const deltaTime = endTime.getTime() - startTime.getTime()
      startTime = endTime
      const deltaNumber = num.value - lastNumber!
      lastNumber = num.value
      const v = deltaNumber / (deltaTime / 1000)
      if (_onChange) {
        _onChange(velocity.value)
      }
      return v
    }
    else {
      startTime = new Date()
      lastNumber = num.value
      return 0
    }
  }

  const watcher = watch(num, () => {
    velocity.value = getVelocity()
    if (timer) {
      clearTimeout(timer)
    }
    timer = setTimeout(() => {
      timer = null
      velocity.value = 0
    }, _gap)
  }, {
    immediate: true,
  })

  onUnmounted(watcher)

  return {
    getVelocity,
    velocity,
  }
}

interface UseVelocityOption {
  gap?: number
  onChange?: (velocity: number) => void
}
