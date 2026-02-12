'use client'; // <--- INI KUNCINYA. File ini berjalan di Client.

import dynamic from 'next/dynamic';
import React from 'react';

// --- PINDAHKAN SEMUA DYNAMIC IMPORT KE SINI ---

const FeatureHeader = dynamic(() =>
  import('@/components/FeatureHeader').then((mod) => mod.FeatureHeader)
);

const TimelineParent = dynamic(() =>
  import('@/components/TimelineParent').then((mod) => mod.TimelineParent)
);

const KenapaHelsic = dynamic(() =>
  import('@/components/KenapaHelsic').then((mod) => mod.KenapaHelsic)
);

const HelscicCarousel = dynamic(() =>
  import('@/components/HelscicCarousel').then((mod) => mod.HelscicCarousel)
);

const MainFeatureGrid = dynamic(() =>
  import('@/components/MainFeatureGrid').then((mod) => mod.MainFeatureGrid)
);

const HeaderWavy = dynamic(() =>
  import('@/components/HeaderWavy').then((mod) => mod.HeaderWavy)
);

const ExpandableCardDemo = dynamic(() =>
  import('@/components/ExpendableCard').then((mod) => mod.ExpandableCardDemo)
);

// Cek file FaqLiquidGlass kamu, kalau export default pakai ini:
// const FAQLiquidGlass = dynamic(() => import('@/components/FaqLiquidGlass'));
// Kalau export function/const pakai ini:
const FAQLiquidGlass = dynamic(() => import('@/components/FaqLiquidGlass'));

const GeminiParent = dynamic(() =>
  import('@/components/GeminiParent').then((mod) => mod.GeminiParent)
);

// DI SINI KITA BISA PAKAI ssr: false DENGAN AMAN
const MovingCardsParent = dynamic(
  () =>
    import('@/components/MovingCardsParent').then(
      (mod) => mod.MovingCardsParent
    ),
  { ssr: false }
);

export const HomeContent = () => {
  return (
    <div className="">
      <FeatureHeader />
      <TimelineParent />
      <KenapaHelsic />
      <HelscicCarousel />
      <MainFeatureGrid />
      <HeaderWavy />
      <ExpandableCardDemo />
      <FAQLiquidGlass />
      <GeminiParent />
      <MovingCardsParent />
    </div>
  );
};
