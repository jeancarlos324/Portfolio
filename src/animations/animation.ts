export const cardAnimation = {
  hidden: {
    transform: "scale(0) rotate(180deg)",
    opacity: 0,
    transition: {
      delay: 0.3,
    },
  },
  visible: {
    transform: " scale(1) rotate(0deg)",
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
  exit: {
    transform: "scale(0) rotate(-180deg)",
    opacity: 0,
    transition: {
      duration: 0.3,
    },
  },
};

export const dropIn = {
  hidden: {
    y: "-100vh",
    opacity: 0,
  },
  visible: {
    y: "0",
    opacity: 1,
    transition: {
      duration: 0.1,
      type: "spring",
      damping: 25,
      stiffness: 500,
    },
  },
  exit: {
    y: "100vh",
    opacity: 0,
  },
};

export const imageAnimate = {
  offscreen: { y: -40, x: 0, opacity: 0 },
  onscreen: {
    // x: 50,
    y: 0,
    opacity: 1,
    // rotate: [0, 10, 0],
    transition: { type: "spring", bounce: 0.5, duration: 1.2 },
  },
};
