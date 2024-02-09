export const fadeInStaggered = (
  direction: "" | "down" | "left" | "up" | "right",
  type: "tween" | "linear",
  duration: number
) => ({
  closed: {
    x: direction === "left" ? 100 : direction === "right" ? -100 : 0,
    y: direction === "up" ? 100 : direction === "down" ? -100 : 0,
    opacity: 0,
  },
  open: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      type,
      duration,
      ease: "easeOut",
    },
  },
});

export const sideMenuVariants = {
  closed: {
    transition: {
      staggerChildren: 0.2,
      staggerDirection: -1,
      when: "afterChildren",
    },
  },
  open: {
    transition: {
      staggerChildren: 0.33,
      staggerDirection: 1,
      delayChildren: 0.1,
      when: "beforeChildren",
    },
  },
};

export const menuVariants = {
  closed: {
    right: "-100%",
    transition: {
      staggerChildren: 0.2,
      staggerDirection: -1,
      when: "afterChildren",
    },
  },
  open: {
    right: "0%",
    transition: {
      staggerChildren: 0.2,
      staggerDirection: 1,
      when: "beforeChildren",
    },
  },
};

export const fadeIn = (
  direction: "" | "down" | "left" | "up" | "right",
  type: "tween" | "linear",
  delay: number,
  duration: number
) => ({
  hidden: {
    x: direction === "left" ? 100 : direction === "right" ? -100 : 0,
    y: direction === "up" ? 100 : direction === "down" ? -100 : 0,
    opacity: 0,
  },
  show: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      type,
      delay,
      duration,
      ease: "easeOut",
    },
  },
});

export const slideIn = (
  direction: "" | "down" | "left" | "up" | "right",
  type: "tween" | "linear",
  delay: number,
  duration: number
) => ({
  hidden: {
    x: direction === "left" ? "-100%" : direction === "right" ? "100%" : 0,
    y: direction === "up" ? "-100%" : direction === "down" ? "100%" : 0,
  },
  show: {
    x: 0,
    y: 0,
    transition: {
      type,
      delay,
      duration,
      ease: "easeOut",
    },
  },
});

export const zoomIn = (delay: number, duration: number) => ({
  hidden: {
    scale: 0,
    opacity: 0,
  },
  show: {
    scale: 1,
    opacity: 1,
    transition: {
      type: "tween",
      delay,
      duration,
      ease: "easeOut",
    },
  },
});

export const zoomOut = (delay: number, duration: number) => ({
  hidden: {
    scale: 2,
    opacity: 0,
  },
  show: {
    scale: 1,
    opacity: 1,
    transition: {
      type: "tween",
      delay,
      duration,
      ease: "easeOut",
    },
  },
});
