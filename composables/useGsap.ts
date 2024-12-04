// ~/composables/useGsap.ts
import { onMounted } from "vue";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function useGsap() {
  const fadeInAnimation = () => {
    const fadeInElements = document.querySelectorAll("[data-fade-anim]");
    const heroFadeInAnimation = document.querySelectorAll("[hero-fade-anim]");
    const articleFadeInAnimation = document.querySelectorAll(".article-block");

    fadeInElements.forEach((element) => {
      const anim = gsap.fromTo(
        element,
        { opacity: 0, y: 20, x: 100 },
        {
          opacity: 1,
          y: 0,
          x: 0,
          duration: 0.8,
          ease: "power1.inOut",
          paused: true,
        }
      );

      // ScrollTrigger for playing the animation
      ScrollTrigger.create({
        trigger: element,
        start: "top 70%",
        onEnter: () => anim.play(),
      });

      // ScrollTrigger for resetting the animation
      ScrollTrigger.create({
        trigger: element,
        start: "top bottom",
        onLeaveBack: () => anim.pause(0),
      });
    });

    articleFadeInAnimation.forEach((element) => {
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

    heroFadeInAnimation.forEach((element) => {
      gsap.fromTo(
        element,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power1.inOut",
        }
      );
    });
  };

  onMounted(() => {
    fadeInAnimation();
  });

  return { gsap };
}
