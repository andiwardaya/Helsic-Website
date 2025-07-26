import React from 'react';
import { cn } from '@/lib/utils';

interface MagicButtonProps {
  title: string;
  icon?: React.ReactNode;
  className?: string;
}

export const MagicButton = ({ title, icon, className }: MagicButtonProps) => {
  return (
    <button className="relative my-5 inline-flex h-12 w-52 overflow-hidden rounded-full p-[2px] focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-slate-50">
      {/* Ganti gradient warna di bawah ini */}
      <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#00ffff_0%,#008b8b_50%,#00ffff_100%)]" />

      <span
        className={cn(
          'inline-flex h-full w-full cursor-pointer items-center justify-center gap-2 rounded-full bg-slate-950 px-5 py-1 font-bold text-gray-200 backdrop-blur-3xl',
          className
        )}
      >
        {title}
        {icon && icon}
      </span>
    </button>
  );
};
