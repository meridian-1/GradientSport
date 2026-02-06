import { updateBlur, initMouseBlur } from './updateBlur.js'
// @ts-nocheck

document.addEventListener('DOMContentLoaded', function () {
  let lenis
  let gsap

  // @ts-ignore
  lenis = new Lenis({
    autoRaf: true,
  })

  import('./burgerMenu.js').then((module) => {
    module.initBurgerMenu(lenis)
  })

  // @ts-ignore
  if (typeof window.gsap !== 'undefined') {
    // @ts-ignore
    gsap = window.gsap
    import('./parallax.js').then((module) => {
      module.initParallax(gsap)
    })
  }
})

// accordion functionality
const a = document.querySelectorAll('.accordion__col')
const accordionCol = document.querySelectorAll('.accordion__col')

accordionCol.forEach((col) => {
  col.addEventListener('mouseenter', () => {
    accordionCol.forEach((c) => c.classList.remove('active'))
    col.classList.add('active')
  })
})

updateBlur()
initMouseBlur()
