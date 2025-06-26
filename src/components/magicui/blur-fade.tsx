'use client';

import {motion, useInView, Variants, MotionProps} from 'framer-motion';
import React, {useRef} from 'react';

interface BlurFadeProps extends MotionProps {
  children: React.ReactNode;
  className?: string;
  inView?: boolean;
  amount?: number | 'some' | 'all';
  variants?: Variants;
}

export function BlurFade({children, className, inView = false, amount = 0.2, variants, ...rest}: BlurFadeProps) {
  const ref = useRef(null);
  const inViewResult = useInView(ref, {once: true, amount});
  const isInView = !inView || inViewResult;
  const defaultVariants: Variants = {
    hidden: {
      opacity: 0,
      filter: 'blur(10px)',
    },
    visible: {
      opacity: 1,
      filter: 'blur(0px)',
    },
  };

  return (
    <motion.div
      ref={ref}
      variants={variants || defaultVariants}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      className={className}
      {...rest}>
      {children}
    </motion.div>
  );
}
