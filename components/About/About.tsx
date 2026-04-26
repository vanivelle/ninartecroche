'use client'

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Heart, Feather, Palette } from 'lucide-react'
import { COMPANY_INFO } from '@/lib/constants'

export const About = (): React.JSX.Element => {
  const differentials = [
    { icon: Heart, text: 'Peças 100% artesanais, feitas com amor.' },
    { icon: Palette, text: 'Designs exclusivos e personalizados para você.' },
    { icon: Feather, text: 'Materiais de alta qualidade para maior durabilidade.' },
    { text: 'Entregamos com carinho para todo o Brasil.' },
  ]

  return (
    <section id="about" className="relative py-20 md:py-32 px-4">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/backgrounds/mid-background.jpg"
          alt="Fundo com textura de crochê"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-white/80 backdrop-blur-sm" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            A Arte de Tecer Sonhos
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Conheça a paixão e a história por trás de cada peça da Ninartcrochê.
          </p>
        </motion.div>

        <div className="bg-white/70 backdrop-blur-md p-8 md:p-12 rounded-2xl shadow-2xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <p className="text-lg text-gray-800 leading-relaxed">
                Na Ninartcrochê, cada fio conta uma história. Com mais de {COMPANY_INFO.yearsExperience} anos de experiência, transformamos linhas em verdadeiras obras de arte. O que começou como um hobby, floresceu para uma marca que leva aconchego e estilo para lares de todo o Brasil.
              </p>
              <p className="text-lg text-gray-800 leading-relaxed">
                Nossa missão é criar peças que não apenas decoram, mas que também carregam a energia do trabalho manual, a dedicação em cada ponto e o carinho de um produto feito especialmente para você.
              </p>
            </motion.div>

            <motion.div
              className="space-y-5"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {differentials.map((item, idx) => (
                <div key={idx} className="flex items-center gap-4">
                  {item.icon && <item.icon className="w-8 h-8 text-amber-500 flex-shrink-0" />}
                  <span className="text-lg font-medium text-gray-800">{item.text}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

About.displayName = 'About'

