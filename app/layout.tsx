// app/layout.tsx
import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { Providers } from './providers';
// Pastikan path-nya sesuai lokasi file kamu

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
  display: 'swap', // Optimisasi Font: agar teks muncul dulu sebelum font ter-load
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Helsic | Bentuk Badan Terbaikmu', // Sedikit dipercantik untuk SEO
  description:
    'Program latihan rumahan efektif tanpa alat mahal. Protokol Helsic membantu merancang sistem latihan natural.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black`}
      >
        {/* Bungkus children dengan Providers yang sudah dioptimisasi */}
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
