'use client';
import React, { useRef } from 'react';
import { useScroll, useTransform } from 'framer-motion';
import { GoogleGeminiEffect } from './ui/GeminiEffect';

export const GeminiParent = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  const pathLengthFirst = useTransform(scrollYProgress, [0, 0.8], [0.2, 1.2]);
  const pathLengthSecond = useTransform(scrollYProgress, [0, 0.8], [0.15, 1.2]);
  const pathLengthThird = useTransform(scrollYProgress, [0, 0.8], [0.1, 1.2]);
  const pathLengthFourth = useTransform(scrollYProgress, [0, 0.8], [0.05, 1.2]);
  const pathLengthFifth = useTransform(scrollYProgress, [0, 0.8], [0, 1.2]);

  return (
    <div
      ref={ref}
      className="h-[400vh] bg-black w-full rounded-md relative py-60 mb-20 overflow-clip"
    >
      <GoogleGeminiEffect
        pathLengths={[
          pathLengthFirst,
          pathLengthSecond,
          pathLengthThird,
          pathLengthFourth,
          pathLengthFifth,
        ]}
        title="Hindari Kebodohanku & Percepat Progresmu"
        description="Waktu adalah hal yang paling berharga. Sibuk kerja, kuliah atau kegiatan lainnya? Protokol Helsic akan menghemat waktu yang terbuang untuk scroll YouTube, menghindari informasi palsu dan mempercepat progresmu. Semua sudah aku pelajari menjadi sistem yang bisa langsung kalian ikuti."
      />
    </div>
  );
};
