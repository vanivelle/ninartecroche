'use client'

import { ProductCarousel } from '../ProductCarousel'
import { motion } from 'framer-motion'

const images1 = [
  "/images/projects/croche/bolsas/bolsa1.jpg",
  "/images/projects/croche/bolsas/bolsa2.jpg",
  "/images/projects/croche/bolsas/bolsa3.jpg",
  "/images/projects/croche/bolsas/bolsa4.jpg",
  "/images/projects/croche/bolsas/bolsa5.jpg",
  "/images/projects/croche/bolsas/bolsa6.jpg",
  "/images/projects/croche/bolsas/bolsa7.jpg",
];

const images2 = [
  "/images/projects/croche/roupas-praia/roupa-praia1.jpg",
  "/images/projects/croche/roupas-praia/roupa-praia2.jpg",
  "/images/projects/croche/roupas-praia/roupa-praia3.jpg",
  "/images/projects/croche/roupas-praia/roupa-praia4.jpg",
  "/images/projects/croche/roupas-praia/roupa-praia5.jpg",
  "/images/projects/croche/roupas-praia/roupa-praia6.jpg",
  "/images/projects/croche/roupas-praia/roupa-praia7.jpg",
  "/images/projects/croche/roupas-praia/roupa-praia8.jpg",
  "/images/projects/croche/roupas-praia/roupa-praia9.jpg",
  "/images/projects/croche/roupas-praia/roupa-praia10.jpg",
];

const images3 = [
  "/images/projects/croche/sousplats/sousplat1.jpg",
  "/images/projects/croche/sousplats/sousplat2.jpg",
  "/images/projects/croche/sousplats/sousplat3.jpg",
  "/images/projects/croche/sousplats/sousplat4.jpg",
  "/images/projects/croche/sousplats/sousplat5.jpg",
  "/images/projects/croche/sousplats/sousplat6.jpg",
  "/images/projects/croche/sousplats/sousplat7.jpg",
  "/images/projects/croche/sousplats/sousplat8.jpg",
  "/images/projects/croche/sousplats/sousplat9.jpg",
  "/images/projects/croche/sousplats/sousplat10.jpg",
  "/images/projects/croche/sousplats/sousplat11.jpg",
];

const images4 = [
  "/images/projects/croche/acessorios/acessorio1.jpg",
  "/images/projects/croche/acessorios/acessorio2.jpg",
  "/images/projects/croche/acessorios/acessorio3.jpg",
  "/images/projects/croche/acessorios/acessorio4.jpg",
  "/images/projects/croche/acessorios/acessorio5.jpg",
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
          <ProductCarousel images={images1} category="Bolsas" />
          <ProductCarousel images={images2} category="Roupas de Praia" />
          <ProductCarousel images={images3} category="Souplats" />
          <ProductCarousel images={images4} category="Acessórios" />
        </div>
      </div>
    </section>
  )
}
