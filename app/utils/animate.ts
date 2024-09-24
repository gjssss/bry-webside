export function createAnimation(callback: (delta: number) => any) {
  let lastTimestamp = 0

  function animate(timestamp: number) {
    // 计算 delta time（单位：毫秒）
    const deltaTime = timestamp - lastTimestamp
    lastTimestamp = timestamp

    // 将 delta time 传递给回调函数
    callback(deltaTime)

    // 使用 requestAnimationFrame 继续下一帧
    requestAnimationFrame(animate)
  }

  // 开始动画
  requestAnimationFrame((timestamp) => {
    lastTimestamp = timestamp // 初始化时间戳
    animate(timestamp)
  })
}
