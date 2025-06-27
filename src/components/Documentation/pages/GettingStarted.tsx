import React from 'react';

export function GettingStarted() {
  return (
    <div className="max-w-5xl mx-auto px-8 py-8 select-text">
      <h1 className="text-4xl font-bold mb-6">Getting Started</h1>
      <p className="text-lg text-muted-foreground mb-8">
        Welcome to Otrta Routstr 402 gateway - the privacy-focused payment gateway for AI services using Cashu e-cash
        technology.
      </p>

      <div className="space-y-12">
        <section>
          <h2 className="text-2xl font-bold mb-4">What is Otrta Routstr?</h2>
          <div className="space-y-4 text-muted-foreground">
            <p>
              Otrta Routstr is a cutting-edge e-cash payment system that enables secure, private, and instant digital
              transactions. Built on the Cashu protocol and seamlessly integrated with the Routstr Marketplace and
              Roustr AI ecosystem.
            </p>
            <p>
              Our system combines the privacy benefits of e-cash with the precision of millisatoshi payments, creating a
              truly private and efficient way to pay for AI services.
            </p>
            <p>
              Unlike traditional payment methods that require accounts, personal information, and leave digital
              footprints, our gateway allows you to pay exactly what you consume without revealing your identity or
              usage patterns.
            </p>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-center">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                Privacy-focused transactions
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                Routstr Marketplace integration
              </li>
            </ul>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Key Benefits</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 border rounded-lg">
              <h3 className="text-xl font-semibold mb-3 text-green-600">🔒 Complete Privacy</h3>
              <p className="text-muted-foreground">
                No accounts, no tracking, no personal data required. Your AI usage remains completely anonymous.
              </p>
            </div>
            <div className="p-6 border rounded-lg">
              <h3 className="text-xl font-semibold mb-3 text-blue-600">⚡ Microsatoshi Precision</h3>
              <p className="text-muted-foreground">
                Pay exactly for what you use with millisatoshi precision. No more overpayment or subscription waste.
              </p>
            </div>
            <div className="p-6 border rounded-lg">
              <h3 className="text-xl font-semibold mb-3 text-purple-600">🔄 Automatic Change</h3>
              <p className="text-muted-foreground">
                Unused funds are automatically returned as Cashu notes for future use via X-Cashu headers.
              </p>
            </div>
            <div className="p-6 border rounded-lg">
              <h3 className="text-xl font-semibold mb-3 text-orange-600">🔌 API Compatible</h3>
              <p className="text-muted-foreground">
                Drop-in replacement for OpenAI API endpoints. Works with existing tools and integrations.
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">How It Works</h2>
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                1
              </div>
              <div>
                <h4 className="font-semibold mb-2">Obtain E-Cash Tokens</h4>
                <p className="text-muted-foreground">
                  Get Cashu e-cash tokens from a supported mint. These tokens represent your payment without revealing
                  your identity.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                2
              </div>
              <div>
                <h4 className="font-semibold mb-2">Make API Requests</h4>
                <p className="text-muted-foreground">
                  Send your AI requests to our gateway endpoint with your e-cash token in the X-Cashu header.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                3
              </div>
              <div>
                <h4 className="font-semibold mb-2">Automatic Payment</h4>
                <p className="text-muted-foreground">
                  Our system automatically deducts the exact cost and returns any unused funds as new Cashu notes.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                4
              </div>
              <div>
                <h4 className="font-semibold mb-2">Receive Response</h4>
                <p className="text-muted-foreground">
                  Get your AI response along with updated e-cash tokens for future requests.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
