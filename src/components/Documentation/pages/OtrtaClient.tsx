import React from 'react';
import {Card, CardContent, CardHeader, CardTitle} from '../../ui/card';
import {ArrowUpRight} from 'lucide-react';
import {motion} from 'framer-motion';
import {GithubLogo} from '@/components/ui/Icons';

export function OtrtaClient() {
  return (
    <div className="max-w-6xl mx-auto p-6 space-y-8">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold tracking-tight">Otrta Client Implementation</h1>
        <p className="text-xl text-muted-foreground">
          A privacy-focused payment gateway enabling anonymous micropayments using Cashu e-cash notes.
        </p>
      </div>

      <div className="grid gap-6">
        {/* Getting Started Section */}
        <Card className="p-6">
          <CardHeader>
            <CardTitle>Quick Start Guide</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h4 className="font-semibold">Running the Client</h4>
                <Card className="p-4 bg-muted/50">
                  <pre className="text-sm">
                    <code>
                      # Start the client{'\n'}
                      docker-compose up{'\n\n'}# Or run in background{'\n'}
                      docker-compose up -d
                    </code>
                  </pre>
                </Card>
                <p className="text-sm text-muted-foreground">
                  Access the user interface at <code className="text-primary">http://localhost:3332</code>
                </p>
              </div>
              <div className="space-y-4">
                <h4 className="font-semibold">API Integration</h4>
                <Card className="p-4 bg-muted/50">
                  <pre className="text-sm">
                    <code>
                      # Local OpenAI API endpoint{'\n'}
                      http://localhost:3333{'\n\n'}# No API key required
                    </code>
                  </pre>
                </Card>
                <p className="text-sm text-muted-foreground">
                  Connect your OpenAI-compatible tools to the local endpoint for anonymous access
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* GitHub Repository Link */}
        <motion.div
          initial={{opacity: 0, y: 20}}
          animate={{opacity: 1, y: 0}}
          transition={{duration: 0.6, ease: 'easeOut'}}>
          <motion.a
            href="https://github.com/9qeklajc/ecash-402-client"
            target="_blank"
            rel="noopener noreferrer"
            className="block"
            whileHover="hover"
            initial="initial"
            animate="animate">
            <Card className="group hover:shadow-xl transition-all duration-300 border-2 border-muted hover:border-primary/50 cursor-pointer overflow-hidden bg-gradient-to-r from-background to-background hover:from-primary/5 hover:to-background">
              <CardHeader>
                <motion.div
                  className="flex items-center gap-3"
                  variants={{
                    hover: {x: 10},
                    initial: {x: 0},
                  }}
                  transition={{duration: 0.3}}>
                  <motion.div
                    variants={{
                      initial: {rotate: 0},
                      hover: {rotate: 360},
                    }}
                    transition={{duration: 0.5}}>
                    <GithubLogo className="w-6 h-6 group-hover:text-primary transition-colors" />
                  </motion.div>
                  <CardTitle className="flex items-center gap-3 text-xl">
                    <span className="group-hover:text-primary transition-colors">ecash-402-client</span>
                    <motion.div
                      variants={{
                        initial: {x: -10, opacity: 0},
                        hover: {x: 0, opacity: 1},
                      }}
                      transition={{duration: 0.3}}>
                      <ArrowUpRight className="w-5 h-5" />
                    </motion.div>
                  </CardTitle>
                </motion.div>
              </CardHeader>
              <CardContent>
                <motion.div
                  className="space-y-4"
                  variants={{
                    hover: {y: -5},
                    initial: {y: 0},
                  }}
                  transition={{duration: 0.3}}>
                  <p className="text-muted-foreground">
                    Explore the complete implementation of the privacy-focused payment gateway, including the Local
                    Proxy, 402 Server, and advanced payment features.
                  </p>
                  <motion.div
                    className="h-0.5 bg-gradient-to-r from-primary/50 via-primary to-primary/50 rounded-full"
                    variants={{
                      initial: {scaleX: 0},
                      hover: {scaleX: 1},
                    }}
                    transition={{duration: 0.4}}
                  />
                </motion.div>
              </CardContent>
            </Card>
          </motion.a>
        </motion.div>
      </div>
    </div>
  );
}
