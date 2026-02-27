'use client';

import { cn } from '@/lib/utils';
import React, { useEffect, useState, useCallback } from 'react';

export const InfiniteMovingCards = ({
  items,
  direction = 'left',
  speed = 'fast',
  pauseOnHover = true,
  className,
}: {
  items: {
    name: string;
    desc: string;
    imageUrl: string;
  }[];
  direction?: 'left' | 'right';
  speed?: 'fast' | 'normal' | 'slow';
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);
  const [start, setStart] = useState(false);

  const getDirection = useCallback(() => {
    if (!containerRef.current) return;
    containerRef.current.style.setProperty(
      '--animation-direction',
      direction === 'left' ? 'forwards' : 'reverse'
    );
  }, [direction]);

  const getSpeed = useCallback(() => {
    if (!containerRef.current) return;
    if (speed === 'fast') {
      containerRef.current.style.setProperty('--animation-duration', '20s');
    } else if (speed === 'normal') {
      containerRef.current.style.setProperty('--animation-duration', '40s');
    } else {
      containerRef.current.style.setProperty('--animation-duration', '80s');
    }
  }, [speed]);

  // ✅ Bungkus addAnimation dengan useCallback supaya stabil
  const addAnimation = useCallback(() => {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        scrollerRef.current?.appendChild(duplicatedItem);
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }, [getDirection, getSpeed]);

  // ✅ Sekarang aman dipanggil di useEffect
  useEffect(() => {
    addAnimation();
  }, [addAnimation]);

  return (
    <div
      ref={containerRef}
      className={cn(
        'scroller relative z-20 max-w-7xl overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]',
        className
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          'flex w-max min-w-full shrink-0 flex-nowrap gap-4 py-4',
          start && 'animate-scroll',
          pauseOnHover && 'hover:[animation-play-state:paused]'
        )}
      >
        {items.map((item) => (
          <div
            key={item.name}
            className="relative flex w-[350px] max-w-full h-[350px] shrink-0 rounded-2xl border border-b-0  px-8 py-6 md:w-[450px] border-zinc-700 bg-[linear-gradient(180deg,#27272a,#18181b)]"
            style={{
              backgroundImage: `url(${item.imageUrl})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <div
              aria-hidden="true"
              className="user-select-none pointer-events-none absolute -top-0.5 -left-0.5 -z-1 h-[calc(100%_+_4px)] w-[calc(100%_+_4px)]"
            ></div>
            <div className="flex flex-col items-start text-gray-200">
              <p className="text-2xl font-bold  shadow-lg rounded-md backdrop:blur-md bg-black bg-opacity-15">
                {item.name}
              </p>
              <p className="text-sm shadow-md ">{item.desc}</p>
            </div>
          </div>
        ))}
      </ul>
    </div>
  );
};
