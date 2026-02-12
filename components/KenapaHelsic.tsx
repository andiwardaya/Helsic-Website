import React from 'react';
import { BackgroundGradientAnimation } from './ui/background-gradient-animation.';

export const KenapaHelsic = () => {
  return (
    <>
      <BackgroundGradientAnimation
        className="w-full h-full flex items-center justify-center"
        containerClassName=""
      >
        <h1 className="text-gray-300 text-2xl opacity-90 text-center md:text-6xl font-base mx-5 bg-white/10 backdrop-blur-md border-white/10 rounded-xl px-2 py-2">
          itulah kenapa aku membuat{' '}
          <span className="text-3xl text-blue-100 font-bold md:text-6xl">
            PROTOKOL HELSIC{' '}
          </span>
        </h1>
      </BackgroundGradientAnimation>
    </>
  );
};
