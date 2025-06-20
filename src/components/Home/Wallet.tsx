import {Card, CardContent, CardDescription, CardHeader, CardTitle} from '../ui/card';
import Image from 'next/image';

export default function WalletGatewaySection() {
  return (
    <section className="py-16 md:py-24 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Text Content */}
          <div className="md:w-1/2 text-center md:text-left">
            <Card className="shadow-lg border-none bg-white dark:bg-gray-800">
              <CardHeader>
                <CardTitle className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white mb-4">
                  Wallet Gateway
                </CardTitle>
                <CardDescription className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                  Wallet Gateway is a **privacy-focused payment system** designed for accessing Large Language Models
                  (like OpenAI s API) with **anonymous micropayments**. It uses e-cash notes (also known as Cashu notes)
                  to handle small, frequent payments without revealing your identity.
                </CardDescription>
              </CardHeader>
              <CardContent>{/* You can add more content or actions here if needed */}</CardContent>
            </Card>
          </div>

          {/* Image */}
          <div className="md:w-1/2 flex justify-center md:justify-end">
            <div className="relative w-full max-w-md h-64 md:h-96 rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/images/wallet.jfif"
                alt="Wallet Gateway concept: privacy-focused payments for LLMs"
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
