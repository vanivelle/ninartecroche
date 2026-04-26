'use client';

import React from 'react';
import Hero from '@/components/Hero/Hero';
import { About } from '@/components/About/About';
import { ServicesGrid } from '@/components/Services/ServicesGrid';
import { ImageGallery } from '@/components/Gallery/ImageGallery';
import { Testimonials } from '@/components/Services/Testimonials';
import { ContactForm } from '@/components/ContactForm/BookingForm';
import { WhatsAppButton } from '@/components/WhatsAppButton/FloatingButton';

export default function Home() {
  const handleCTAClick = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <main className="w-full overflow-hidden">
      {/* Hero Section */}
      <Hero onCTAClick={handleCTAClick} />

      {/* About Section */}
      <About />

      {/* Services Section */}
      <ServicesGrid />

      {/* Gallery Section */}
      <ImageGallery />

      {/* Testimonials Section */}
      <Testimonials />

      {/* Contact Form Section */}
      <ContactForm />

      {/* WhatsApp Floating Button */}
      <WhatsAppButton />
    </main>
  );
}