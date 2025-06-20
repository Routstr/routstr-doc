import Link from 'next/link';
import Image from 'next/image';
import {Button} from '../ui/button';
import {GithubLogo} from '../ui/Icons';

const OWNER = '9qeklajc';
const REPO = 'ecash-402-client';

export const GithubStarButton = () => {
  return (
    <div className="flex items-center gap-3">
      <Button variant="outline" className="rounded-full shadow-none px-3" asChild>
        <Link href={`https://github.com/${OWNER}/${REPO}`} target="_blank">
          <GithubLogo className="!h-5 !w-5" />
          Star
        </Link>
      </Button>

      <Button variant="outline" className="rounded-full shadow-none px-3" asChild>
        <Link
          href="https://www.routstr.com"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2">
          <Image src="/routstr.png" alt="Routstr" width={20} height={20} className="!h-5 !w-5 rounded-md" />
          Routstr
        </Link>
      </Button>
    </div>
  );
};
