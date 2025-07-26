import React from 'react';
import { BackgroundGradientAnimation } from './ui/background-gradient-animation.';
import { TextGenerateEffect } from './ui/textGenerateEffect';

const alasan = 'itulah kenapa aku membuat PROTOKOL HELSIC';

export const KenapaHelsic = () => {
  return (
    <BackgroundGradientAnimation
      className="w-full h-full flex items-center justify-center"
      containerClassName=""
    >
      <TextGenerateEffect
        words={alasan}
        duration={2}
        className="text-gray-300 text-3xl opacity-90 text-center md:text-6xl font-bold mx-5 bg-white/10 backdrop-blur-md border-white/10 rounded-xl px-2 py-2"
      />
    </BackgroundGradientAnimation>
  );
};
