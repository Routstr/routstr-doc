import Link from 'next/link';
import ModelsItem from '../Shared/ModelsItem';

export default function HomeModels() {
  return (
    <div className="w-full min-h-screen flex items-center justify-center overflow-hidden">
      <div className="container flex justify-center">
        <section className="flex w-full max-w-4x my-6 sm:py-12 py-4 sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] shadow-lg">
          <div className="flex-1 flex flex-col">
            <h1 className="text-center font-poppins font-semibold xs:text-[48px] text-[40px] text-white xs:leading-[76.8px] leading-[66.8px] w-full">
              Let s try our service now!
            </h1>

            <div className="grid grid-cols-1 gap-4 sm:mt-16">
              <ModelsItem
                link="/models/sarvamai/sarvam-m"
                name="Sarvam-M"
                aiName="Sarvam AI"
                date="25 mai 2025"
                inputPrix="0.00023053"
                outputPrix="0.00069160"
                tokens="32 768"
              />
              <ModelsItem
                link="/models/sarvamai/sarvam-m"
                name="Sarvam-M"
                aiName="Sarvam AI"
                date="25 mai 2025"
                inputPrix="0.00023053"
                outputPrix="0.00069160"
                tokens="32 768"
              />
              <ModelsItem
                link="/models/sarvamai/sarvam-m"
                name="Sarvam-M"
                aiName="Sarvam AI"
                date="25 mai 2025"
                inputPrix="0.00023053"
                outputPrix="0.00069160"
                tokens="32 768"
              />
              <ModelsItem
                link="/models/sarvamai/sarvam-m"
                name="Sarvam-M"
                aiName="Sarvam AI"
                date="25 mai 2025"
                inputPrix="0.00023053"
                outputPrix="0.00069160"
                tokens="32 768"
              />
            </div>
            <div className="w-fit">
              <Link
                href="/models"
                className="inline-block bg-[#0eb4c2] hover:bg-[#057f8c] text-white mt-10 py-4 px-6 font-poppins font-medium text-[18px] outline-none rounded-[10px] ">
                See more...
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
