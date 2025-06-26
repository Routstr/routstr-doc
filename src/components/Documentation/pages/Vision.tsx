import React from 'react';
import {Card, CardContent, CardHeader, CardTitle} from '../../ui/card';
import {Server, ArrowUpRight, Settings, Shield} from 'lucide-react';
import {motion} from 'framer-motion';
import {GithubLogo} from '@/components/ui/Icons';

export function VisionSpec() {
  return (
    <div className="max-w-6xl mx-auto p-6 space-y-8">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold tracking-tight">Vision</h1>
        <p className="text-xl text-muted-foreground">
          The future of AI service delivery through intelligent, adaptive payment systems.
        </p>
      </div>

      <div className="grid gap-6">
        <Card className="p-6">
          <CardHeader>
            <CardTitle>Smart Client and Provider Architecture</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground">
              The Smart Client and Provider architecture introduces an intelligent, adaptive system where clients
              efficiently interact with servers that dynamically adjust parameters like cost per request to optimize
              operations. This ecosystem emphasizes:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Card className="p-4 bg-muted/50">
                <h4 className="font-semibold mb-2">For Service Providers</h4>
                <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                  <li>Revenue optimization through dynamic pricing</li>
                  <li>Intelligent resource distribution</li>
                  <li>Real-time market adaptability</li>
                  <li>Community-driven reputation building</li>
                </ul>
              </Card>
              <Card className="p-4 bg-muted/50">
                <h4 className="font-semibold mb-2">For Smart Clients</h4>
                <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                  <li>Cost-effective provider selection</li>
                  <li>Flexible payment handling</li>
                  <li>Trust-based decision making</li>
                  <li>Automated optimization</li>
                </ul>
              </Card>
            </div>
            <div className="space-y-4">
              <h4 className="font-semibold">Core Components</h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Card className="p-4 bg-muted/50">
                  <div className="flex items-center gap-2 mb-2">
                    <Settings className="w-4 h-4" />
                    <h5 className="font-medium">Smart Client Features</h5>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Decentralized provider discovery, intelligent selection, and real-time cost monitoring
                  </p>
                </Card>
                <Card className="p-4 bg-muted/50">
                  <div className="flex items-center gap-2 mb-2">
                    <Server className="w-4 h-4" />
                    <h5 className="font-medium">Provider Capabilities</h5>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Dynamic pricing, model management, and instant payment processing
                  </p>
                </Card>
                <Card className="p-4 bg-muted/50">
                  <div className="flex items-center gap-2 mb-2">
                    <Shield className="w-4 h-4" />
                    <h5 className="font-medium">Trust Infrastructure</h5>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Nostr-based provider validation and community-driven reputation
                  </p>
                </Card>
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
            href="https://github.com/ecash-402/ecash-402-specs"
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
                    <span className="group-hover:text-primary transition-colors">ecash-402-specs</span>
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
                    Explore the complete Smart Client and Provider Architecture specifications, including advanced cost
                    management strategies, and more.
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
