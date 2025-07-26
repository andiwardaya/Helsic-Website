import { ExpandableCardDemo } from '@/components/ExpendableCard';
import FAQLiquidGlass from '@/components/FaqLiquidGlass';
import { FeatureHeader } from '@/components/FeatureHeader';
import { Footer } from '@/components/Footer';
import { GeminiParent } from '@/components/GeminiParent';
import { HeaderWavy } from '@/components/HeaderWavy';
import { HelscicCarousel } from '@/components/HelscicCarousel';
import { Hero } from '@/components/Hero';
import { KenapaHelsic } from '@/components/KenapaHelsic';
import { MainFeatureGrid } from '@/components/MainFeatureGrid';
import { MovingCardsParent } from '@/components/MovingCardsParent';
import { Navbar } from '@/components/Navbar';
import { TimelineParent } from '@/components/TimelineParent';

export default function Home() {
  return (
    <div className="">
      <Navbar />
      <Hero />
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
      <Footer />
    </div>
  );
}
