import {Shapes, Shield, Zap, Coins} from 'lucide-react';
import Link from 'next/link';
import {Button} from '../ui/button';

export const HomeHero = () => {
  return (
    <div className="-mt-4 flex items-center min-h-[80vh] justify-center px-4 sm:px-6 xl:px-0">
      <div className="text-center w-full">
        <h1 className="relative z-10 mt-6 text-3xl sm:text-4xl md:text-5xl lg:text-6xl sm:max-w-[25ch] mx-auto font-bold tracking-tight leading-[1.2] lg:leading-[1.2]">
          <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
            Routstr Proxy
          </span>{' '}
          A Privacy-Focused{' '}
          <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
            AI Payment Gateway
          </span>{' '}
          with E-Cash
        </h1>

        <p className="mt-8 text-base sm:text-lg lg:text-xl sm:max-w-4xl mx-auto text-muted-foreground">
          Access OpenAI&apos;s Large Language Models anonymously using Cashu e-cash notes. Pay exactly what you consume
          with millisatoshi precision - no overpayment waste, no identity tracking, no account required.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-3 max-w-2xl mx-auto">
          <div className="flex items-center gap-2 px-4 py-2 bg-secondary/40 rounded-full text-sm">
            <Shield className="w-4 h-4 text-green-500" />
            Anonymous Access
          </div>
          <div className="flex items-center gap-2 px-4 py-2 bg-secondary/40 rounded-full text-sm">
            <Coins className="w-4 h-4 text-orange-500" />
            Microsatoshi Precision
          </div>
          <div className="flex items-center gap-2 px-4 py-2 bg-secondary/40 rounded-full text-sm">
            <Zap className="w-4 h-4 text-blue-500" />
            X-Cashu Headers
          </div>
        </div>

        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 px-6 sm:px-0">
          <Button size="lg" className="group h-12 text-base z-10 rounded-md w-full md:w-auto gap-3" asChild>
            <Link href="/documentation">
              Get Started <Shapes className="!h-5 !w-5 group-hover:-rotate-12 transition-transform" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};
