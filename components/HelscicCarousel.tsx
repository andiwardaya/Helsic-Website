import React from 'react';
import { Carousel, Card } from './ui/AppleCardsCarousel';

export function HelscicCarousel() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} layout={true} />
  ));

  return (
    <div className="w-full h-full py-20 bg-slate-950">
      <div className="max-w-7xl pl-4 mx-auto text-xl md:text-5xl text-neutral-200 font-sans">
        <h2 className="">
          <span className="text-4xl md:text-6xl text-purple-500 font-bold">
            Protokol Helsic
          </span>{' '}
          akan merubah badanmu seperti ini
        </h2>
        <p className="text-sm mt-2">
          tanpa <span className="text-purple-500 font-bold">peptide,</span>{' '}
          tanpa
          <span className="text-purple-500 font-bold"> steroid,</span> hanya
          disiplin dan kerja keras
        </p>
      </div>

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
    category: '42 kg',
    title: '',
    src: '/images/kuru1.jpg',
    content: <DummyContent />,
  },
  {
    category: '45kg',
    title: '',
    src: '/images/kuru3.jpg',
    content: <DummyContent />,
  },
  {
    category: '52 kg',
    title: '',
    src: '/images/kuru2.jpg',
    content: <DummyContent />,
  },

  {
    category: '64kg',
    title: '',
    src: '/images/kuru2.jpg',
    content: <DummyContent />,
  },
  {
    category: '64kg',
    title: '',
    src: '/images/kuru2.jpg',
    content: <DummyContent />,
  },
  {
    category: '64kg',
    title: '',
    src: '/images/kuru2.jpg',
    content: <DummyContent />,
  },
];
