'use client'

import Link from 'next/link'
import { CheckCircle, Phone, Mail } from 'lucide-react'

export default function ThankYouPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-pink-50 to-white px-4">
      <div className="max-w-2xl w-full text-center py-12">
        <CheckCircle className="w-24 h-24 text-pink-500 mx-auto mb-8" />
        
        <h1 className="text-5xl font-bold text-gray-900 mb-4">
          Pedido Enviado!
        </h1>
        
        <p className="text-xl text-gray-600 mb-8">
          Recebemos sua mensagem e entraremos em contato em breve via WhatsApp!
        </p>

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            O que acontece agora?
          </h2>
          <div className="space-y-4 text-left">
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 bg-pink-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-pink-500 font-bold">1</span>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Analisamos seu pedido</h3>
                <p className="text-gray-600 text-sm">Vamos analisar com carinho todos os detalhes do seu pedido.</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-8 h-8 bg-pink-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-pink-500 font-bold">2</span>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Entraremos em contato</h3>
                <p className="text-gray-600 text-sm">Aguarde nosso contato pelo WhatsApp para combinar todos os detalhes.</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-8 h-8 bg-pink-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-pink-500 font-bold">3</span>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Peça feita com amor</h3>
                <p className="text-gray-600 text-sm">Sua peça será feita artesanalmente e enviada para todo o Brasil!</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gray-50 rounded-lg p-6 mb-8">
          <h3 className="font-semibold text-gray-900 mb-3">Precisa de atendimento imediato?</h3>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/5561991997037"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-green-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-600 transition-colors"
            >
              <Phone className="w-5 h-5" />
              WhatsApp
            </a>
            <a
              href="mailto:ninafashion2705@gmail.com"
              className="inline-flex items-center justify-center gap-2 bg-white text-gray-900 border-2 border-gray-300 px-6 py-3 rounded-lg font-semibold hover:border-pink-500 hover:text-pink-500 transition-colors"
            >
              <Mail className="w-5 h-5" />
              Enviar Email
            </a>
          </div>
        </div>

        <Link
          href="/"
          className="inline-block text-pink-500 hover:text-pink-600 font-semibold"
        >
          ← Voltar ao Início
        </Link>
      </div>
    </div>
  )
}
