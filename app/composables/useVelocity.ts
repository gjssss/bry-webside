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
      return deltaNumber / (deltaTime / 1000)
    }
    else {
      startTime = new Date()
      lastNumber = num.value
      timer = setTimeout(() => {
        clearTimeout(timer!)
      }, _gap)
      return 0
    }
  }

  watch(num, () => {
    velocity.value = getVelocity()
    if (_onChange) {
      _onChange(velocity.value)
    }
  }, {
    immediate: true,
  })

  return {
    getVelocity,
    velocity,
  }
}

interface UseVelocityOption {
  gap?: number
  onChange?: (velocity: number) => void
}
