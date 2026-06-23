import React from 'react';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Testimonials from '../components/Testimonials';
import { useSEO } from '../hooks/useSEO';

export default function Home() {
  useSEO('RVR LLC | Automation Consulting, Digital Launch Pad & Private AI', 'RVR LLC builds operational automation systems, high-converting contractor websites, decentralized Chainlink CRE backend infrastructure, and private on-site AI appliances for local businesses in Metro Detroit.');

  return (
    <>
      <Hero />
      <Services />
      <Testimonials />
    </>
  );
}
