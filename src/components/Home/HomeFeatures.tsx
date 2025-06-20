'use client';

import react from 'react';
import {motion} from 'framer-motion';
import {Card} from '../ui/card';
import {Shield, Coins, ArrowLeftRight, Zap, RefreshCw, Globe} from 'lucide-react';

export function FeatureCard({
  icon,
  title,
  description,
}: {
  icon: react.ReactElement;
  title: string;
  description: string;
}) {
  return (
    <motion.div whileHover={{scale: 1.05}} whileTap={{scale: 0.95}}>
      <Card className="glass flex flex-col items-center justify-center gap-4 rounded-lg border bg-background p-6 shadow-sm transition-all hover:shadow-md h-full">
        {icon}
        <h3 className="text-xl font-semibold text-center">{title}</h3>
        <p className="text-muted-foreground text-center">{description}</p>
      </Card>
    </motion.div>
  );
}

export function FeaturesCards() {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      <FeatureCard
        icon={<Shield className="h-12 w-12 text-green-500" />}
        title="Anonymous Access"
        description="Access OpenAI's models without revealing your identity. No accounts, no tracking, complete privacy."
      />
      <FeatureCard
        icon={<Coins className="h-12 w-12 text-orange-500" />}
        title="Millisatoshi Precision"
        description="Pay exactly what you consume with millisatoshi precision. No more overpayment waste or rounding errors."
      />
      <FeatureCard
        icon={<ArrowLeftRight className="h-12 w-12 text-blue-500" />}
        title="Header-Based Payments"
        description="Seamless integration using X-Cashu headers for effortless micropayments."
      />
      <FeatureCard
        icon={<RefreshCw className="h-12 w-12 text-purple-500" />}
        title="Change Management"
        description="Automatically receive unused funds as Cashu notes for future AI service requests via X-Cashu headers."
      />
      <FeatureCard
        icon={<Zap className="h-12 w-12 text-yellow-500" />}
        title="API Compatibility"
        description="Works seamlessly with standard OpenAI API endpoints. Drop-in replacement for existing integrations."
      />
      <FeatureCard
        icon={<Globe className="h-12 w-12 text-cyan-500" />}
        title="Fee Handling"
        description="Smart fee management through change notes or integration with private fee-free Cashu mints."
      />
    </div>
  );
}

export default function HomeFeatures() {
  return (
    <div className="justify-center px-4 sm:px-6 xl:px-0">
      <motion.section
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        transition={{duration: 0.2, delay: 0.1}}
        className="flex items-center justify-center w-full py-8 md:py-12 lg:py-16">
        <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6 lg:gap-10">
          <div className="space-y-3">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Key Features</h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Revolutionary e-cash technology meets AI accessibility. Our payment gateway combines Cashu notes with
              millisatoshi precision to deliver truly private and efficient AI payments.
            </p>
          </div>
          <FeaturesCards />
        </div>
      </motion.section>
    </div>
  );
}
