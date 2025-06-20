import {CircleCheck, MoveRightIcon, ShapesIcon} from 'lucide-react';
import Link from 'next/link';
import {Button} from '../ui/button';
import {Card, CardContent, CardFooter, CardHeader} from '../ui/card';
import Image from 'next/image';

export const HomeAboutUs = () => {
  return (
    <section className="mx-auto px-6 lg:px-0">
      <h2 className="text-5xl font-bold text-center">The Micropayment Challenge</h2>
      <p className="text-lg text-muted-foreground text-center mt-4 max-w-4xl mx-auto">
        Bitcoin&apos;s 1 satoshi minimum creates inefficiencies for AI micropayments. Our solution enables exact
        payments with millisatoshi precision using Cashu e-cash technology.
      </p>

      <div className="mt-12 mb-8 grid grid-cols-1 md:grid-cols-2 gap-8">
        <Card className="bg-secondary/40 shadow-none">
          <CardHeader className="pb-2 gap-3">
            <div className="h-10 w-10 bg-primary/10 flex items-center justify-center rounded-full">
              <ShapesIcon className="h-5 w-5" />
            </div>
            <h3 className="text-2xl font-bold tracking-tight">Revolutionary Payment Architecture</h3>
          </CardHeader>
          <CardContent>
            <p>
              Our system eliminates the micropayment problem through millisatoshi-precision Cashu mints and header-based
              payment integration. Pay exactly what you consume without rounding errors or overpayment waste.
            </p>
            <ul className="mt-6 space-y-3 text-[15px]">
              <li className="flex items-start gap-2">
                <CircleCheck className="h-[18px] w-[18px]" />
                <div>
                  <h6 className="mb-0.5 leading-[18px] font-semibold">Local Proxy Wallet</h6>
                  <p className="text-sm text-foreground/90">
                    Manages Cashu e-cash notes locally and prepares payments for AI API requests with millisatoshi
                    precision.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <CircleCheck className="h-[18px] w-[18px]" />
                <div>
                  <h6 className="mb-0.5 leading-[18px] font-semibold">402 Payment Server</h6>
                  <p className="text-sm text-foreground/90">
                    Processes header-based payments using X-Cashu headers and returns change when overpaid.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <CircleCheck className="h-[18px] w-[18px]" />
                <div>
                  <h6 className="mb-0.5 leading-[18px] font-semibold">Anonymous Integration</h6>
                  <p className="text-sm text-foreground/90">
                    Direct OpenAI API compatibility with complete privacy - no accounts, no tracking, no identity
                    required.
                  </p>
                </div>
              </li>
            </ul>
          </CardContent>
          <CardFooter className="pt-1">
            <Button asChild>
              <Link href="/documentation">
                View Technical Docs <MoveRightIcon />
              </Link>
            </Button>
          </CardFooter>
        </Card>
        <Card className="bg-secondary/40 shadow-none">
          <Image
            src="/images/wallet.jfif"
            alt="E-cash payment architecture"
            width={1026}
            height={899}
            className="w-[100%] h-[100%] rounded-xl object-cover"
            priority
          />
        </Card>
      </div>
    </section>
  );
};
