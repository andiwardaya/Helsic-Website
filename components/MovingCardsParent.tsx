import React from 'react';
import { InfiniteMovingCards } from './ui/InfiniteMovingCards';
import { MagicButton } from './ui/MagicButton';

const testimonials = [
  {
    name: 'Ronaldo',
    imageUrl: '/images/ronaldo.jpg',
    desc: 'Football Player',
  },
  {
    name: 'Rain',
    imageUrl: '/images/rain.jpg',
    desc: 'Ninja Assassin',
  },
  {
    name: 'Tom Holland',
    imageUrl: '/images/tom-holland.webp',
    desc: 'Spiderman',
  },
  {
    name: 'Brad Pitt',
    imageUrl: '/images/brad-pitt.jpg',
    desc: 'Fight Night Clup',
  },
];

export const MovingCardsParent = () => {
  return (
    <section className="py-10 bg-black">
      <h2 className="text-center text-2xl font-bold text-gray-800 dark:text-white mb-6 py-9 px-2">
        Kalian datang di tempat yang
        <span className="text-blue-100 font-bold text-3xl"> tepat</span> tepat
        jika ingin membentuk badan seperti ini
      </h2>

      <InfiniteMovingCards
        items={testimonials}
        direction="left"
        speed="fast"
        pauseOnHover={false}
        className="mx-auto"
      />
      <div className="flex items-center justify-center">
        <MagicButton
          title="Dapatkan Sekarang"
          className="hover:bg-black transition-colors duration-200 bg-transparent ease-in"
        />
      </div>
    </section>
  );
};
