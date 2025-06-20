import Image from 'next/image';

const clients = [
  {
    id: 'client-1',
    logo: '/images/airbnb.png',
  },
  {
    id: 'client-2',
    logo: '/images/binance.png',
  },
  {
    id: 'client-3',
    logo: '/images/coinbase.png',
  },
  {
    id: 'client-4',
    logo: '/images/dropbox.png',
  },
];

export default function client() {
  return (
    <section className="flex justify-center items-center my-7 py-7">
      <div className="flex justify-center items-center flex-wrap w-full">
        {clients.map(client => (
          <div key={client.id} className="flex-1 flex justify-center items-center sm:min-w-[192px] min-x-[120px]">
            <Image
              src={client.logo}
              width={192}
              height={64}
              alt="client"
              className="sm:w-[192px] w-[100%] object-contain hover:-translate-y-2 cursor-pointer transition-all ease-in-out"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
