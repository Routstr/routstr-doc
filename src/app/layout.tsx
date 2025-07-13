import type {Metadata} from 'next';
import {Geist, Geist_Mono} from 'next/font/google';
import './globals.css';
import React from 'react';
import {CSPostHogProvider} from '@/components/Provider/CSPostHogProvider';
import {ThemeProvider} from 'next-themes';
import {TooltipProvider} from '@radix-ui/react-tooltip';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'routstr-client',
  description: 'routstr-client gateway',
  icons: {
    icon: [
      {
        url: '/routstr.png',
        type: 'image/svg+xml',
        sizes: '400x400',
      },
    ],
    apple: [
      {
        url: '/routstr.png',
        type: 'image/svg+xml',
        sizes: '400x400',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <CSPostHogProvider>
          <ThemeProvider attribute="class">
            <TooltipProvider>{children}</TooltipProvider>
          </ThemeProvider>
        </CSPostHogProvider>
      </body>
    </html>
  );
}
