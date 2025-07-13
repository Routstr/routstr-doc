import Image from 'next/image';

export default function AboutUs() {
  return (
    <div className="w-full min-h-screen flex items-center justify-center overflow-hidden">
      <div className="container flex justify-center">
        <section className="flex w-full max-w-4x sm:my-16 my-6 sm:py-12 py-4 sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] shadow-lg">
          <div className="flex-1 flex justify-center items-start flex-col">
            <h2 className="font-poppins font-semibold xs:text-[48px] text-[40px] text-white xs:leading-[76.8px] leading-[66.8px] w-full">
              Innovative payment solution <br className="sm:block hidden" /> privacy and efficiency.
            </h2>
            <p className="text-[#fff] font-poppins font-normal text-dimWhite text-[18px] leading-[30.8px] max-w-[470px] mt-5">
              Enables anonymous micropayments for OpenAI API. Diligently managing note redemption, processing payments,
              and generating change with the support of the Server s Wallet. This architecture ensures a seamless and
              private transaction flow for LLM consumption.
            </p>
            <button
              type="button"
              className="bg-[#0eb4c2] hover:bg-[#057f8c] text-[#fff] mt-10 py-4 px-6 bg-blue-gradient font-poppins font-medium text-[18px] text-primary outline-none rounded-[10px] hover:translate-x-2 transition-all ease-linear cursor-pointer">
              Get Started
            </button>
          </div>

          <div className="flex-1 flex justify-center items-center md:ml-10 ml-0 md:mt-0 mt-10 relative">
            <Image src="/wallet.jfif" alt="card" width={1026} height={899} className="w-[100%] h-[100%]" priority />
          </div>
        </section>
      </div>
    </div>
  );
}
