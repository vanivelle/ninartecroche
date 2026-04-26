"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { SERVICES } from "@/lib/constants";
import Image from "next/image";

interface BookingFormProps {
  onSuccess?: (data: unknown) => void;
}

export const BookingForm: React.FC<BookingFormProps> = ({ onSuccess }) => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setStatus("idle");
    setErrorMessage("");

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Erro ao enviar email");
      }

      // Send SMS notification in parallel (non-blocking)
      fetch("/api/send-sms", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      }).catch((err) => {
        console.error("SMS notification failed:", err);
      });

      setStatus("success");
      setFormData({
        name: "",
        email: "",
        phone: "",
        service: "",
        message: "",
      });

      if (onSuccess) {
        onSuccess(data);
      }

      setTimeout(() => {
        router.push("/thank-you");
      }, 2000);
    } catch (error) {
      setStatus("error");
      setErrorMessage(
        error instanceof Error ? error.message : "Erro desconhecido"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="relative py-20 md:py-32 px-4 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/end-background.jpg"
          alt="Fundo com itens de crochê"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      <div className="relative z-10 container-custom max-w-2xl">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4" style={{ textShadow: '2px 2px 8px rgba(0,0,0,0.7)' }}>
            Fale Conosco
          </h2>
          <p className="text-xl text-white/90">
            Tem uma ideia? Vamos transformá-la em arte!
          </p>
        </motion.div>

        <motion.form
          onSubmit={handleSubmit}
          className="bg-white/90 backdrop-blur-md rounded-2xl p-8 shadow-2xl space-y-6"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Name */}
          <motion.div variants={fadeInUp}>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Seu Nome *
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Como podemos te chamar?"
              className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 focus:border-amber-500 focus:ring-2 focus:ring-amber-100 transition-all"
            />
          </motion.div>

          {/* Email */}
          <motion.div variants={fadeInUp}>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Seu Melhor Email *
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="exemplo@email.com"
              className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 focus:border-amber-500 focus:ring-2 focus:ring-amber-100 transition-all"
            />
          </motion.div>

          {/* Phone */}
          <motion.div variants={fadeInUp}>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              WhatsApp *
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              placeholder="(XX) 99999-9999"
              className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 focus:border-amber-500 focus:ring-2 focus:ring-amber-100 transition-all"
            />
          </motion.div>

          {/* Service */}
          <motion.div variants={fadeInUp}>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Em qual produto você tem interesse?
            </label>
            <select
              name="service"
              value={formData.service}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 focus:border-amber-500 focus:ring-2 focus:ring-amber-100 transition-all"
            >
              <option value="">Selecione um produto...</option>
              {Object.values(SERVICES).map(service => (
                <option key={service.title} value={service.title}>{service.title}</option>
              ))}
              <option value="Outro">Outro (descreva abaixo)</option>
            </select>
          </motion.div>

          {/* Message */}
          <motion.div variants={fadeInUp}>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Sua Mensagem *
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              placeholder="Conte-nos sobre sua ideia, cores, tamanhos..."
              className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 focus:border-amber-500 focus:ring-2 focus:ring-amber-100 transition-all resize-none"
              rows={4}
            />
          </motion.div>

          {status === "success" && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="p-4 rounded-lg bg-green-50 border-2 border-green-200"
            >
              <p className="text-green-700 font-semibold">
                ✓ Mensagem enviada com sucesso! Em breve entraremos em contato.
              </p>
            </motion.div>
          )}

          {status === "error" && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="p-4 rounded-lg bg-red-50 border-2 border-red-200"
            >
              <p className="text-red-700 font-semibold">
                ✗ Erro ao enviar: {errorMessage}
              </p>
            </motion.div>
          )}

          <motion.div variants={fadeInUp}>
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-amber-500 text-white py-4 rounded-lg font-bold text-lg hover:bg-amber-600 transition-colors shadow-lg hover:shadow-xl disabled:bg-gray-400 disabled:cursor-not-allowed"
            >
              {loading ? "Enviando..." : "Enviar Pedido de Orçamento"}
            </button>
          </motion.div>

          <p className="text-sm text-gray-600 text-center">
            Para um contato mais rápido, chame no WhatsApp!
          </p>
        </motion.form>
      </div>
    </section>
  );
};

BookingForm.displayName = "BookingForm";

