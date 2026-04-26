'use client'

import { ProductCarousel } from '../ProductCarousel'
import { motion } from 'framer-motion'

const images1 = [
  "/images/projects/croche/WhatsApp Image 2026-04-26 at 15.00.40.jpeg",
  "/images/projects/croche/WhatsApp Image 2026-04-26 at 14.59.59 (2).jpeg",
  "/images/projects/croche/WhatsApp Image 2026-04-26 at 14.59.59 (1).jpeg",
  "/images/projects/croche/WhatsApp Image 2026-04-26 at 14.59.59.jpeg",
  "/images/projects/croche/WhatsApp Image 2026-04-26 at 14.59.58 (1).jpeg",
  "/images/projects/croche/WhatsApp Image 2026-04-26 at 14.59.58.jpeg",
  "/images/projects/croche/WhatsApp Image 2026-04-26 at 14.59.57.jpeg",
  "/images/projects/croche/WhatsApp Image 2026-04-26 at 14.59.16.jpeg",
  "/images/projects/croche/WhatsApp Image 2026-04-26 at 14.59.15.jpeg",
  "/images/projects/croche/WhatsApp Image 2026-04-26 at 14.58.58.jpeg",
  "/images/projects/croche/WhatsApp Image 2026-04-26 at 14.58.24 (2).jpeg",
  "/images/projects/croche/WhatsApp Image 2026-04-26 at 14.58.24 (1).jpeg",
];

const images2 = [
  "/images/projects/croche/WhatsApp Image 2026-04-26 at 14.58.24.jpeg",
  "/images/projects/croche/WhatsApp Image 2026-04-26 at 14.58.23 (5).jpeg",
  "/images/projects/croche/WhatsApp Image 2026-04-26 at 14.58.23 (4).jpeg",
  "/images/projects/croche/WhatsApp Image 2026-04-26 at 14.58.23 (3).jpeg",
  "/images/projects/croche/WhatsApp Image 2026-04-26 at 14.58.23 (2).jpeg",
  "/images/projects/croche/WhatsApp Image 2026-04-26 at 14.58.23 (1).jpeg",
  "/images/projects/croche/WhatsApp Image 2026-04-26 at 14.58.23.jpeg",
  "/images/projects/croche/WhatsApp Image 2026-04-26 at 14.58.22 (3).jpeg",
  "/images/projects/croche/WhatsApp Image 2026-04-26 at 14.58.22 (2).jpeg",
  "/images/projects/croche/WhatsApp Image 2026-04-26 at 14.58.22 (1).jpeg",
  "/images/projects/croche/WhatsApp Image 2026-04-26 at 14.58.22.jpeg",
];

const images3 = [
  "/images/projects/croche/WhatsApp Image 2026-04-26 at 14.58.10.jpeg",
  "/images/projects/croche/WhatsApp Image 2026-04-26 at 14.58.09.jpeg",
  "/images/projects/croche/WhatsApp Image 2026-04-26 at 15.09.51 (4).jpeg",
  "/images/projects/croche/WhatsApp Image 2026-04-26 at 15.09.51 (3).jpeg",
  "/images/projects/croche/WhatsApp Image 2026-04-26 at 15.09.51 (2).jpeg",
  "/images/projects/croche/WhatsApp Image 2026-04-26 at 15.09.51 (1).jpeg",
  "/images/projects/croche/WhatsApp Image 2026-04-26 at 15.09.51.jpeg",
  "/images/projects/croche/WhatsApp Image 2026-04-26 at 15.09.50 (1).jpeg",
  "/images/projects/croche/WhatsApp Image 2026-04-26 at 15.09.50.jpeg",
  "/images/projects/croche/WhatsApp Image 2026-04-26 at 15.00.48 (1).jpeg",
  "/images/projects/croche/WhatsApp Image 2026-04-26 at 15.00.48.jpeg",
];

export function ImageGallery() {
  return (
    <section id="gallery" className="py-20 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Nossa Galeria de Arte
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Explore algumas das peças exclusivas que criamos com amor e dedicação. Cada item conta uma história.
          </p>
        </motion.div>

        <div className="space-y-16">
          <ProductCarousel images={images1} category="Bolsas e Acessórios" />
          <ProductCarousel images={images2} category="Decoração e Casa" />
          <ProductCarousel images={images3} category="Vestuário e Roupas de Praia" />
        </div>
      </div>
    </section>
  )
}
