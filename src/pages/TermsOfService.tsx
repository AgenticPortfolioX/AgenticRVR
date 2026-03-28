import React from 'react';
import { motion } from 'motion/react';
import { useSEO } from '../hooks/useSEO';

export default function TermsOfService() {
  useSEO('Terms of Service', 'Terms of Service for Renowed Value Restoration LLC.');

  return (
    <div className="pt-32 pb-24 px-6 min-h-screen">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-8"
        >
          <h1 className="text-4xl md:text-5xl font-medium tracking-tight mb-8">Terms & Conditions</h1>
          
          <div className="prose prose-invert max-w-none text-zinc-400 space-y-6">
            <p>Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>
            
            <h2 className="text-2xl font-medium text-white mt-12 mb-4">1. Agreement to Terms</h2>
            <p>
              By accessing or using our services, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing our services.
            </p>

            <h2 className="text-2xl font-medium text-white mt-12 mb-4">2. Use License</h2>
            <p>
              Permission is granted to temporarily download one copy of the materials (information or software) on Renowed Value Restoration LLC's website for personal, non-commercial transitory viewing only.
            </p>
            <p>This is the grant of a license, not a transfer of title, and under this license you may not:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>modify or copy the materials;</li>
              <li>use the materials for any commercial purpose, or for any public display (commercial or non-commercial);</li>
              <li>attempt to decompile or reverse engineer any software contained on Renowed Value Restoration LLC's website;</li>
              <li>remove any copyright or other proprietary notations from the materials; or</li>
              <li>transfer the materials to another person or "mirror" the materials on any other server.</li>
            </ul>

            <h2 className="text-2xl font-medium text-white mt-12 mb-4">3. Disclaimer</h2>
            <p>
              The materials on Renowed Value Restoration LLC's website are provided on an 'as is' basis. Renowed Value Restoration LLC makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
            </p>

            <h2 className="text-2xl font-medium text-white mt-12 mb-4">4. Limitations</h2>
            <p>
              In no event shall Renowed Value Restoration LLC or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Renowed Value Restoration LLC's website, even if Renowed Value Restoration LLC or a Renowed Value Restoration LLC authorized representative has been notified orally or in writing of the possibility of such damage.
            </p>

            <h2 className="text-2xl font-medium text-white mt-12 mb-4">5. Revisions and Errata</h2>
            <p>
              The materials appearing on Renowed Value Restoration LLC's website could include technical, typographical, or photographic errors. Renowed Value Restoration LLC does not warrant that any of the materials on its website are accurate, complete, or current. Renowed Value Restoration LLC may make changes to the materials contained on its website at any time without notice.
            </p>



            <h2 className="text-2xl font-medium text-white mt-12 mb-4">7. Governing Law</h2>
            <p>
              These terms and conditions are governed by and construed in accordance with the laws of Michigan, and you irrevocably submit to the exclusive jurisdiction of the courts in Oakland County, Wayne County, and Metro Detroit.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
