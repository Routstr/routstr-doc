'use client';

import {motion} from 'framer-motion';
import React, {useEffect, useState} from 'react';

interface Props {
  left: string;
  delay: number;
  duration: number;
}

const Raindrop = ({left, delay, duration}: Props) => (
  <motion.div
    className="raindrop"
    initial={{y: -100, opacity: 0}}
    animate={{y: 800, opacity: 1}}
    transition={{
      repeat: Infinity,
      repeatType: 'loop',
      duration,
      delay,
      ease: 'linear',
    }}
    style={{left}}
  />
);

const RainEffect: React.FC = () => {
  const [raindrops, setRaindrops] = useState<Props[] | null>(null);

  useEffect(() => {
    // generate raindrops only on client after hydration
    const drops = Array.from({length: 30}).map(() => ({
      left: `${Math.random() * 100}vw`,
      delay: Math.random() * 5,
      duration: 2 + Math.random() * 3,
    }));
    setRaindrops(drops);
  }, []);

  // While waiting for client generation, render nothing or a placeholder
  if (!raindrops) return null;

  return (
    <div className="rain-container">
      {raindrops.map(({left, delay, duration}, i) => (
        <Raindrop key={i} left={left} delay={delay} duration={duration} />
      ))}
    </div>
  );
};

export default RainEffect;
