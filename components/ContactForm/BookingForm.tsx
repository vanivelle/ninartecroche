'use client';
import React, { useState } from 'react';
import { COMPANY_INFO, SERVICES } from '@/lib/constants';

const serviceList = Object.values(SERVICES).map((s) => s.title);

export const ContactForm = (): React.JSX.Element => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: '',
    message: '',
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const phone = COMPANY_INFO.whatsapp.replace(/\D/g, '');
    const text = `Olá! Meu nome é ${formData.name}. Gostaria de um orçamento para "${formData.service}". Mensagem: ${formData.message}. (Email: ${formData.email})`;
    const whatsappUrl = `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section
      id="contact"
      className="py-20 px-4"
      style={{
        backgroundImage: `url('/images/backgrounds/end-background.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="container mx-auto max-w-2xl bg-white p-8 rounded-lg shadow-2xl">
        <h2 className="text-4xl font-bold text-center mb-2 text-gray-800">
          Faça seu Pedido
        </h2>
        <p className="text-center text-gray-600 mb-8">
          Preencha o formulário e entraremos em contato via WhatsApp!
        </p>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Nome Completo
            </label>
            <input
              type="text"
              name="name"
              id="name"
              required
              value={formData.name}
              onChange={handleInputChange}
              className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-pink-500 focus:border-pink-500"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              required
              value={formData.email}
              onChange={handleInputChange}
              className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-pink-500 focus:border-pink-500"
            />
          </div>
          <div>
            <label htmlFor="service" className="block text-sm font-medium text-gray-700">
              Tipo de Peça
            </label>
            <select
              name="service"
              id="service"
              required
              value={formData.service}
              onChange={handleInputChange}
              className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-pink-500 focus:border-pink-500"
            >
              <option value="" disabled>Selecione um tipo de peça</option>
              {serviceList.map((title) => (
                <option key={title} value={title}>{title}</option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">
              Mensagem
            </label>
            <textarea
              name="message"
              id="message"
              rows={4}
              required
              value={formData.message}
              onChange={handleInputChange}
              className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-pink-500 focus:border-pink-500"
              placeholder="Descreva o que você precisa, cores, tamanhos, etc."
            ></textarea>
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="w-full py-3 px-6 bg-pink-500 hover:bg-pink-600 text-white font-bold rounded-md text-lg transition-colors"
            >
              Enviar Pedido via WhatsApp
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};