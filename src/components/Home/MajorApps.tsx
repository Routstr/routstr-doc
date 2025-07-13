'use client';

import React from 'react';
import {motion} from 'framer-motion';
import {Card} from '../ui/card';
import {Badge} from '../ui/badge';
import {ExternalLink, Code, Sparkles, Layers, Cpu} from 'lucide-react';

interface AppCardProps {
  name: string;
  description: string;
  url: string;
  icon: React.ReactElement;
  features: string[];
  downloads?: string;
}

function AppCard({name, description, url, icon, features, downloads}: AppCardProps) {
  return (
    <motion.div whileHover={{scale: 1.02}} whileTap={{scale: 0.98}} className="h-full">
      <Card className="glass flex flex-col h-full rounded-lg border bg-background/50 backdrop-blur-sm p-6 shadow-sm transition-all hover:shadow-lg hover:bg-background/60">
        <div className="flex items-center gap-3 mb-4">
          {icon}
          <div className="flex-1">
            <h3 className="text-xl font-semibold">{name}</h3>
            {downloads && (
              <Badge variant="secondary" className="text-xs">
                {downloads} downloads
              </Badge>
            )}
          </div>
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors">
            <ExternalLink className="h-4 w-4" />
          </a>
        </div>

        <p className="text-muted-foreground mb-4 flex-1">{description}</p>

        <div className="flex flex-wrap gap-2">
          {features.map((feature, index) => (
            <Badge key={index} variant="outline" className="text-xs">
              {feature}
            </Badge>
          ))}
        </div>
      </Card>
    </motion.div>
  );
}

export default function MajorApps() {
  const apps = [
    {
      name: 'Cline',
      description:
        'Autonomous coding agent right in your IDE. The most popular open-source AI coding assistant with MCP marketplace integration.',
      url: 'https://cline.bot/',
      icon: <Code className="h-8 w-8 text-blue-500" />,
      features: ['VS Code Extension', 'Autonomous Coding', 'MCP Marketplace', 'Tool Calling'],
      downloads: '593k+',
    },
    {
      name: 'Roo Code',
      description:
        'A whole dev team of AI agents in your editor. Multiple specialized modes for coding, debugging, and architecture.',
      url: 'https://roocode.com/',
      icon: <Layers className="h-8 w-8 text-purple-500" />,
      features: ['Multi-Agent System', 'Deep Context', 'Diff-based Edits', 'Model Agnostic'],
      downloads: '592k+',
    },
    {
      name: 'Kilo Code',
      description:
        'The best AI coding agent for VS Code. Combines all features of Cline, Roo, and adds orchestrator mode for complex workflows.',
      url: 'https://kilocode.ai/',
      icon: <Sparkles className="h-8 w-8 text-green-500" />,
      features: ['Orchestrator Mode', 'Error Recovery', 'Context7 Integration', 'Hallucination-free'],
    },
    {
      name: 'Goose',
      description:
        'Open source AI agent by Block that supercharges software development by automating coding tasks with tool calling capabilities.',
      url: 'https://block.github.io/goose/docs/quickstart',
      icon: <Cpu className="h-8 w-8 text-orange-500" />,
      features: ['Desktop & CLI', 'Browser Control', 'Extension System', 'Session Management'],
    },
  ];

  return (
    <div className="justify-center px-4 sm:px-6 xl:px-0">
      <motion.section
        initial={{opacity: 0, y: 20}}
        animate={{opacity: 1, y: 0}}
        transition={{duration: 0.6, delay: 0.2}}
        className="flex items-center justify-center w-full py-8 md:py-12 lg:py-16">
        <div className="container grid items-center justify-center gap-8 px-4 text-center md:px-6">
          {/* Header */}
          <div className="space-y-4">
            <motion.div
              initial={{opacity: 0, y: 20}}
              animate={{opacity: 1, y: 0}}
              transition={{duration: 0.6, delay: 0.3}}></motion.div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Major AI Coding Apps
              <span className="block text-primary">Easily Adapt to Routstr-Client + eCash</span>
            </h2>
            <p className="mx-auto max-w-[800px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Popular AI coding tools can seamlessly integrate with our eCash-powered infrastructure. These applications
              require minimal configuration changes to unlock private, instant micropayments and eliminate traditional
              payment friction - making AI coding truly permissionless and efficient.
            </p>
          </div>

          {/* Apps Grid */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 max-w-7xl mx-auto">
            {apps.map((app, index) => (
              <motion.div
                key={app.name}
                initial={{opacity: 0, y: 20}}
                animate={{opacity: 1, y: 0}}
                transition={{duration: 0.6, delay: 0.4 + index * 0.1}}>
                <AppCard {...app} />
              </motion.div>
            ))}
          </div>

          {/* OpenAI Compatibility Notice */}
          <motion.div
            initial={{opacity: 0, y: 20}}
            animate={{opacity: 1, y: 0}}
            transition={{duration: 0.6, delay: 0.8}}
            className="mt-12">
            <Card className="glass max-w-4xl mx-auto p-8 bg-gradient-to-r from-background/80 to-background/60 backdrop-blur-sm border-primary/20">
              <div className="flex flex-col md:flex-row items-center gap-6">
                <div className="flex-shrink-0">
                  <div className="p-3 rounded-full bg-primary/10">
                    <Code className="h-8 w-8 text-primary" />
                  </div>
                </div>
                <div className="text-center md:text-left">
                  <h3 className="text-2xl font-bold mb-2">One-Line Integration with eCash</h3>
                  <p className="text-muted-foreground mb-4">
                    <strong>Any OpenAI-compatible tool</strong> can be adapted to work with our eCash infrastructure in
                    minutes. Just update your API endpoint to unlock instant, private micropayments with zero KYC, no
                    credit cards, and sub-cent precision for truly permissionless AI access.
                  </p>
                  <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                    <Badge variant="outline">eCash Powered</Badge>
                    <Badge variant="outline">Zero KYC</Badge>
                    <Badge variant="outline">Instant Payments</Badge>
                    <Badge variant="outline">Sub-cent Precision</Badge>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
}
