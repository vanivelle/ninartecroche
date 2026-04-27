"use client";

import React from "react";
import { motion } from "framer-motion";
import { Shirt, ShoppingBag, Anchor, Key, Home, CheckCircle2 } from "lucide-react";
import { Card } from "@/components/UI/Card";
import { staggerContainer, staggerItem } from "@/lib/animations";

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description, features }) => {
  return (
    <motion.div variants={staggerItem}>
      <Card variant="glass" hover className="h-full">
        <div className="space-y-4">
          <motion.div initial={{ scale: 0 }} whileInView={{ scale: 1 }} transition={{ type: "spring", stiffness: 100 }} viewport={{ once: true }}>
            <div className="w-16 h-16 bg-gradient-to-br from-pink-400 to-pink-600 rounded-2xl flex items-center justify-center text-white shadow-lg">
              {icon}
            </div>
          </motion.div>
          <h3 className="text-2xl font-bold text-gray-900">{title}</h3>
          <p className="text-gray-600">{description}</p>
          <div className="space-y-2">
            {features.map((feature, idx) => (
              <motion.div key={idx} className="flex items-center gap-2" initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: idx * 0.1 }} viewport={{ once: true }}>
                <CheckCircle2 className="w-5 h-5 text-pink-500 flex-shrink-0" />
                <span className="text-gray-700">{feature}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </Card>
    </motion.div>
  );
};

interface ServicesGridProps {
  onServiceClick?: (serviceId: string) => void;
}

export const ServicesGrid: React.FC<ServicesGridProps> = () => {
  const services = [
    { id: "tapetes", icon: <Home className="w-8 h-8" />, title: "Tapetes Personalizados", description: "Tapetes de crochê feitos sob medida para qualquer ambiente da sua casa.", features: ["Design exclusivo no seu estilo", "Diversas cores e tamanhos", "Material de alta qualidade"] },
    { id: "roupas-praia", icon: <Anchor className="w-8 h-8" />, title: "Roupas de Praia", description: "Biquínis, saídas de praia e tops em crochê para arrasar no verão.", features: ["Peças únicas feitas à mão", "Confortáveis e elegantes", "Perfeitas para o verão"] },
    { id: "souplats", icon: <Home className="w-8 h-8" />, title: "Souplats (Porta-Pratos)", description: "Decore sua mesa com souplats artesanais cheios de charme e personalidade.", features: ["Mesa posta com muito estilo", "Várias opções de cores", "Acabamento impecável"] },
    { id: "bolsas", icon: <ShoppingBag className="w-8 h-8" />, title: "Bolsas de Crochê", description: "Bolsas estilosas e versáteis para todas as ocasiões do dia a dia.", features: ["Design moderno e atual", "Resistentes e práticas", "Cada peça é única"] },
    { id: "acessorios", icon: <Shirt className="w-8 h-8" />, title: "Acessórios", description: "Peças delicadas como tops, saias e outros acessórios de crochê.", features: ["Feitos com muito carinho", "Leves e delicados", "Ótimas opções de presente"] },
    { id: "chaveiros", icon: <Key className="w-8 h-8" />, title: "Chaveiros e Lembranças", description: "Chaveiros e lembrancinhas artesanais, ótimos para presentear.", features: ["Criativos e delicados", "Perfeitos para presente", "Diversos modelos disponíveis"] },
  ];

  return (
    <section id="services" className="py-20 px-4 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto max-w-7xl">
        <motion.div className="text-center mb-16" initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Nossas Peças</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">Tudo feito a mao com amor. Entregamos para todo o Brasil!</p>
        </motion.div>
        <motion.div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          {services.map((service) => (
            <ServiceCard key={service.id} icon={service.icon} title={service.title} description={service.description} features={service.features} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};
