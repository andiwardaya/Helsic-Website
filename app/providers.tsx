// app/providers.tsx
'use client'; // Wajib ada karena ini Client Component

import * as React from 'react';
import { LazyMotion, domAnimation } from 'framer-motion';

export interface ProvidersProps {
  children: React.ReactNode;
}

export function Providers({ children }: ProvidersProps) {
  return (
    // domAnimation mengurangi ukuran bundle framer-motion secara drastis
    <LazyMotion features={domAnimation}>{children}</LazyMotion>
  );
}
