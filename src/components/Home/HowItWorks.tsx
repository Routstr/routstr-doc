'use client';

import {motion} from 'framer-motion';
import {ArrowRight, Code2, CreditCard, RefreshCw, Shield} from 'lucide-react';
import {Card, CardContent, CardHeader, CardTitle} from '../ui/card';

export const HowItWorks = () => {
  const steps = [
    {
      icon: CreditCard,
      title: 'Prepare E-Cash Payment',
      description: 'Local Proxy Wallet generates a Cashu e-cash note for your AI request',
      detail: 'X-Cashu header',
    },
    {
      icon: Code2,
      title: 'Send API Request',
      description: 'Your OpenAI API call is sent with the e-cash note in the X-Cashu header',
      detail: 'Standard OpenAI endpoints',
    },
    {
      icon: Shield,
      title: 'Process & Execute',
      description: '402 Server validates payment and forwards your request to OpenAI anonymously',
      detail: 'Millisatoshi precision',
    },
    {
      icon: RefreshCw,
      title: 'Return Change',
      description: 'Any overpayment is returned as a new e-cash note via X-Cashu header for future use',
      detail: 'X-Cashu header',
    },
  ];

  return (
    <section className="py-10 md:py-16 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{opacity: 0, y: 20}}
          animate={{opacity: 1, y: 0}}
          transition={{duration: 0.6}}
          className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">How It Works</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Our header-based payment system enables seamless micropayments with millisatoshi precision. No accounts, no
            tracking, just pure anonymous AI access.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{opacity: 0, y: 20}}
              animate={{opacity: 1, y: 0}}
              transition={{duration: 0.6, delay: index * 0.1}}
              className="relative">
              <Card className="h-full text-center">
                <CardHeader className="pb-2">
                  <div className="w-12 h-12 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                    <step.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="w-8 h-8 mx-auto mb-2 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">
                    {index + 1}
                  </div>
                  <CardTitle className="text-lg">{step.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm mb-3">{step.description}</p>
                  <div className="inline-flex items-center px-3 py-1 bg-primary/10 rounded-full text-xs font-medium text-primary">
                    {step.detail}
                  </div>
                </CardContent>
              </Card>

              {/* Arrow between steps (hidden on mobile) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2 z-10">
                  <ArrowRight className="w-6 h-6 text-muted-foreground" />
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Code Example */}
        <motion.div
          initial={{opacity: 0, y: 20}}
          animate={{opacity: 1, y: 0}}
          transition={{duration: 0.6, delay: 0.6}}
          className="bg-secondary/50 rounded-lg p-6 border">
          <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <Code2 className="w-5 h-5" />
            Example API Request
          </h3>
          <div className="bg-black/90 text-green-400 p-4 rounded-md font-mono text-sm overflow-x-auto">
            <div className="text-gray-400"># Make an anonymous AI request with e-cash payment</div>
            <div className="mt-2">
              <span className="text-blue-400">curl</span> <span className="text-yellow-400">-i</span>{' '}
              <span className="text-yellow-400">-X</span> POST https://ecash.otrta.me/v1/chat/completions \
            </div>
            <div className="ml-2">
              <span className="text-yellow-400">-H</span>{' '}
              <span className="text-green-300">&quot;Content-Type: application/json&quot;</span> \
            </div>
            <div className="ml-2">
              <span className="text-yellow-400">-H</span>{' '}
              <span className="text-green-300">&quot;X-Cashu: cashuAeyJ0b2tlbiI6W3sicHJvb2ZzIjpb...&quot;</span> \
            </div>
            <div className="ml-2">
              <span className="text-yellow-400">-d</span>{' '}
              <span className="text-green-300">
                &apos;{'{'}...JSON payload with model and messages...{'}'}&apos;
              </span>
            </div>
            <div className="mt-4 text-gray-400"># Response includes change if overpaid:</div>
            <div className="text-purple-400">X-Cashu: cashuAeyJ0b2tlbiI6W3sicHJvb2ZzIjpb...</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
