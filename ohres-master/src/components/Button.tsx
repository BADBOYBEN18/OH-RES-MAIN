import { motion } from 'framer-motion';
import { IconType } from 'react-icons';
import { FaArrowRight } from 'react-icons/fa';
type AnimatedButtonProps = {
  text: string;
  icon?: IconType | React.ReactNode; // Accepts either React Icon component or any React node
  iconPosition?: 'left' | 'right'; // Icon position relative to text
  className?: string; // Additional Tailwind classes
  onClick?: () => void; // Click handler
  iconAnimation?: boolean; // Toggle icon animation
  scale?: number; // Custom hover scale
  shadow?: string; // Custom shadow
};

const AnimatedButton = ({
  text,
  icon: Icon = FaArrowRight, // Default to FaArrowRight if no icon provided
  iconPosition = 'right',
  className = '',
  onClick,
  iconAnimation = true,
  scale = 1.05,
  shadow = '0 0 15px rgba(109, 253, 131, 0.5)',
}: AnimatedButtonProps) => (
  <motion.button
    className={`bg-maingreen text-secondary px-4 py-3 flex items-center gap-2 rounded-lg cursor-pointer mt-3 md:mt-0
       font-medium ${className}`}
    whileHover={{
      scale,
      boxShadow: shadow,
      transition: { duration: 0.3 },
    }}
    whileTap={{ scale: 0.95 }}
    onClick={onClick}
  >
    {iconPosition === 'left' && (
      <motion.span
        animate={iconAnimation ? { y: [0, 4, 0] } : {}}
        transition={
          iconAnimation
            ? {
                repeat: Infinity,
                duration: 1.5,
                ease: 'easeInOut',
              }
            : {}
        }
      >
        {typeof Icon === 'function' ? <Icon /> : Icon}
      </motion.span>
    )}

    {text}

    {iconPosition === 'right' && (
      <motion.span
        animate={iconAnimation ? { x: [0, 4, 0] } : {}}
        transition={
          iconAnimation
            ? {
                repeat: Infinity,
                duration: 1.5,
                ease: 'easeInOut',
              }
            : {}
        }
      >
        {typeof Icon === 'function' ? <Icon /> : Icon}
      </motion.span>
    )}
  </motion.button>
);

export default AnimatedButton;