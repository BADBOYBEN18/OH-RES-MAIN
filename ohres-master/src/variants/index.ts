import { Variants } from 'framer-motion';

export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

export const slideInFromRight: Variants = {
  hidden: { opacity: 0, x: 100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: 'easeOut' },
  },
};
export const slideInFromLeft: Variants = {
  hidden: {
    opacity: 0,
    x: -100, // Starts 100px to the left
  },
  visible: {
    opacity: 1,
    x: 0, // Moves to its natural position
    transition: {
      type: 'spring', // Optional: Try 'spring' for a bouncy effect
      damping: 10, // Adjust if using 'spring'

      stiffness: 100, // Adjust if using 'spring'
      duration: 0.8, // Default duration
      ease: [0.25, 0.1, 0.25, 1], // Smoother easing (optional)
      delay: 0.2, // Optional delay (seconds)
    },
  },
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
};

// Export all variants as a single object if preferred
export const variants = {
  fadeInUp,
  staggerContainer,
  slideInFromRight,
  scaleIn,
};
