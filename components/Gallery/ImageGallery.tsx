'use client'

import { ProductCarousel } from '../ProductCarousel'
import { motion } from 'framer-motion'

// Bolsas: bolsa1-3, bolsa6-7 (corretas) + bolsas que estavam em roupas-praia
const imagesBolsas = [
  "/images/projects/croche/bolsas/bolsa1.jpg",
  "/images/projects/croche/bolsas/bolsa2.jpg",
  "/images/projects/croche/bolsas/bolsa3.jpg",
  "/images/projects/croche/bolsas/bolsa6.jpg",
  "/images/projects/croche/bolsas/bolsa7.jpg",
  "/images/projects/croche/roupas-praia/roupa-praia1.jpg",
  "/images/projects/croche/roupas-praia/roupa-praia3.jpg",
  "/images/projects/croche/roupas-praia/roupa-praia5.jpg",
  "/images/projects/croche/roupas-praia/roupa-praia8.jpg",
  "/images/projects/croche/roupas-praia/roupa-praia10.jpg",
];

// Roupas de Praia: corretas (roupa7, roupa9) + biquinis que estavam em souplats e acessórios
const imagesRoupasPraia = [
  "/images/projects/croche/roupas-praia/roupa-praia7.jpg",
  "/images/projects/croche/roupas-praia/roupa-praia9.jpg",
  "/images/projects/croche/sousplats/sousplat10.jpg",
  "/images/projects/croche/sousplats/sousplat11.jpg",
  "/images/projects/croche/acessorios/acessorio3.jpg",
];

// Souplats: sousplat1-9 (corretos, removidos sousplat10 e 11 que eram biquinis)
const imagesSouplats = [
  "/images/projects/croche/sousplats/sousplat1.jpg",
  "/images/projects/croche/sousplats/sousplat2.jpg",
  "/images/projects/croche/sousplats/sousplat3.jpg",
  "/images/projects/croche/sousplats/sousplat4.jpg",
  "/images/projects/croche/sousplats/sousplat5.jpg",
  "/images/projects/croche/sousplats/sousplat6.jpg",
  "/images/projects/croche/sousplats/sousplat7.jpg",
  "/images/projects/croche/sousplats/sousplat8.jpg",
  "/images/projects/croche/sousplats/sousplat9.jpg",
];

// Tapetes: tapete1 + tapetes que estavam misturados em outras categorias
const imagesTapetes = [
  "/images/projects/croche/tapetes/tapete1.jpg",
  "/images/projects/croche/bolsas/bolsa5.jpg",
  "/images/projects/croche/roupas-praia/roupa-praia2.jpg",
  "/images/projects/croche/roupas-praia/roupa-praia4.jpg",
  "/images/projects/croche/roupas-praia/roupa-praia6.jpg",
  "/images/projects/croche/acessorios/acessorio4.jpg",
];

// Acessórios: acessorio1, 2, 5 (corretos) + chaveiro bolsa4
const imagesAcessorios = [
  "/images/projects/croche/acessorios/acessorio1.jpg",
  "/images/projects/croche/acessorios/acessorio2.jpg",
  "/images/projects/croche/acessorios/acessorio5.jpg",
  "/images/projects/croche/bolsas/bolsa4.jpg",
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
          <ProductCarousel images={imagesBolsas} category="Bolsas" />
          <ProductCarousel images={imagesRoupasPraia} category="Roupas de Praia" />
          <ProductCarousel images={imagesSouplats} category="Souplats" />
          <ProductCarousel images={imagesTapetes} category="Tapetes" />
          <ProductCarousel images={imagesAcessorios} category="Acessórios" />
        </div>
      </div>
    </section>
  )
}
