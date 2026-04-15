import React from 'react';
import HeroSection from '../components/sections/HeroSection';
import AboutSection from '../components/sections/AboutSection';
import ServicesSection from '../components/sections/ServicesSection';
import FeaturedProjects from '../components/sections/FeaturedProjects';
import PotentialClientsSection from '../components/sections/PotentialClientsSection';
import GallerySection from '../components/sections/GallerySection';
import ContactSection from '../components/sections/ContactSection';
import PhoneFAB from '../components/PhoneFAB';

const Home = () => {
  return (
    <div>
      <HeroSection />
      <AboutSection />
      <ServicesSection showcase={true} />
      <FeaturedProjects />
      <PotentialClientsSection />
      <GallerySection />
      <ContactSection />
      <PhoneFAB />
    </div>
  );
};

export default Home;
