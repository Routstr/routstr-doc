'use client';

import {useTheme} from 'next-themes';
import {DotPattern} from '../magicui/dot-pattern';
import {Particles} from '../magicui/particles';
import clsx from 'clsx';
import {useEffect, useState} from 'react';

export const BackgroundPattern = () => {
  const {resolvedTheme} = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const isLightTheme = resolvedTheme === 'light';

  return (
    <div className="dot-background">
      <DotPattern
        width={20}
        height={20}
        cx={1}
        cy={1}
        cr={1}
        className={clsx('[mask-image:radial-gradient(ellipse,rgba(0,0,0,0.3)_30%,black_50%)]', 'dark:fill-slate-700')}
      />
      <Particles className="absolute inset-0" quantity={100} ease={80} color={isLightTheme ? '#000' : '#fff'} refresh />
    </div>
  );
};
