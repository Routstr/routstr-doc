'use client';

import {useState} from 'react';
import {ProvidersList} from '../Shared/ProvidersList';
import {Button} from '../ui/button';
import {Input} from '../ui/input';
import ModelsItemPage from '../Shared/ModelsItemPage';

export default function HomeModels11() {
  const [value, setValue] = useState('');

  const onChange = (value: string) => {
    setValue(value);
  };

  return (
    <div className="w-full min-h-screen flex items-center justify-center overflow-hidden">
      <div className="container flex justify-center">
        <section className="flex w-full max-w-4x sm:my-16 my-6 sm:py-12 py-4 sm:flex-row flex-col">
          <div className="flex-1 flex flex-col">
            <h1 className="font-poppins font-semibold my-6 xs:text-[48px] text-[40px] text-black xs:leading-[76.8px] leading-[66.8px] w-full">
              <span className="inline bg-gradient-to-r from-[#F596D3]  to-[#D247BF] text-transparent bg-clip-text">
                Let s try our
              </span>{' '}
              service
            </h1>
            <div className="mb-10 flex flex-col md:flex-row gap-4">
              <div className="flex-1 flex">
                <Input
                  placeholder="Search models..."
                  className="w-full h-11 px-4 py-2 glass border border-white/20 rounded-md focus:outline-none focus:ring-0 focus:border-white/20 hover:border-[#0eb4c2] focus:border-[#0eb4c2] text-[rgba(0,0,0,0.5)]"
                  type="text"
                  value={value}
                  onChange={e => onChange(e.target.value)}
                  style={{minHeight: '44px', maxHeight: '44px'}}
                />
              </div>
              <div className="flex items-stretch">
                <Button
                  className="glass inline-flex items-center rounded-md text-sm font-medium transition-colors
             focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/20
             focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none
             border py-2 w-[260px] h-11 justify-between border-white/20 px-4
             text-[rgba(0,0,0,0.5)] hover:border-[#0eb4c2] hover:bg-[#0eb4c2] hover:text-white"
                  role="combobox"
                  aria-expanded="false"
                  type="button"
                  aria-haspopup="dialog"
                  aria-controls="radix-«r2»"
                  data-state="closed"
                  style={{minHeight: '44px', maxHeight: '44px'}}>
                  Sort by Release Date
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-chevrons-up-down ml-2 h-4 w-4 shrink-0 opacity-50"
                    aria-hidden="true">
                    <path d="m7 15 5 5 5-5"></path>
                    <path d="m7 9 5-5 5 5"></path>
                  </svg>
                </Button>
              </div>
            </div>
            <div className="mb-8">
              <h2 className="my-4 text-lg font-medium mb-3">Providers</h2>

              <div className="flex flex-wrap gap-3">
                {ProvidersList.map(name => (
                  <Button
                    key={name}
                    variant="outline"
                    className="glass px-3 py-1 text-sm rounded-full  text-black hover:border-[#0eb4c2]">
                    {name}
                  </Button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4">
              <ModelsItemPage
                link="/models/sarvamai/sarvam-m"
                name="Sarvam-M"
                aiName="Sarvam AI"
                date="25 mai 2025"
                inputPrix="0.00023053"
                outputPrix="0.00069160"
                tokens="32 768"
              />
              <ModelsItemPage
                link="/models/sarvamai/sarvam-m"
                name="Sarvam-M"
                aiName="Sarvam AI"
                date="25 mai 2025"
                inputPrix="0.00023053"
                outputPrix="0.00069160"
                tokens="32 768"
              />
              <ModelsItemPage
                link="/models/sarvamai/sarvam-m"
                name="Sarvam-M"
                aiName="Sarvam AI"
                date="25 mai 2025"
                inputPrix="0.00023053"
                outputPrix="0.00069160"
                tokens="32 768"
              />
              <ModelsItemPage
                link="/models/sarvamai/sarvam-m"
                name="Sarvam-M"
                aiName="Sarvam AI"
                date="25 mai 2025"
                inputPrix="0.00023053"
                outputPrix="0.00069160"
                tokens="32 768"
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
