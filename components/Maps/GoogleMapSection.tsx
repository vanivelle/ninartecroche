"use client";

import React from "react";
import { motion } from "framer-motion";
import { MapPin, ExternalLink } from "lucide-react";
import { fadeInUp, staggerContainer } from "@/lib/animations";

export const GoogleMapSection: React.FC = () => {
  const googleMapsUrl =
    "https://www.google.com/maps/place/Bras%C3%ADlia,+DF";
  const embedUrl =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d245456.77777!2d-48.2!3d-15.78!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935a3d3fc47828df%3A0xfa7f8efbb01c0e8!2sBras%C3%ADlia%2C%20DF!5e0!3m2!1spt!2sbr!4v1234567890";

  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Onde Estamos
          </h2>
          <p className="text-xl text-gray-600">
            Baseados em Brasília, entregamos para todo o Brasil!
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 gap-8 items-center"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Map Embed */}
          <motion.div variants={fadeInUp} className="rounded-2xl overflow-hidden shadow-lg">
            <iframe
              width="100%"
              height="450"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              src={embedUrl}
              className="w-full"
            ></iframe>
          </motion.div>

          {/* Location Info */}
          <motion.div variants={fadeInUp} className="space-y-6">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                Nossa Localização
              </h3>
              <p className="text-gray-600 mb-6">
                Estamos em Brasília, DF, e enviamos nossas peças artesanais para todo o Brasil com muito carinho!
              </p>
            </div>

            {/* Address Card */}
            <div className="bg-white border-2 border-pink-100 rounded-xl p-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-pink-100 rounded-lg text-pink-500">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Endereço</h4>
                  <p className="text-gray-600">
                    Brasília, DF<br />
                    Brasil �🇷
                  </p>
                </div>
              </div>
            </div>

            {/* Open in Google Maps Button */}
            <a
              href={googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-pink-500 text-white px-6 py-4 rounded-lg font-bold text-lg hover:bg-pink-600 transition-all shadow-lg hover:shadow-xl w-full justify-center"
            >
              <MapPin className="w-5 h-5" />
              Ver no Google Maps
              <ExternalLink className="w-5 h-5" />
            </a>

            {/* Hours Notice */}
            <p className="text-sm text-gray-500 italic">
              📍 Clique no botão acima para ver nossa localização no Google Maps
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

GoogleMapSection.displayName = "GoogleMapSection";
