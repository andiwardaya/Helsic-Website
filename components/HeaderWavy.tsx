import React from 'react';
import { WavyBackground } from './ui/WavyBackground';
import { MagicButton } from './ui/MagicButton';
import { FaPlayCircle } from 'react-icons/fa';

export const HeaderWavy = () => {
  return (
    <WavyBackground backgroundFill="#0a0a0a" waveOpacity={1}>
      <div className="flex flex-col items-center gap-10  pt-8 mx-10 ">
        <div className=" backdrop-blur-md bg-white/10 border border-white/10 shadow-md px-2 py-3 rounded-xl">
          <h1 className="text-center font-bold text-4xl md:text-6xl lg:text-7xl text-white ">
            Modul Protokol Helsic
          </h1>
        </div>

        <div className="flex gap gap-2 items-center shadow-sm">
          <FaPlayCircle color="cyan" />
          <p className="font-bold xs:text-sm text-base md:text-xl text-gray-100 ">
            5 bab besar - 20 bab kecil - 2 jam video
          </p>
        </div>
        <a
          href="#
        "
          target="_blank"
        >
          <MagicButton
            title="Dapatkan Sekarang"
            className="hover:bg-black transition-colors duration-200 bg-transparent ease-in "
          />
        </a>
      </div>
    </WavyBackground>
  );
};
