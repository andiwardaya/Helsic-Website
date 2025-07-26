import React from 'react';
import { Spotlight } from './ui/Spotlight';
import { TextGenerateEffect } from './ui/textGenerateEffect';
import { ContainerTextFlip } from './ui/ContainerTextFlip';
import { MagicButton } from './ui/MagicButton';

const word = 'kita akan bantu merubah tubuhmu.';

export const Hero = () => {
  return (
    <section className="w-full py-36">
      <Spotlight className="top-20 -left-10 h-screen" fill="white" />
      <Spotlight className="-top-2 left-3 h-screen" fill="white" />

      <div className=" mx-auto px-4 flex flex-col gap-3 justify-center items-center mt-20">
        <TextGenerateEffect
          duration={2}
          words={word}
          className="text-gray-200 text-6xl md:text-8xl font-bold max-w-3xl  text-center"
        />
        <ContainerTextFlip
          textClassName="text-blue-100"
          words={['natural', 'dirumah', 'murah & efektif', 'tanpa gym']}
        />
        <p className="text-gray-500 text-sm md:text-base my-6 justify-center text-center max-w-2xl">
          Siap bentuk badan terbaikmu dari{' '}
          <span className="text-gray-300 font-bold">rumah? </span>
          <span className="text-blue-100 font-bold">Protokol Helsic </span>
          akan membuat kamu bisa merancang{' '}
          <span className="text-white font-bold">sistem latihan </span>tanpa
          alat mahal dengan hasil yang{' '}
          <span className="text-whitefont-bold">maksimal!</span>
        </p>

        <a href="about">
          <MagicButton
            title="Dapatkan Sekarang"
            className="hover:bg-black transition-colors duration-200 bg-transparent ease-in"
          />
        </a>
      </div>
    </section>
  );
};
