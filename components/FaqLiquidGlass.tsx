'use client';

import React, { useState } from 'react';
import { FiChevronDown, FiX } from 'react-icons/fi';
import { MagicButton } from './ui/MagicButton';
import { cn } from '@/lib/utils';

const faqData = [
  {
    question: 'Apa saja yang akan saya dapatkan setelah membeli kursus ini?',
    answer:
      'Protokol terbaik untuk membentuk badan dirumah dengan 5 bab besar, 20 bab kecil, berdurasi 2 jam. Selengkapnya bisa kalian lihat diatas',
  },
  {
    question: 'Apakah Protokol Helsic cocok untuk pemula?',
    answer:
      'Protokol Helsic dirancang mulai dari orang yang pemula. Jika kalian yang tidak bisa push up dan pull up, Protokol Helsic akan membuat kalian bisa melakukan hal tersebut. Mulai dari push up ke handstand push up, pull up ke front lever',
  },
  {
    question:
      'Apakah saya perlu alat atau harus ke gym untuk mengikuti Protocol Helsic?',
    answer:
      'Tidak perlu. Jika ingin memakai alat, aku akan merekomendasikan dengah harga yang sangat murah jika dibandingkan dengan biaya pergi ke gym',
  },
  {
    question: 'Berapa lama saya bisa mengakses video Protokol Helsic?',
    answer:
      'Satu kali bayar, gunakan seumur hidup, Protokol Helsic akan selalu melakukan update video di kemudian hari',
  },
  {
    question: 'Bagaimana jika saya punya pertanyaan selama mengikuti kursus?',
    answer:
      'kalian akan mendapatkan undangan grup komunitas sehingga kita bisa berbagi dan saling tanya jawab.',
  },
  {
    question:
      'Apakah ada jaminan badan saya akan jadi ketika membeli Protokol Helsic?',
    answer:
      'Tidak. Pertanyaan tersebut seperti apakah saya akan menjadi pintar jika membeli buku? tentu saja tidak. Disini protokol Helsic menyediakan metode praktik terbaik berdasarkan sains dan pengalaman latihan dirumah. Menyediakan informasi yang sudah tersaring, terbukti dan dikemas agar mudah dicerna',
  },
];

const FAQLiquidGlass = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-slate-950  p-6">
      <h1 className="text-center text-2xl md:text-4xl font-bold mb-4 text-gray-100 my-2">
        Ada Pertanyaan?
      </h1>
      <div className="max-w-2xl mx-auto space-y-4">
        {faqData.map((item, index) => {
          const isOpen = openIndex === index;
          return (
            <div key={index} className="relative text-sm">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center p-4 backdrop-blur-md bg-white/10 border border-white/20 rounded-xl transition-shadow hover:shadow-xl "
              >
                <span className="text-white text-start font-medium">
                  {item.question}
                </span>
                <span className="text-white text-xl">
                  {isOpen ? <FiX /> : <FiChevronDown />}
                </span>
              </button>

              <div
                className={cn(
                  'overflow-hidden transition-all duration-300 ease-in-out text-gray-200 backdrop-blur-sm bg-white/5 rounded-b-xl px-4',
                  isOpen
                    ? 'max-h-40 py-4 opacity-100'
                    : 'max-h-0 py-0 opacity-0'
                )}
              >
                {item.answer}
              </div>
              {index < faqData.length - 1 && (
                <div className="absolute bottom-0 left-4 right-4 border-t border-white/20" />
              )}
            </div>
          );
        })}
      </div>
      <div className="flex justify-center mt-2">
        <a href="#" target="_blank">
          {' '}
          <MagicButton
            title="Dapatkan Sekarang"
            className="hover:bg-black transition-colors duration-200 bg-transparent ease-in "
          />
        </a>
      </div>
    </div>
  );
};

export default FAQLiquidGlass;
