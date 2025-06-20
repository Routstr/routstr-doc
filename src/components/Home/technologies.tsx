import React from 'react';
import {IconCloud} from '../magicui/icon-cloud';

const images: string[] = [
  'https://cdn.simpleicons.org/amazonaws?viewbox=auto',
  'https://cdn.simpleicons.org/apache?viewbox=auto',
  'https://cdn.simpleicons.org/apple?viewbox=auto',
  'https://cdn.simpleicons.org/archlinux?viewbox=auto',
  'https://cdn.simpleicons.org/astro?viewbox=auto',
  'https://cdn.simpleicons.org/azuredevops?viewbox=auto',
  'https://cdn.simpleicons.org/bitcoin?viewbox=auto',
  'https://cdn.simpleicons.org/digitalocean?viewbox=auto',
  'https://cdn.simpleicons.org/django?viewbox=auto',
  'https://cdn.simpleicons.org/docker?viewbox=auto',
  'https://cdn.simpleicons.org/drizzle?viewbox=auto',
  'https://cdn.simpleicons.org/ethereum?viewbox=auto',
  'https://cdn.simpleicons.org/firebase?viewbox=auto',
  'https://cdn.simpleicons.org/freebsd?viewbox=auto',
  'https://cdn.simpleicons.org/git?viewbox=auto',
  'https://cdn.simpleicons.org/github?viewbox=auto',
  'https://cdn.simpleicons.org/gitlab?viewbox=auto',
  'https://cdn.simpleicons.org/graphql?viewbox=auto',
  'https://cdn.simpleicons.org/huggingface?viewbox=auto',
  'https://cdn.simpleicons.org/jira?viewbox=auto',
  'https://cdn.simpleicons.org/javascript?viewbox=auto',
  'https://cdn.simpleicons.org/kalilinux?viewbox=auto',
  'https://cdn.simpleicons.org/linux?viewbox=auto',
  'https://cdn.simpleicons.org/linode?viewbox=auto',
  'https://cdn.simpleicons.org/mongodb?viewbox=auto',
  'https://cdn.simpleicons.org/mysql?viewbox=auto',
  'https://cdn.simpleicons.org/nextdotjs?viewbox=auto',
  'https://cdn.simpleicons.org/nginx?viewbox=auto',
  'https://cdn.simpleicons.org/nodedotjs?viewbox=auto',
  'https://cdn.simpleicons.org/numpy?viewbox=auto',
  'https://cdn.simpleicons.org/openai?viewbox=auto',
  'https://cdn.simpleicons.org/pandas?viewbox=auto',
  'https://cdn.simpleicons.org/pocketbase?viewbox=auto',
  'https://cdn.simpleicons.org/postgresql?viewbox=auto',
  'https://cdn.simpleicons.org/prisma?viewbox=auto',
  'https://cdn.simpleicons.org/python?viewbox=auto',
  'https://cdn.simpleicons.org/pytorch?viewbox=auto',
  'https://cdn.simpleicons.org/react?viewbox=auto',
  'https://cdn.simpleicons.org/redis?viewbox=auto',
  'https://cdn.simpleicons.org/solana?viewbox=auto',
  'https://cdn.simpleicons.org/square?viewbox=auto',
  'https://cdn.simpleicons.org/stripe?viewbox=auto',
  'https://cdn.simpleicons.org/svelte?viewbox=auto',
  'https://cdn.simpleicons.org/sveltekit?viewbox=auto',
  'https://cdn.simpleicons.org/tailwindcss?viewbox=auto',
  'https://cdn.simpleicons.org/tensorflow?viewbox=auto',
  'https://cdn.simpleicons.org/typescript?viewbox=auto',
  'https://cdn.simpleicons.org/ubuntu?viewbox=auto',
  'https://cdn.simpleicons.org/vercel?viewbox=auto',
  'https://cdn.simpleicons.org/zod?viewbox=auto',
];

interface TechnologiesProps {
  liveLinks?: boolean;
}

export default function Technologies({liveLinks = false}: TechnologiesProps) {
  console.log(liveLinks);
  return (
    <div className="relative flex size-full max-w-lg items-center justify-center overflow-hidden rounded-lg">
      <div className="transform scale-120">
        <IconCloud images={images} />
      </div>
    </div>
  );
}
