import {motion} from 'framer-motion';
import {HeroCards} from './HeroCards';
import {GitHubLogoIcon} from '@radix-ui/react-icons';
import {Button, buttonVariants} from '../ui/button';

export default function HeroHome() {
  return (
    <section className="min-h-screen grid place-items-center p-4 rich-gradient-custom">
      <motion.section
        initial={{opacity: 0, y: 20}}
        animate={{opacity: 1, y: 0}}
        transition={{duration: 0.5, ease: 'easeOut'}}
        className="transition-all will-change-transform duration-500 ease-out container grid lg:grid-cols-2 place-items-center py-20 md:py-32 gap-10">
        <div className="text-center lg:text-start space-y-6">
          <main className="text-5xl md:text-6xl font-bold">
            <h1 className="inline">
              <span className="inline bg-gradient-to-r from-[#F596D3]  to-[#D247BF] text-transparent bg-clip-text">
                Wallet
              </span>{' '}
              Gateway
            </h1>{' '}
            for{' '}
            <h2 className="inline">
              <span className="inline bg-gradient-to-r from-[#61DAFB] via-[#1fc0f1] to-[#03a3d7] text-transparent bg-clip-text">
                Anonymous
              </span>{' '}
              AI Payments
            </h2>
          </main>

          <p className="text-xl text-muted-foreground md:w-10/12 mx-auto lg:mx-0">
            Wallet Gateway empowers anonymous, privacy-focused micropayments for accessing Large Language Models via the
            OpenAI API, leveraging e-cash notes (Cashu notes).
          </p>

          <div className="space-y-4 md:space-y-0 md:space-x-4">
            <Button className="w-full md:w-1/3">Get Started</Button>
            <a
              rel="noreferrer noopener"
              href="https://github.com/leoMirandaa/shadcn-landing-page.git"
              target="_blank"
              className={`w-full md:w-1/3 ${buttonVariants({
                variant: 'outline',
              })}`}>
              Github Repository
              <GitHubLogoIcon className="ml-2 w-5 h-5" />
            </a>
          </div>
        </div>

        <div className="z-10">
          <HeroCards />
        </div>

        <div className="shadow"></div>
      </motion.section>
    </section>
  );
}
