export function initParallax(gsap) {
  gsap.utils.toArray('[data-parallax-wrapper]').forEach(container => {
    const image = container.querySelector('[data-parallax-image]');
    const tl = gsap.timeline();
  });

  gsap.utils.toArray('[data-parallax-wrapper]').forEach((container) => {
    const img = container.querySelector('[data-parallax-target]');
    if (!img) return;

    const getDelta = () => {
      const containerHeight = container.getBoundingClientRect().height;
      const imgHeight = img.getBoundingClientRect().height;
      return Math.max(0, (imgHeight - containerHeight) / 2);
    };

    gsap.set(img, { willChange: 'transform' });

    gsap.fromTo(
      img,
      { y: () => -getDelta(), ease: 'none' },
      {
        y: () => getDelta(),
        ease: 'none',
        scrollTrigger: {
          trigger: container,
          scrub: true,
          invalidateOnRefresh: true,
        },
      },
    );
  });
}
