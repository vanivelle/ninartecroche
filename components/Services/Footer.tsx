"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  MapPin,
  Mail,
  Phone,
  Instagram,
  MessageCircle,
  Heart,
} from "lucide-react";
import { COMPANY_INFO } from "@/lib/constants";
import { generateWhatsAppLink } from "@/lib/utils";
import { staggerContainer, staggerItem, fadeInUp } from "@/lib/animations";

interface ContactInfoProps {
  icon: React.ReactNode;
  title: string;
  content: string;
  link?: string;
}

export const ContactInfo: React.FC<ContactInfoProps> = ({
  icon,
  title,
  content,
  link,
}) => {
  const Component = link ? "a" : "div";

  return (
    <motion.div variants={staggerItem}>
      {
        <Component
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-start gap-4 group cursor-pointer"
        >
          <div className="p-3 bg-pink-500/20 rounded-lg text-pink-500 group-hover:bg-pink-500 group-hover:text-white transition-all">
            {icon}
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 group-hover:text-pink-500 transition-colors">
              {title}
            </h3>
            <p className="text-gray-600 group-hover:text-gray-700 transition-colors">
              {content}
            </p>
          </div>
        </Component>
      }
    </motion.div>
  );
};

interface FooterProps {
  companyName?: string;
}

export const Footer: React.FC<FooterProps> = ({
  companyName = COMPANY_INFO.name,
}) => {
  const currentYear = new Date().getFullYear();

  const whatsAppLink = generateWhatsAppLink(COMPANY_INFO.whatsapp, "Olá! Gostaria de fazer um pedido.");

  const socialLinks = [
    {
      icon: <MessageCircle className="w-6 h-6" />,
      href: whatsAppLink,
      label: "WhatsApp",
    },
    {
      icon: <Instagram className="w-6 h-6" />,
      href: COMPANY_INFO.instagramUrl,
      label: "Instagram",
    },
  ];

  return (
    <footer id="footer" className="bg-gradient-to-b from-gray-900 to-black text-white">
      <div className="py-16 px-4 border-b border-gray-800">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Entre em Contato</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Ficou com alguma dúvida ou quer fazer um pedido? Fale com a gente!
            </p>
          </motion.div>
          <motion.div
            className="grid md:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <ContactInfo
              icon={<MapPin className="w-6 h-6" />}
              title="Localização"
              content={COMPANY_INFO.address}
            />
            <ContactInfo
              icon={<Phone className="w-6 h-6" />}
              title="WhatsApp"
              content={COMPANY_INFO.phone}
              link={whatsAppLink}
            />
            <ContactInfo
              icon={<Mail className="w-6 h-6" />}
              title="Email"
              content={COMPANY_INFO.email}
              link={`mailto:${COMPANY_INFO.email}`}
            />
          </motion.div>
        </div>
      </div>

      <div className="py-8 px-4">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            className="grid md:grid-cols-3 gap-8 items-center"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div variants={staggerItem}>
              <h3 className="text-3xl font-brand text-pink-400">{companyName}</h3>
              <p className="text-gray-400 text-sm mt-2">
                Peças artesanais de crochê feitas com amor
              </p>
            </motion.div>

            <motion.div variants={staggerItem} className="text-center">
              <h4 className="font-semibold text-white mb-3">Links</h4>
              <div className="space-y-2">
                <a href="#services" className="block text-gray-400 hover:text-white transition-colors">Nossas Peças</a>
                <a href="#gallery" className="block text-gray-400 hover:text-white transition-colors">Galeria</a>
                <a href="#contact" className="block text-gray-400 hover:text-white transition-colors">Fazer Pedido</a>
              </div>
            </motion.div>

            {/* Social Links */}
            <motion.div variants={staggerItem} className="flex justify-end gap-4">
              {socialLinks.map((social, idx) => (
                <motion.a
                  key={idx}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-gray-800 text-gray-300 rounded-lg hover:bg-pink-500 hover:text-white transition-all"
                  whileHover={{ scale: 1.1, rotate: 360 }}
                  whileTap={{ scale: 0.9 }}
                  title={social.label}
                >
                  {social.icon}
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Copyright */}
          <motion.div
            className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <p className="flex items-center justify-center gap-2">
              © {currentYear} {companyName}. Built with{" "}
              <Heart className="w-4 h-4 text-pink-500 fill-pink-500" /> por amor ao crochê.
            </p>
            <p className="text-sm mt-2">Entregamos para todo o Brasil 🇬🇧</p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

Footer.displayName = "Footer";
