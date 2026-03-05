import React from 'react';
import { motion } from 'motion/react';
import { useSEO } from '../hooks/useSEO';

export default function PrivacyPolicy() {
  useSEO('Privacy Policy', 'Privacy Policy for Agentic Services.');

  return (
    <div className="pt-32 pb-24 px-6 min-h-screen">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-8"
        >
          <h1 className="text-4xl md:text-5xl font-medium tracking-tight mb-8">Privacy Policy</h1>
          
          <div className="prose prose-invert max-w-none text-zinc-400 space-y-6">
            <p>Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>
            
            <p>
              At Agentic Services, accessible from our website, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by Agentic Services and how we use it.
            </p>

            <h2 className="text-2xl font-medium text-white mt-12 mb-4">Information We Collect</h2>
            <p>
              The personal information that you are asked to provide, and the reasons why you are asked to provide it, will be made clear to you at the point we ask you to provide your personal information.
            </p>
            <p>
              If you contact us directly, we may receive additional information about you such as your name, email address, phone number, the contents of the message and/or attachments you may send us, and any other information you may choose to provide.
            </p>

            <h2 className="text-2xl font-medium text-white mt-12 mb-4">How We Use Your Information</h2>
            <p>We use the information we collect in various ways, including to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Provide, operate, and maintain our website</li>
              <li>Improve, personalize, and expand our website</li>
              <li>Understand and analyze how you use our website</li>
              <li>Develop new products, services, features, and functionality</li>
              <li>Communicate with you, either directly or through one of our partners, including for customer service, to provide you with updates and other information relating to the website, and for marketing and promotional purposes</li>
              <li>Send you emails</li>
              <li>Find and prevent fraud</li>
            </ul>

            <h2 className="text-2xl font-medium text-white mt-12 mb-4">Log Files</h2>
            <p>
              Agentic Services follows a standard procedure of using log files. These files log visitors when they visit websites. All hosting companies do this and a part of hosting services' analytics. The information collected by log files include internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date and time stamp, referring/exit pages, and possibly the number of clicks. These are not linked to any information that is personally identifiable.
            </p>

            <h2 className="text-2xl font-medium text-white mt-12 mb-4">Cookies and Web Beacons</h2>
            <p>
              Like any other website, Agentic Services uses 'cookies'. These cookies are used to store information including visitors' preferences, and the pages on the website that the visitor accessed or visited. The information is used to optimize the users' experience by customizing our web page content based on visitors' browser type and/or other information.
            </p>

            <h2 className="text-2xl font-medium text-white mt-12 mb-4">CCPA Privacy Rights (Do Not Sell My Personal Information)</h2>
            <p>Under the CCPA, among other rights, California consumers have the right to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Request that a business that collects a consumer's personal data disclose the categories and specific pieces of personal data that a business has collected about consumers.</li>
              <li>Request that a business delete any personal data about the consumer that a business has collected.</li>
              <li>Request that a business that sells a consumer's personal data, not sell the consumer's personal data.</li>
            </ul>

            <h2 className="text-2xl font-medium text-white mt-12 mb-4">GDPR Data Protection Rights</h2>
            <p>We would like to make sure you are fully aware of all of your data protection rights. Every user is entitled to the following:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>The right to access – You have the right to request copies of your personal data.</li>
              <li>The right to rectification – You have the right to request that we correct any information you believe is inaccurate.</li>
              <li>The right to erasure – You have the right to request that we erase your personal data, under certain conditions.</li>
              <li>The right to restrict processing – You have the right to request that we restrict the processing of your personal data, under certain conditions.</li>
              <li>The right to object to processing – You have the right to object to our processing of your personal data, under certain conditions.</li>
              <li>The right to data portability – You have the right to request that we transfer the data that we have collected to another organization, or directly to you, under certain conditions.</li>
            </ul>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
