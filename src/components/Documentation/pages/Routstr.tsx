import {Card, CardContent, CardHeader, CardTitle} from '@/components/ui/card';
import {GithubLogo} from '@/components/ui/Icons';
import {motion} from 'framer-motion';
import {ArrowUpRight, Eye, Shield, Zap} from 'lucide-react';
import React from 'react';
import {NavigationLinks} from './NavigationLinks';
import {SectionHeading} from './SectionLinkCopy';

export function Routstr() {
  return (
    <div className="max-w-6xl mx-auto p-6 space-y-8">
      <div id="overview">
        <SectionHeading level={1} id="overview" className="mb-6">
          Routstr
        </SectionHeading>
        <p className="text-lg text-muted-foreground mb-8">
          A Decentralised LLM Routing Marketplace that brings the convenience of the OpenRouter experience to the
          permissionless, censorship‑resistant world of Nostr and Bitcoin.
        </p>
      </div>

      <section className="space-y-6" id="features">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card className="border-l-4 border-l-blue-500">
            <CardContent className="p-6">
              <div className="flex items-center gap-2 mb-2">
                <Shield className="w-5 h-5 text-blue-500" />
                <h3 className="font-semibold">Privacy First</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                No emails, no sign-ups, no identity tracking. Just Bitcoin and privacy.
              </p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-green-500">
            <CardContent className="p-6">
              <div className="flex items-center gap-2 mb-2">
                <Zap className="w-5 h-5 text-green-500" />
                <h3 className="font-semibold">Instant Payments</h3>
              </div>
              <p className="text-sm text-muted-foreground">Pay per usage with Lightning-fast Cashu tokens.</p>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-purple-500">
            <CardContent className="p-6">
              <div className="flex items-center gap-2 mb-2">
                <Eye className="w-5 h-5 text-purple-500" />
                <h3 className="font-semibold">Top AI Models</h3>
              </div>
              <p className="text-sm text-muted-foreground">Access all the latest AI models without the surveillance.</p>
            </CardContent>
          </Card>
        </div>

        <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950/30 dark:to-purple-950/30 rounded-lg p-6">
          <h2 className="text-2xl font-bold mb-4">Why Routstr?</h2>
          <p className="text-muted-foreground mb-4">
            If using Cursor or Claude Code while billing to your credit card is the gold standard for AI coding—if you
            don't mind using your real identity and being spied upon—then Roo Code and Goose, plugging into Routstr, are
            the gold standard if you are Satoshi and want to stay private.
          </p>
        </div>
      </section>

      <div className="space-y-12">
        {/* Ecosystem Integration Section */}
        <section id="ecosystem-integration">
          <SectionHeading level={2} id="ecosystem-integration" className="mb-4">
            Routstr Ecosystem Integration
          </SectionHeading>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mb-8">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Routstr Marketplace</h3>
              <p className="text-muted-foreground">
                Routstr-Client seamlessly integrates with the Routstr Marketplace, a provider discovery platform where
                users can find and connect with service providers. Pay providers directly with e-cash for their
                services.
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                  Discover service providers
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                  Direct provider payments
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                  Privacy-preserving transactions
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">AI-Powered Experience</h3>
              <p className="text-muted-foreground">
                The Routstr AI ecosystem enhances your payment experience with intelligent routing, fraud detection, and
                personalized recommendations while maintaining complete privacy.
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-orange-500 rounded-full mr-3"></span>
                  Smart payment routing
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-red-500 rounded-full mr-3"></span>
                  AI fraud prevention
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-indigo-500 rounded-full mr-3"></span>
                  Personalized insights
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Roadmap Section */}
        <section id="roadmap">
          <SectionHeading level={2} id="roadmap" className="mb-6">
            Roadmap
          </SectionHeading>
          <div className="space-y-6">
            <div className="p-6 border rounded-lg">
              <h3 className="text-xl font-semibold mb-2">RIP-01: API Proxy & Payments</h3>
              <p className="text-muted-foreground">OpenAI-API Proxy with Cashu micropayments for LLM inference</p>
            </div>
            <div className="p-6 border rounded-lg">
              <h3 className="text-xl font-semibold mb-2">RIP-02: Node Listing</h3>
              <p className="text-muted-foreground">Nostr event announcements for inference nodes and capabilities</p>
            </div>
            <div className="p-6 border rounded-lg">
              <h3 className="text-xl font-semibold mb-2">RIP-03: Frontend Discovery</h3>
              <p className="text-muted-foreground">Web interface for browsing and filtering available nodes</p>
            </div>
            <div className="p-6 border rounded-lg">
              <h3 className="text-xl font-semibold mb-2">RIP-04 & RIP-05: Quality & Privacy</h3>
              <p className="text-muted-foreground">Anonymous evaluations and smart clients with Tor/proxy routing</p>
            </div>
          </div>
        </section>

        {/* GitHub Repository Link */}
        <section id="github-repository">
          <motion.div
            initial={{opacity: 0, y: 20}}
            animate={{opacity: 1, y: 0}}
            transition={{duration: 0.6, ease: 'easeOut'}}>
            <motion.a
              href="https://github.com/Routstr/protocol"
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
                      <span className="group-hover:text-primary transition-colors">routstr protocol</span>
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
                    <p className="text-muted-foreground">Explore the complete routstr specification</p>
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
        </section>
      </div>

      <NavigationLinks currentSection="routstr" variant="compact" showTitle={false} />
    </div>
  );
}
