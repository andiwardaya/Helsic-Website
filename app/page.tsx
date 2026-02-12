import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { Footer } from '@/components/Footer';
import { HomeContent } from '@/components/HomeContent'; // Import wrapper baru tadi

export default function Home() {
  return (
    <div className="">
      {/* BAGIAN SERVER (Muncul Instan & Bagus untuk SEO) */}
      <Navbar />
      <Hero />

      {/* BAGIAN CLIENT (Di-load secara malas/lazy di background) */}
      <HomeContent />

      {/* Footer sebaiknya statis agar info kontak terbaca Google (SEO) */}
      <Footer />
    </div>
  );
}
