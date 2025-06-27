import React from 'react';
import Image from 'next/image';

export function DecentralizedProtocols() {
  return (
    <section className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Built on the Foundation of
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {' '}
              Decentralization
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Otrta Routstr leverages two revolutionary protocols that are reshaping the decentralized landscape,
            combining the power of censorship-resistant communication with private digital cash.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Nostr Protocol */}
          <div className="p-8 border rounded-lg bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-950/20 dark:to-blue-900/10">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mr-4">
                <span className="text-white font-bold text-xl">N</span>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-blue-800 dark:text-blue-200">Nostr Protocol</h3>
                <p className="text-blue-600 dark:text-blue-400 text-sm">Notes and Other Stuff Transmitted by Relays</p>
              </div>
            </div>

            <p className="text-blue-700 dark:text-blue-300 mb-4">
              A truly censorship-resistant alternative to centralized social networks. Nostr creates a global
              communication network without relying on any trusted central server, using cryptographic keys and
              signatures for tamper-proof messaging.
            </p>

            <div className="space-y-3">
              <div className="flex items-center text-blue-700 dark:text-blue-300">
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                <span className="text-sm">Censorship-resistant communication</span>
              </div>
              <div className="flex items-center text-blue-700 dark:text-blue-300">
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                <span className="text-sm">Cryptographic security</span>
              </div>
              <div className="flex items-center text-blue-700 dark:text-blue-300">
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                <span className="text-sm">Decentralized relay network</span>
              </div>
            </div>

            <div className="mt-4 p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
              <p className="text-xs text-blue-600 dark:text-blue-400">
                <strong>How Otrta uses it:</strong> Provider discovery, reputation systems, and communication channels
                are built on Nostr's censorship-resistant infrastructure.
              </p>
            </div>

            <a
              href="https://github.com/nostr-protocol/nostr"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center mt-4 text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-200 transition-colors">
              <span className="text-sm font-medium">Learn more about Nostr</span>
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </a>
          </div>

          {/* Cashu Protocol */}
          <div className="p-8 border rounded-lg bg-gradient-to-br from-green-50 to-emerald-100 dark:from-green-950/20 dark:to-emerald-900/10">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mr-4">
                <span className="text-white font-bold text-xl">₿</span>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-green-800 dark:text-green-200">Cashu Protocol</h3>
                <p className="text-green-600 dark:text-green-400 text-sm">Private E-cash System</p>
              </div>
            </div>

            <p className="text-green-700 dark:text-green-300 mb-4">
              A revolutionary e-cash protocol that enables truly private digital transactions. Built on cryptographic
              blind signatures, Cashu provides the digital equivalent of physical cash with complete privacy.
            </p>

            <div className="space-y-3">
              <div className="flex items-center text-green-700 dark:text-green-300">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                <span className="text-sm">Complete transaction privacy</span>
              </div>
              <div className="flex items-center text-green-700 dark:text-green-300">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                <span className="text-sm">Lightning Network integration</span>
              </div>
              <div className="flex items-center text-green-700 dark:text-green-300">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                <span className="text-sm">Instant, low-fee transfers</span>
              </div>
            </div>

            <div className="mt-4 p-3 bg-green-100 dark:bg-green-900/30 rounded-lg">
              <p className="text-xs text-green-600 dark:text-green-400">
                <strong>How Otrta uses it:</strong> All payments within the ecosystem use Cashu's privacy-preserving
                e-cash tokens for truly anonymous transactions.
              </p>
            </div>

            <a
              href="https://github.com/cashubtc/nuts"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center mt-4 text-green-600 dark:text-green-400 hover:text-green-800 dark:hover:text-green-200 transition-colors">
              <span className="text-sm font-medium">Explore Cashu Protocol</span>
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </a>
          </div>
        </div>

        {/* Synergy Section */}
        <div className="text-center">
          <div className="p-8 border-2 border-dashed border-purple-300 dark:border-purple-700 rounded-lg bg-gradient-to-r from-purple-50 to-indigo-50 dark:from-purple-950/20 dark:to-indigo-950/20">
            <div className="flex justify-center mb-4">
              <div className="relative">
                <Image src="/otrta.png" alt="Otrta Logo" width={60} height={60} className="rounded-lg" />
              </div>
            </div>
            <h3 className="text-2xl font-bold mb-4 text-purple-800 dark:text-purple-200">🚀 The Perfect Synergy</h3>
            <p className="text-purple-700 dark:text-purple-300 max-w-4xl mx-auto text-lg">
              By combining <strong>Nostr's censorship-resistant communication</strong> with{' '}
              <strong>Cashu's private payments</strong>, Otrta creates the world's first truly decentralized marketplace
              where you can discover providers, communicate securely, and transact privately—all without sacrificing
              your freedom or privacy.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div className="p-4 bg-white/50 dark:bg-gray-800/50 rounded-lg">
                <h4 className="font-semibold text-purple-800 dark:text-purple-200 mb-2">🔒 Privacy First</h4>
                <p className="text-sm text-purple-600 dark:text-purple-400">
                  Your communications and transactions remain completely private
                </p>
              </div>
              <div className="p-4 bg-white/50 dark:bg-gray-800/50 rounded-lg">
                <h4 className="font-semibold text-purple-800 dark:text-purple-200 mb-2">🌐 Truly Decentralized</h4>
                <p className="text-sm text-purple-600 dark:text-purple-400">
                  No central authority controls your money or messages
                </p>
              </div>
              <div className="p-4 bg-white/50 dark:bg-gray-800/50 rounded-lg">
                <h4 className="font-semibold text-purple-800 dark:text-purple-200 mb-2">⚡ Lightning Fast</h4>
                <p className="text-sm text-purple-600 dark:text-purple-400">
                  Instant communication and payments worldwide
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
