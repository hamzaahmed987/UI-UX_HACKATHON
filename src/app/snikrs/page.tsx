// pages/index.js
import Image from 'next/image';

export default function Home() {
  // Sample product data
  const products = [
    {
      image: '/shoe.png', // Replace with actual paths
      title: 'University Red',
    },
    {
      image: '/shoe.png',
      title: 'Big Bubble',
    },
    {
      image: '/shoe.png',
      title: 'Corduroy',
    },
    {
      image: '/shoe.png',
      title: 'Great Indoors',
    },
    {
      image: '/shoe.png',
      title: 'Shima Shima',
    },
    {
      image: '/shoe.png',
      title: 'Big Bubble',
    },
  ];

  return (
    <div className="max-h-[22369px] max-w-full mx-auto px-4 py-8">
      <section className="grid grid-cols-30 gap-6">
        {products.map((product, index) => (
          <div
            key={index}
            className="flex flex-col items-center max-w-[450px] max-h-[391px] text-center"
          >
            <div className="relative max-w-[450px] max-h-[506px]">
              <Image
                src={product.image}
                alt={product.title}
                width={450}
                height={506}
                className="object-contain"
              />
            </div>
            <h2 className="text-lg font-semibold mt-4">{product.title}</h2>
            <button className="mt-2 px-4 py-2 bg-black text-white text-sm font-medium rounded-lg">
              Learn More
            </button>
          </div>
        ))}
      </section>
    </div>
  );
}