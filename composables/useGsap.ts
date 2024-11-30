// ~/composables/useGsap.ts
import { onMounted } from "vue";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function useGsap() {
  const fadeInAnimation = () => {
    const fadeInElements = document.querySelectorAll("[data-fade-anim]");

    fadeInElements.forEach((element) => {
      gsap.fromTo(
        element,
        { opacity: 0, y: 20, x: 100 },
        {
          opacity: 1,
          y: 0,
          x: 0,
          duration: 0.8,
          ease: "power1.inOut",
          scrollTrigger: {
            trigger: element,
            start: "top 70%",
            toggleActions: "play none none none",
            markers: false,
          },
        }
      );
    });
  };

  onMounted(() => {
    fadeInAnimation();
  });

  return { gsap };
}
