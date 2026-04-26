'use client';
import React from 'react';
import { COMPANY_INFO } from '@/lib/constants';
import Image from 'next/image';
import { Button } from '../UI/Button';

interface HeroProps {
  onCTAClick?: () => void;
}

const Hero: React.FC<HeroProps> = ({ onCTAClick }) => {
  return (
    <section
      id="home"
      className="relative h-screen w-full flex items-center justify-center text-center overflow-hidden"
      style={{
        backgroundImage: `url('/images/backgrounds/hero-background.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50 z-10"></div>
      <div className="relative z-20 flex flex-col items-center text-white px-4">
        <div className="w-40 h-40 md:w-56 md:h-56 mb-6">
          <Image
            src={COMPANY_INFO.logo}
            alt={`${COMPANY_INFO.name} Logo`}
            width={224}
            height={224}
            className="object-contain"
            priority
          />
        </div>
        <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-4">
          {COMPANY_INFO.name}
        </h1>
        <p className="text-lg md:text-2xl max-w-2xl mb-8">
          {COMPANY_INFO.headline}
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Button
            size="lg"
            onClick={onCTAClick}
            className="bg-pink-500 hover:bg-pink-600 text-white"
          >
            Faça seu Orçamento
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;