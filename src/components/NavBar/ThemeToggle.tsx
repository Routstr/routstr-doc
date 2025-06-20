'use client';

import {useTheme} from 'next-themes';
import {Button} from '../ui/button';
import {MoonIcon, SunIcon} from 'lucide-react';
import {useEffect, useState} from 'react';

export const ThemeToggle = () => {
  const {resolvedTheme, setTheme} = useTheme();
  const [mounted, setMounted] = useState(false);

  const toggleTheme = () => {
    setTheme(resolvedTheme === 'dark' ? 'light' : 'dark');
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  // Prevent hydration mismatch by not rendering until mounted
  if (!mounted) {
    return (
      <Button variant="outline" size="icon" className="rounded-full">
        <SunIcon />
      </Button>
    );
  }

  return (
    <Button onClick={toggleTheme} variant="outline" size="icon" className="rounded-full">
      {resolvedTheme === 'dark' ? <SunIcon /> : <MoonIcon />}
    </Button>
  );
};
