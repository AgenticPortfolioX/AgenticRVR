import { motion } from 'motion/react';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    quote: "The operational audit alone paid for itself in the first month. They found 3 manual processes we didn't even realize were killing us. Now those run on autopilot every morning.",
    author: "Mike Callahan",
    role: "Owner, Callahan Roofing & Exteriors",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&auto=format&fit=crop"
  },
  {
    quote: "I went from answering every lead call manually to getting a text notification when a new lead books themselves. My website actually works now. Best investment I made this year.",
    author: "Danny Ferrara",
    role: "Owner, Ferrara HVAC & Mechanical",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=150&auto=format&fit=crop"
  },
  {
    quote: "They showed up, watched how we actually work, and came back with 12 things we could automate immediately. No fluff, just real operational improvements that we implemented in two weeks.",
    author: "Linda Chen",
    role: "Operations Manager, Metro Property Services",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=150&auto=format&fit=crop"
  }
];

export default function Testimonials() {
  return (
    <section className="py-24 px-6 relative" id="testimonials">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-medium tracking-tight mb-4">Client Success</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-[#141414] p-8 rounded-[2rem] border border-white/5 relative"
            >
              <Quote className="w-10 h-10 text-orange-500/20 absolute top-8 right-8" />
              <p className="text-lg text-zinc-300 mb-8 relative z-10 leading-relaxed">
                "{t.quote}"
              </p>
              <div className="flex items-center gap-4">
                <img src={t.image} alt={t.author} className="w-12 h-12 rounded-full object-cover" />
                <div>
                  <div className="font-medium text-white">{t.author}</div>
                  <div className="text-sm text-zinc-500">{t.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
