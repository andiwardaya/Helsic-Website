'use client';
import React from 'react';
import { BentoGrid, BentoGridItem } from './ui/bento-grid';

export const MainFeatureGrid = () => {
  return (
    <div className="relative w-full h-full">
      {/* Layer background pattern di belakang */}
      <div className="absolute inset-0 -z-10 bg-[url('/images/axiom-pattern.png')] bg-repeat bg-black" />

      {/* Konten utama */}
      <div className="mx-2 pt-8">
        <h1 className="text-center font-bold text-3xl md:text-6xl  text-blue-100">
          <span className="text-xl md:text-2xl text-white">kenapa harus </span>
          Protokol Helsic?
        </h1>
      </div>

      <BentoGrid className="mx-auto px-6 pb-[40px] pt-8 md:auto-rows-[20rem]">
        {items.map((item, i) => (
          <BentoGridItem
            key={i}
            title={item.title}
            description={item.description}
            header={item.header}
            className={item.className}
          />
        ))}
      </BentoGrid>
    </div>
  );
};

const Skeleton = () => (
  <div className="flex flex-1 items-center md:w-full md:h-full w-[300px] h-{150px} min-h-[6rem] rounded-xl bg-dot-black/[0.2] [mask-image:radial-gradient(ellipse_at_center,white,transparent)]  border border-cyan-300 dark:bg-black">
    <video
      className="rounded-xl  h-full w-full"
      playsInline
      muted
      loop
      autoPlay
      preload="metadata"
      poster="/images/brad-pitt.jpg"
    >
      <source src="/animations/uangcompressed.webm" type="video/webm" />
    </video>
  </div>
);
const items = [
  {
    title: (
      <span className="text-xl font-bold text-blue-100">
        Kombinasi Sains & Berpengalaman
      </span>
    ),
    description:
      'Tidak lagi tertipu informasi palsu. Setiap gerakan dan pola makan dibuat dari studi ilmiah terkini dan pengalaman bertahun tahun untuk mencapai tubuh impian tanpa yang alat mahal.',
    header: <Skeleton />,
    className: 'md:col-span-2 ',
  },
  {
    title: (
      <span className="text-xl font-bold text-blue-100">
        Dibuat untuk Semua Pemula
      </span>
    ),

    description:
      'Tidak bisa pull up dan push up? tenang saja. Protokol Helsic dibuat untuk orang sangat pemula dan akan membuat kalian bisa meraih push up hingga handstand push up dan pull up sampai muscle up-front lever. Dibuat dengan penjelasan yang mudah dicerna dan lengkap',
    header: <Skeleton />,
    className: 'md:col-span-1',
  },
  {
    title: (
      <span className="text-xl font-bold text-blue-100">
        Fleksibel & Ramah Kantong
      </span>
    ),
    description:
      'tidak memiliki dana yang banyak untuk membentuk badan? berapa kali aku bilang kalau kalian bisa membentuk badan tanpa susu protein mahal dan dada ayam.',
    header: <Skeleton />,
    className: 'md:col-span-1',
  },
  {
    title: (
      <span className="text-xl font-bold text-blue-100">No gym no Problem</span>
    ),
    description:
      'Banyak orang beranggapan tidak bisa membentuk badan terbaik tanpa gym dan Protokol helsic akan mematahkan pikiran tersebut.',
    header: <Skeleton />,
    className: 'md:col-span-2',
  },
  {
    title: (
      <span className="text-xl font-bold text-blue-100">
        Hindari Kesalahan & Percepat Progres
      </span>
    ),
    description:
      'aku dulu sangat bodoh, memiliki progres cukup lama, tidak tahu dasar, cara, metode terbaik untuk membentuk badan dirumah. Tapi jika kalian mengikuti protokol ini, kalian akan menghindari kesalahan bodohku dan pastinya progres kalian lebih cepat dariku',
    header: <Skeleton />,
    className: 'md:col-span-2',
  },
  {
    title: (
      <span className="text-xl font-bold text-blue-100">
        Bayar Sekali, Akses Seumur Hidup
      </span>
    ),
    description:
      'Aku bisa saja membuat protokol ini menjadi biaya langganan bulanan, tapi disini aku ingin membantu kalian. Tanpa biaya bulanan, satu kali bayar akan membuat kalian tahu rahasia, cara, metode terbaik untuk merancang sistem latihan membentuk badan dirumah.',
    header: <Skeleton />,
    className: 'md:col-span-1',
  },
];
