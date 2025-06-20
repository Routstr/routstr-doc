'use client';

import clsx from 'clsx';
import Image from 'next/image';
import React from 'react';

interface LogoProps extends React.ComponentProps<'div'> {
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

export const Logo = ({className, size = 'lg', ...props}: LogoProps) => {
  const sizeClasses = {
    sm: 'h-6 w-6',
    md: 'h-8 w-8',
    lg: 'h-20 w-20',
    xl: 'h-16 w-16',
  };

  const imageSizes = {
    sm: {width: 24, height: 24},
    md: {width: 32, height: 32},
    lg: {width: 48, height: 48},
    xl: {width: 64, height: 64},
  };

  return (
    <div className={clsx('flex items-center justify-center', sizeClasses[size], className)} {...props}>
      <Image
        src="/otrta.svg"
        alt="logo"
        width={imageSizes[size].width}
        height={imageSizes[size].height}
        className="w-full h-full object-contain mix-blend-multiply dark:mix-blend-normal"
        priority
      />
    </div>
  );
};
