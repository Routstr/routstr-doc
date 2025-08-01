'use client';

import {motion, Variants} from 'framer-motion';
import {useMemo, ReactNode} from 'react';

type FadeTextProps = {
  className?: string;
  direction?: 'up' | 'down' | 'left' | 'right';
  framerProps?: Variants;
  children: ReactNode;
};

export function FadeIn({
  direction = 'up',
  className,
  framerProps = {
    hidden: {opacity: 0},
    show: {opacity: 1, transition: {type: 'spring'}},
  },
  children,
}: FadeTextProps) {
  const directionOffset = useMemo(() => {
    const map = {up: 20, down: -20, left: -20, right: 20};
    return map[direction];
  }, [direction]);

  const axis = direction === 'up' || direction === 'down' ? 'y' : 'x';

  const FADE_ANIMATION_VARIANTS = useMemo(() => {
    const {hidden, show, ...rest} = framerProps as {
      [name: string]: {[name: string]: number; opacity: number};
    };

    return {
      ...rest,
      hidden: {
        ...(hidden ?? {}),
        opacity: hidden?.opacity ?? 0,
        [axis]: hidden?.[axis] ?? directionOffset,
      },
      show: {
        ...(show ?? {}),
        opacity: show?.opacity ?? 1,
        [axis]: show?.[axis] ?? 0,
      },
    };
  }, [directionOffset, axis, framerProps]);

  return (
    <motion.div initial="hidden" animate="show" viewport={{once: true}} variants={FADE_ANIMATION_VARIANTS}>
      <motion.span className={className}>{children}</motion.span>
    </motion.div>
  );
}
