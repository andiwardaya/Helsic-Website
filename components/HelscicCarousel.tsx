import React from 'react';
import { Carousel, Card } from './ui/AppleCardsCarousel';

export function HelscicCarousel() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} layout={true} />
  ));

  return (
    <div className="w-full h-full py-20 bg-slate-950">
      <h2 className="max-w-7xl pl-4 mx-auto text-xl md:text-5xl  text-neutral-800 dark:text-neutral-200 font-sans">
        <span className="text-4xl md:text-6xl text-purple-500 font-bold">
          Protokol Helsic
        </span>{' '}
        akan merubah badanmu seperti ini
      </h2>
      <Carousel items={cards} />
    </div>
  );
}

const DummyContent = () => {
  return (
    <>
      {[...new Array(3).fill(1)].map((_, index) => {
        return (
          <div
            key={'dummy-content' + index}
            className="bg-[#F5F5F7] p-8 md:p-14 rounded-3xl mb-4"
          ></div>
        );
      })}
    </>
  );
};

const data = [
  {
    category: '2016, 42 kg',
    title: 'fotoku ketika belum mengenal workout',
    src: '/images/kuru1.jpg',
    content: <DummyContent />,
  },
  {
    category: '2017, 45kg',
    title: 'awal mengenal workout, tapi masih goblog',
    src: '/images/kuru3.jpg',
    content: <DummyContent />,
  },
  {
    category: '2018, 52 kg',
    title: 'sudah kenal workout, tapi masih goblog juga',
    src: '/images/kuru2.jpg',
    content: <DummyContent />,
  },

  {
    category: '64kg',
    title: 'fotoku ketika belum mengenal workout',
    src: '/images/kuru2.jpg',
    content: <DummyContent />,
  },
  {
    category: '64kg',
    title: 'fotoku ketika belum mengenal workout',
    src: '/images/kuru2.jpg',
    content: <DummyContent />,
  },
  {
    category: '64kg',
    title: 'fotoku ketika belum mengenal workout',
    src: '/images/kuru2.jpg',
    content: <DummyContent />,
  },
];
