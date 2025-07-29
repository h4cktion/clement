'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

export default function ParallaxHero({ imageSrc, title, subtitle }) {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative h-screen overflow-hidden">
      <div 
        className="absolute inset-0 will-change-transform"
        style={{
          transform: `translateY(${scrollY * 0.5}px)`
        }}
      >
        <Image
          src={imageSrc}
          alt={title}
          fill
          className="object-cover"
          priority
        />
      </div>
      
      <div className="absolute inset-0 bg-black/30" />
      
      <div className="relative z-10 flex items-center justify-center h-full text-center text-white">
        <div className="max-w-4xl px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-4 font-['Cormorant_Garamond'] fade-in">
            {title}
          </h1>
          {subtitle && (
            <p className="text-xl md:text-2xl font-light fade-in" style={{ animationDelay: '0.3s' }}>
              {subtitle}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}