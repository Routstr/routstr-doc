'use client';

import React, {useEffect, useState} from 'react';
import {motion} from 'framer-motion';

export default function LogoFusion() {
  const [fusionStage, setFusionStage] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const interval = setInterval(() => {
      setFusionStage(prev => (prev + 1) % 4);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  if (!mounted) {
    return (
      <div className="relative flex items-center justify-center py-16 overflow-hidden mt-4">
        <div className="relative flex items-center justify-center space-x-8 lg:space-x-16">
          <div className="relative">
            <img src="/otrta.svg" alt="otrta" className="w-48 h-28 lg:w-64 lg:h-36 object-contain rounded-xl" />
          </div>
          <div className="relative flex items-center">
            <div className="w-6 h-6 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full blur-sm" />
          </div>
          <div className="relative">
            <img src="/routstr.png" alt="routstr" className="w-32 h-32 lg:w-40 lg:h-40 object-contain rounded-xl" />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative flex items-center justify-center py-16 overflow-hidden mt-4">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 via-blue-900/20 to-purple-900/20 blur-3xl" />

      <div className="relative flex items-center justify-center space-x-8 lg:space-x-16">
        <motion.div
          className="relative"
          animate={{
            x: fusionStage >= 2 ? 20 : 0,
            scale: fusionStage >= 2 ? 0.9 : 1,
          }}
          transition={{duration: 1.5, ease: 'easeInOut'}}>
          <div className="relative">
            <img src="/otrta.svg" alt="otrta" className="w-48 h-28 lg:w-64 lg:h-36 object-contain rounded-xl" />

            <motion.div
              className="absolute inset-0 bg-blue-500/30 rounded-lg blur-xl"
              animate={{
                opacity: fusionStage === 1 || fusionStage === 3 ? 0.6 : 0.2,
                scale: fusionStage === 1 || fusionStage === 3 ? 1.1 : 1,
              }}
              transition={{duration: 1, ease: 'easeInOut'}}
            />
          </div>

          <motion.div
            className="absolute -bottom-16 left-1/2 transform -translate-x-1/2"
            animate={{opacity: fusionStage === 0 || fusionStage === 1 ? 1 : 0.7}}>
            <span className="text-sm font-medium text-blue-400">Payment Gateway</span>
          </motion.div>
        </motion.div>

        <div className="relative flex items-center">
          <svg
            width="160"
            height="80"
            viewBox="0 0 160 80"
            className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
            {/* Network bridge connections */}
            <motion.g
              stroke="url(#bridgeGradient)"
              strokeWidth="2"
              fill="none"
              animate={{opacity: fusionStage >= 1 ? 0.8 : 0.3}}>
              <defs>
                <linearGradient id="bridgeGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#60a5fa" />
                  <stop offset="50%" stopColor="#a855f7" />
                  <stop offset="100%" stopColor="#c084fc" />
                </linearGradient>
              </defs>

              {/* Main bridge line */}
              <motion.line
                x1="20"
                y1="40"
                x2="140"
                y2="40"
                animate={{
                  pathLength: fusionStage >= 1 ? 1 : 0,
                  opacity: fusionStage >= 1 ? 1 : 0,
                }}
                transition={{duration: 1.5, ease: 'easeInOut'}}
              />

              {/* Branch connections */}
              <motion.line
                x1="60"
                y1="40"
                x2="40"
                y2="20"
                animate={{
                  pathLength: fusionStage >= 1 ? 1 : 0,
                  opacity: fusionStage >= 1 ? 0.7 : 0,
                }}
                transition={{duration: 1, delay: 0.3}}
              />
              <motion.line
                x1="60"
                y1="40"
                x2="40"
                y2="60"
                animate={{
                  pathLength: fusionStage >= 1 ? 1 : 0,
                  opacity: fusionStage >= 1 ? 0.7 : 0,
                }}
                transition={{duration: 1, delay: 0.4}}
              />
              <motion.line
                x1="100"
                y1="40"
                x2="120"
                y2="20"
                animate={{
                  pathLength: fusionStage >= 1 ? 1 : 0,
                  opacity: fusionStage >= 1 ? 0.7 : 0,
                }}
                transition={{duration: 1, delay: 0.5}}
              />
              <motion.line
                x1="100"
                y1="40"
                x2="120"
                y2="60"
                animate={{
                  pathLength: fusionStage >= 1 ? 1 : 0,
                  opacity: fusionStage >= 1 ? 0.7 : 0,
                }}
                transition={{duration: 1, delay: 0.6}}
              />
            </motion.g>

            {/* Bridge nodes */}
            <motion.g
              fill="url(#bridgeGradient)"
              animate={{opacity: fusionStage >= 1 ? 1 : 0}}
              transition={{duration: 1, delay: 0.8}}>
              <circle cx="60" cy="40" r="3" />
              <circle cx="100" cy="40" r="3" />
              <circle cx="40" cy="20" r="2" />
              <circle cx="40" cy="60" r="2" />
              <circle cx="120" cy="20" r="2" />
              <circle cx="120" cy="60" r="2" />
            </motion.g>

            {/* Energy flow particles */}
            <motion.circle
              r="2"
              fill="#60a5fa"
              animate={{
                cx: fusionStage === 2 ? [20, 80, 140] : 80,
                opacity: fusionStage === 2 ? [0.8, 1, 0.8] : 0,
              }}
              transition={{
                duration: 2,
                ease: 'easeInOut',
                repeat: fusionStage === 2 ? Infinity : 0,
              }}
              cy="40"
            />
          </svg>

          {/* Central fusion energy */}
          <motion.div
            className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10"
            animate={{
              scale: fusionStage === 2 ? [1, 1.8, 1] : fusionStage >= 1 ? 1.2 : 1,
              opacity: fusionStage === 2 ? [0.8, 1, 0.8] : fusionStage >= 1 ? 0.7 : 0.3,
            }}
            transition={{duration: 1.5}}>
            <div className="w-6 h-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 rounded-full blur-sm" />
          </motion.div>
        </div>

        <motion.div
          className="relative"
          animate={{
            x: fusionStage >= 2 ? -20 : 0,
            scale: fusionStage >= 2 ? 0.9 : 1,
          }}
          transition={{duration: 1.5, ease: 'easeInOut'}}>
          <div className="relative">
            <img src="/routstr.png" alt="routstr" className="w-32 h-32 lg:w-40 lg:h-40 object-contain rounded-xl" />

            <motion.div
              className="absolute inset-0 bg-purple-500/30 rounded-lg blur-xl"
              animate={{
                opacity: fusionStage === 1 || fusionStage === 3 ? 0.6 : 0.2,
                scale: fusionStage === 1 || fusionStage === 3 ? 1.1 : 1,
              }}
              transition={{duration: 1, ease: 'easeInOut'}}
            />
          </div>

          <motion.div
            className="absolute -bottom-16 left-1/2 transform -translate-x-1/2"
            animate={{opacity: fusionStage === 0 || fusionStage === 1 ? 1 : 0.7}}>
            <span className="text-sm font-medium text-purple-400">Routing Network</span>
          </motion.div>
        </motion.div>
      </div>

      <div className="absolute inset-0 pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-blue-400 rounded-full"
            style={{
              left: `${20 + i * 10}%`,
              top: `${30 + (i % 3) * 20}%`,
            }}
            animate={{
              opacity: fusionStage === 2 ? [0, 1, 0] : 0,
              scale: fusionStage === 2 ? [0, 1.5, 0] : 0,
            }}
            transition={{
              duration: 2,
              delay: i * 0.2,
              repeat: fusionStage === 2 ? Infinity : 0,
            }}
          />
        ))}
      </div>
    </div>
  );
}
