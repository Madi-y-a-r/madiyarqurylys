
'use client';

import HeroSection from '@/components/HeroSection';
import ServiceSection from '@/components/ServiceSection';
import PortfolioSection from '@/components/PortfolioSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import ContactSection from '@/components/ContactSection';

export default function Home() {
  return (
    <>
      <HeroSection />
      <ServiceSection />
      <PortfolioSection />
      <TestimonialsSection />
      <ContactSection /> 
    </>
  );
}