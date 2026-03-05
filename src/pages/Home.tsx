import React from 'react';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Testimonials from '../components/Testimonials';
import { useSEO } from '../hooks/useSEO';

export default function Home() {
  useSEO('Agentic Services | AI Workflows, Video Marketing & Sovereign Nodes', 'Agentic Services provides custom AI agent workflows, high-converting video marketing assets, and sovereign Bitcoin, Lightning, and NOSTR hardware nodes.');

  return (
    <>
      <Hero />
      <Services />
      <Testimonials />
    </>
  );
}
