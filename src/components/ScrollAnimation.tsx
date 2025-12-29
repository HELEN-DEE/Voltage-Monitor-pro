// components/ScrollAnimation.tsx
'use client';

import { motion, useInView, useAnimation, Variants, cubicBezier } from 'framer-motion';
import { useEffect, useRef } from 'react';

interface ScrollAnimationProps {
  children: React.ReactNode;
  variants?: Variants;
  delay?: number;
  threshold?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'scale';
  className?: string;
  triggerOnce?: boolean;
}

const defaultVariants = {
  up: {
    hidden: { opacity: 0, y: 60, scale: 0.95 }, // Reduced y from 80 to 60
    visible: { opacity: 1, y: 0, scale: 1 }
  },
  down: {
    hidden: { opacity: 0, y: -60, scale: 0.95 }, // Reduced y from -80 to -60
    visible: { opacity: 1, y: 0, scale: 1 }
  },
  left: {
    hidden: { opacity: 0, x: -60, scale: 0.95 }, // Reduced x from -80 to -60
    visible: { opacity: 1, x: 0, scale: 1 }
  },
  right: {
    hidden: { opacity: 0, x: 60, scale: 0.95 }, // Reduced x from 80 to 60
    visible: { opacity: 1, x: 0, scale: 1 }
  },
  scale: {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 }
  }
};

const transition = {
  duration: 0.7, // Slightly faster
  ease: cubicBezier(0.25, 0.46, 0.45, 0.94)
};

export const ScrollAnimation: React.FC<ScrollAnimationProps> = ({
  children,
  variants,
  delay = 0,
  threshold = 0.1,
  direction = 'up',
  className = '',
  triggerOnce = false
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
  once: triggerOnce,
  margin: '0px',
  amount: threshold // 
});
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    } else if (!triggerOnce) {
      controls.start('hidden');
    }
  }, [isInView, controls, triggerOnce]);

  const selectedVariants = variants || defaultVariants[direction];

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={selectedVariants}
      transition={{ ...transition, delay }}
      className={`overflow-hidden ${className}`} // Added overflow-hidden
    >
      {children}
    </motion.div>
  );
};

// Stagger container component for multiple items
interface StaggerContainerProps {
  children: React.ReactNode;
  staggerChildren?: number;
  delayChildren?: number;
  className?: string;
}

export const StaggerContainer: React.FC<StaggerContainerProps> = ({
  children,
  staggerChildren = 0.15, // Slightly faster stagger
  delayChildren = 0,
  className = ''
}) => {
  const variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren,
        delayChildren
      }
    }
  };

  return (
    <motion.div
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, margin: '0px' }} // Changed from -50px
      className={`overflow-hidden ${className}`} // Added overflow-hidden
    >
      {children}
    </motion.div>
  );
};

// Stagger item component
export const StaggerItem: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const variants = {
    hidden: { opacity: 0, y: 40, scale: 0.95 }, // Reduced y from 50 to 40
    visible: { opacity: 1, y: 0, scale: 1 }
  };

  return (
    <motion.div variants={variants} className="overflow-hidden">
      {children}
    </motion.div>
  );
};