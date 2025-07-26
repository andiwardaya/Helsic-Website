import React from 'react';
import { Timeline } from './ui/Timeline';

const timeLineData = [
  {
    title: 'bingung memulai darimana?',
    content: (
      <p className="text-cyan-300 font-semibold">
        aku kurus dan gendut, tidak kuat pull up dan pull up bang.
      </p>
    ),
  },
  {
    title: 'latihan dirumah, tapi hasilnya biasa saja?',
    content: (
      <p className="text-cyan-300 font-semibold">
        aku sudah bertahun-tahun latihan dirumah tapi hasilnya biasa-biasa saja.
      </p>
    ),
  },
  {
    title: 'punya waktu sedikit, ingin bentuk badan legit',
    content: (
      <p className="text-cyan-300 font-semibold">
        gym terlalu ramai, jaraknya jauh dari rumah, dan aku orang nya pemalu.
      </p>
    ),
  },

  {
    title: 'dana minimal tapi ingin bentuk badan maksimal?',
    content: (
      <p className="text-cyan-300 font-semibold">
        tapi bang, dana ku sangat minim untuk beli susu protein, dada ayam, dan
        aku tinggal di kos.
      </p>
    ),
  },
];

export const TimelineParent = () => {
  return <Timeline data={timeLineData} />;
};
