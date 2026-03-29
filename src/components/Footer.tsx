import { Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-[#050505] pt-16 pb-8 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 mb-16">
          <div className="col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-6 w-fit">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-black" />
              </div>
              <span className="font-semibold text-xl tracking-tight">Renowed Value Restoration LLC<span className="text-orange-500">.</span></span>
            </Link>
            <p className="text-zinc-400 max-w-sm mb-4">
              Building the future of automated workflows, high-converting video marketing assets, and sovereign hardware nodes.
            </p>
            <div className="text-zinc-500 text-sm space-y-1">
              <p>2711 Williamsburg Cir</p>
              <p>Auburn Hills, Michigan 48326</p>
            </div>
          </div>
          
          <div>
            <h4 className="font-medium mb-4">Services</h4>
            <ul className="space-y-3 text-zinc-400 text-sm">
              <li><Link to="/workflows" className="hover:text-orange-500 transition-colors">Automated Workflows</Link></li>
              <li><Link to="/speed-to-lead" className="hover:text-orange-500 transition-colors">Speed-to-Lead</Link></li>
              <li><Link to="/replies" className="hover:text-orange-500 transition-colors">Respond Agent</Link></li>
              <li><Link to="/video" className="hover:text-orange-500 transition-colors">Video Marketing</Link></li>
              <li><Link to="/nodes" className="hover:text-orange-500 transition-colors">Hardware Nodes</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-medium mb-4">Company</h4>
            <ul className="space-y-3 text-zinc-400 text-sm">
              <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/blog" className="hover:text-white transition-colors">Blog & Updates</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
              <li><Link to="/connect" className="hover:text-white transition-colors">Connect</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-white/5 text-sm text-zinc-500">
          <div className="flex flex-col gap-2 text-center md:text-left">
            <p>© {new Date().getFullYear()} Renowed Value Restoration LLC. All rights reserved.</p>
            <p>Serving Oakland County Michigan, Wayne County & Metro Detroit.</p>
          </div>
          <div className="flex gap-4 sm:gap-6 mt-4 md:mt-0 flex-wrap justify-center sm:justify-end">
            <Link to="/opt-in" className="hover:text-white transition-colors">SMS Proof of Consent</Link>
            <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-white transition-colors">Terms &amp; Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
