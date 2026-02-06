export function blur(params) {
  console.log('window.innerHeight:', window.innerHeight)
  console.log('window.screen.width:', window.screen.width)

  const scale = window.innerWidth / window.screen.width
  const baseBlur = 100
  console.log(scale)
  
  const blur = baseBlur * scale + 64

  const blurContainer = document.querySelector('.gradient-container')
  if (blurContainer instanceof HTMLElement) {
    console.log(blurContainer.style.filter)
    blurContainer.style.filter = `blur(${blur}px)`
  }

  console.log('blur:', blur)
}

