import Lenis from "@studio-freight/lenis";

export default defineNuxtPlugin((nuxtApp) => {
  const lenis = new Lenis({
    lerp: 0.05,
    wheelMultiplier: 0.8,
    infinite: true,
    duration: 1.2,
    smoothWheel: true,
  });

  function raf(time: number) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);
});
