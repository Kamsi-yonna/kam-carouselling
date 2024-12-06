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
    const heroVideoBlock = document.querySelectorAll(".hero-video_block");

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

    heroVideoBlock.forEach((element) => {
      gsap.fromTo(
        element,
        { opacity: 0, scale: 0 },
        {
          opacity: 1,
          scale: 1,
          duration: 2.5,
          ease: "power1.inOut",
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

  const projectHoverToReveal = () => {
    const clientTitles = document.querySelectorAll(".client-title");

    clientTitles.forEach((title) => {
      const projectImageBlock = title
        .closest(".client-list_block")!
        .querySelector(".project-image_block");

      gsap.set(projectImageBlock, { opacity: 0 });

      title.addEventListener("mouseenter", () => {
        gsap.to(projectImageBlock, {
          opacity: 1,
          scale: 1,
          rotation: 1,
          duration: 0.5,
          ease: "power1.inOut",
        });
      });

      title.addEventListener("mouseleave", () => {
        gsap.to(projectImageBlock, {
          opacity: 0,
          scale: 0.8,
          rotation: 0,
          duration: 0.5,
          ease: "power1.inOut",
        });
      });
    });
  };

  const animateIndexBlocks = () => {
    const indexBlocks = document.querySelectorAll(".index-block");

    indexBlocks.forEach((block, index) => {
      const anim = gsap.fromTo(
        block,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "power.inOut",
          paused: true,
          delay: index * 0.4,
        }
      );

      ScrollTrigger.create({
        trigger: block,
        start: "top 80%",
        // end: "bottom",
        onEnter: () => anim.play(),
        onLeaveBack: () => anim.pause(0),
      });
    });
  };

  const animateStepDescBlocks = () => {
    const indexBlocks = document.querySelectorAll(".step-description");

    indexBlocks.forEach((block, index) => {
      const anim = gsap.fromTo(
        block,
        { opacity: 0, x: 20 },
        {
          opacity: 1,
          x: 0, // Final position
          duration: 0.8,
          ease: "power1.inOut",
          paused: true,
          delay: index * 0.4,
        }
      );

      ScrollTrigger.create({
        trigger: block,
        start: "top 80%",
        onEnter: () => anim.play(),
        onLeaveBack: () => anim.pause(0),
      });
    });
  };

  onMounted(() => {
    fadeInAnimation();
    projectHoverToReveal();
    animateIndexBlocks();
    animateStepDescBlocks();
  });

  return { gsap };
}
