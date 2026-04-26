'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { ArrowRight, Phone, Calendar } from 'lucide-react'
import { COMPANY_INFO } from '@/lib/constants'

interface HeroProps {
  onCTAClick: () => void;
}

export function Hero({ onCTAClick }: HeroProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      
      {/* IMAGE BACKGROUND */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-background.jpg"
          alt="Fundo de crochê com novelos de lã"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/70" />
     </div>

      {/* CONTEÚDO */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 py-20 text-center">
        
        {/* LOGO */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <Image
            src="/images/logo.png"
            alt="Ninartcrochê Logo"
            width={250}
            height={100}
            className="mx-auto drop-shadow-2xl"
            priority
          />
        </motion.div>

        {/* HEADLINE */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight"
          style={{ textShadow: '2px 2px 8px rgba(0,0,0,0.7)' }}
        >
          {COMPANY_INFO.tagline}
        </motion.h1>

        {/* SUBHEADLINE */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl md:text-2xl text-white/90 mb-12 drop-shadow-lg max-w-3xl mx-auto"
        >
          Peças únicas, feitas à mão com amor. <strong>Entregamos para todo o Brasil.</strong>
        </motion.p>

        {/* CTAs */}
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <button
              onClick={onCTAClick}
              className="group relative px-8 py-5 bg-amber-400 text-gray-900 rounded-xl font-bold text-lg overflow-hidden hover:shadow-2xl transition-all"
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                <Calendar className="w-6 h-6" />
                Solicitar Orçamento
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-amber-500 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            </button>
        </motion.div>

        {/* SCROLL INDICATOR */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center pt-2">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1.5 h-1.5 bg-white rounded-full"
            />
          </div>
        </motion.div>

      </div>
    </section>
  )
}
