export function updateBlur(params) {
  const scale = window.innerWidth / window.screen.width
  const baseBlur = 100
  const blur = baseBlur * scale + 64

  const blurContainer = document.querySelector('.gradient-container')
  if (blurContainer instanceof HTMLElement) {
    console.log(blurContainer.style.filter)
    blurContainer.style.filter = `blur(${blur}px)`
  }
}

export function initMouseBlur(params) {
  const interBubble = document.querySelector('.interactive')

  let curX = 0,
    curY = 0,
    tgX = 0,
    tgY = 0

  function move() {
    curX = curX + (tgX - curX) / 20
    curY = curY + (tgY - curY) / 20

    // @ts-ignore
    gsap.set(interBubble, {
      x: Math.round(curX),
      y: Math.round(curY),
    })

    requestAnimationFrame(move)
  }

  move()

  window.addEventListener('mousemove', (event) => {
    const rect = interBubble.getBoundingClientRect()

    console.log(event.clientX)
    console.log(rect)
    tgX = event.clientX - rect.width
    tgY = event.clientY - rect.height
  })
}
