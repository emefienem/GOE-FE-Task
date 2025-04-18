import gsap from "gsap";

type AnimationType =
  | "fade-in"
  | "slide-left"
  | "slide-right"
  | "slide-up"
  | "slide-down"
  | "zoom-in"
  | "rotate-in";

const useAnimation = () => {
  return {
    animate: (name: AnimationType, options?: gsap.TweenVars) => {
      const baseConfig = {
        stagger: 0.05,
        duration: 0.5,
        ease: "power2.out",
        ...options,
      };

      switch (name) {
        case "fade-in":
          return {
            opacity: 0,
            y: 20,
            ...baseConfig,
          };

        case "slide-left":
          return {
            x: 100,
            opacity: 0,
            ...baseConfig,
          };

        case "slide-right":
          return {
            x: -100,
            opacity: 0,
            ...baseConfig,
          };

        case "slide-up":
          return {
            y: 50,
            opacity: 0,
            ...baseConfig,
          };

        case "slide-down":
          return {
            y: -50,
            opacity: 0,
            ...baseConfig,
          };

        case "zoom-in":
          return {
            scale: 0.9,
            opacity: 0,
            ...baseConfig,
          };

        case "rotate-in":
          return {
            rotate: -10,
            opacity: 0,
            ...baseConfig,
          };

        default:
          return baseConfig;
      }
    },
  };
};

export default useAnimation;
