'use client';
import React from 'react';
import { BentoGrid, BentoGridItem } from './ui/bento-grid';
import Image from 'next/image';
import profilePic1 from '../public/images/kuru1.jpg';

export const MainFeatureGrid = () => {
  return (
    <div className="relative w-full h-full">
      {/* Layer background pattern di belakang */}
      <div className="absolute inset-0 -z-10 bg-[url('/images/axiom-pattern.png')] bg-repeat bg-black" />

      {/* Konten utama */}
      <div className="mx-2 pt-8">
        <h1 className="text-center font-bold text-3xl md:text-6xl  text-blue-100">
          <span className="text-xl md:text-2xl text-white">
            ini bukan sebuah{' '}
          </span>
          <br />
          Program Fitness
        </h1>
        <h1 className="text-center font-bold text-3xl md:text-6xl  text-blue-100">
          <span className="text-xl md:text-2xl text-white">
            tapi akan mengajarimu cara membuat{' '}
          </span>
          Program
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

interface SkeletonProps {
  imageSrc: string | any;
}

const Skeleton = ({ imageSrc }: SkeletonProps) => (
  <div className="flex flex-1 items-center md:w-full md:h-full w-[300px] h-[150px] min-h-[6rem] rounded-xl bg-dot-black/[0.2] [mask-image:radial-gradient(ellipse_at_center,white,transparent)] border border-cyan-300 bg-black overflow-hidden relative">
    <Image
      src={imageSrc}
      alt="Fitur Fitness"
      className="object-cover w-full h-[300px]"
    />
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
      'Tidak lagi tertipu informasi palsu. Setiap gerakan dan pola makan dibuat dari studi ilmiah terkini dan pengalaman 5 tahun untuk mencapai tubuh impian tanpa yang alat mahal.',
    header: <Skeleton imageSrc={profilePic1} />,
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
    header: <Skeleton imageSrc={profilePic1} />,
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
    header: <Skeleton imageSrc={profilePic1} />,
    className: 'md:col-span-1',
  },
  {
    title: (
      <span className="text-xl font-bold text-blue-100">No gym no Problem</span>
    ),
    description:
      'Banyak orang beranggapan tidak bisa membentuk badan terbaik tanpa gym dan Protokol helsic akan mematahkan pikiran tersebut.',
    header: <Skeleton imageSrc={profilePic1} />,
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
    header: <Skeleton imageSrc={profilePic1} />,
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
    header: <Skeleton imageSrc={profilePic1} />,
    className: 'md:col-span-1',
  },
];
