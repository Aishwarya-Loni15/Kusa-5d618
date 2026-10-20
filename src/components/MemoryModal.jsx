import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

export default function MemoryModal({ memory, onClose }) {
  if (!memory) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          className="relative w-full max-w-xl glass-panel-dark rounded-3xl p-6 sm:p-8 border border-amber-400/40 shadow-2xl space-y-4"
        >
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-slate-400 hover:text-white p-2 rounded-full hover:bg-white/10 cursor-pointer z-10"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Image Display */}
          <div className="aspect-[4/3] sm:aspect-video w-full rounded-2xl overflow-hidden bg-slate-900 relative">
            <img
              src={memory.img}
              alt={memory.title}
              className="w-full h-full object-cover transition-all duration-500"
              onError={(e) => {
                e.target.src = 'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&w=800&q=80';
              }}
            />
          </div>

          <div className="space-y-2">
            <span className="text-xs font-mono text-amber-400 uppercase tracking-widest">{memory.date}</span>
            <h3 className="text-2xl font-serif font-bold text-slate-100">{memory.title}</h3>
            <p className="text-slate-300 text-sm leading-relaxed font-light">{memory.desc}</p>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
