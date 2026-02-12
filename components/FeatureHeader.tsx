import React from 'react';
import { LampContainer } from './ui/LampContainer';

export const FeatureHeader = () => {
  return (
    <LampContainer>
      <div className=" text-center flex flex-col gap-2 items-center py-10 -translate-y-10">
        <h2 className=" text-gray-300 font-bold text-2xl  max-w-xl md:text-5xl md:max-w-6xl">
          rutin latihan dirumah tapi bentuk badan{' '}
          <span className="text-blue-100 text-4xl md:text-6xl">
            tidak ada perkembangan?
          </span>
        </h2>
      </div>
    </LampContainer>
  );
};
