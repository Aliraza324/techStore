/**
 * Centralized Animation Variants & Motion Configurations
 * Designed for Framer Motion / Motion library and CSS micro-interactions
 */

export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

export const fadeInUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export const fadeIn = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

export const slideInRight = {
  hidden: { opacity: 0, x: 40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export const slideInBottom = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      delay: 0.35,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export const floatingBadge = {
  animate: {
    y: [0, -8, 0],
    transition: {
      duration: 3.5,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

export const hoverScale = {
  whileHover: { scale: 1.04 },
  whileTap: { scale: 0.98 },
  transition: { type: "spring", stiffness: 400, damping: 17 },
};

export const arrowTranslate = {
  initial: { x: 0 },
  hover: { x: 4 },
  transition: { duration: 0.2 },
};

export const loaderPulse = {
  scale: [1, 1.08, 1],
  opacity: [0.7, 1, 0.7],
  transition: {
    duration: 2.2,
    repeat: Infinity,
    ease: "easeInOut",
  },
};

export const loaderFadeOut = {
  initial: { opacity: 1 },
  exit: { opacity: 0, scale: 1.02 },
  transition: { duration: 0.5, ease: "easeInOut" },
};


