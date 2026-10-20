import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Heart, ArrowDown, X } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function SecretLetter({ name, date, letterText, signature }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    if (!isOpen) {
      setIsOpen(true);
      confetti({
        particleCount: 80,
        spread: 60,
        origin: { y: 0.7 }
      });
    }
  };

  return (
    <section id="letter" className="scroll-mt-24 space-y-12">
      <div className="text-center space-y-3">
        <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-amber-400 glass-panel px-3 py-1 rounded-full border border-amber-400/30">
          <Mail className="w-3.5 h-3.5" />
          <span>Private Vault</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-serif font-bold text-slate-100">
          A Secret Birthday Letter For You
        </h2>
        <p className="text-slate-400 font-light max-w-xl mx-auto text-sm sm:text-base">
          Tap the wax seal to break the envelope and open your personal message.
        </p>
      </div>

      <div className="max-w-2xl mx-auto perspective-1000">
        {/* Envelope */}
        <div
          onClick={handleOpen}
          className="relative bg-gradient-to-b from-[#f7f2e7] to-[#eddcb9] text-slate-800 rounded-2xl shadow-2xl p-8 cursor-pointer border-2 border-amber-400/40 hover:border-amber-400 group transition-all duration-500 transform hover:-translate-y-1"
        >
          {/* Wax Seal */}
          <div className="absolute -top-6 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center">
            <div className="w-14 h-14 rounded-full bg-gradient-to-tr from-rose-800 via-rose-700 to-[#581825] flex items-center justify-center text-amber-200 shadow-xl border-2 border-amber-400/50 group-hover:scale-110 transition-transform">
              <Heart className="w-6 h-6 fill-amber-300 text-amber-300" />
            </div>
            <span className="text-[10px] uppercase font-mono tracking-widest text-slate-600 font-bold mt-1 bg-[#f7f2e7] px-2 py-0.5 rounded-full border border-amber-400/30">
              Break Seal
            </span>
          </div>

          {/* Envelope Front */}
          <div className="pt-8 pb-4 text-center space-y-4">
            <div className="text-xs uppercase font-mono tracking-widest text-amber-800/70 font-semibold">
              Strictly Confidential • For Your Eyes Only
            </div>
            <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#581825]">
              Dearest {name},
            </h3>
            <p className="text-sm font-editorial italic text-slate-600">
              "Words wrapped in gold and memories crafted with love..."
            </p>
            <div className="pt-4 inline-flex items-center gap-2 text-xs font-semibold text-rose-800 group-hover:text-rose-900">
              <span>Click anywhere to open message</span>
              <ArrowDown className="w-4 h-4 animate-bounce" />
            </div>
          </div>
        </div>

        {/* Expanded Letter Body */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0, y: -20 }}
              animate={{ opacity: 1, height: 'auto', y: 0 }}
              exit={{ opacity: 0, height: 0, y: -20 }}
              transition={{ duration: 0.6 }}
              className="mt-8 glass-panel-dark rounded-3xl p-6 sm:p-10 border border-amber-400/40 shadow-2xl space-y-6 text-slate-200 font-editorial text-lg leading-relaxed relative overflow-hidden"
            >
              <div className="flex justify-between items-center pb-4 border-b border-amber-400/20">
                <span className="text-xs font-mono text-amber-400 uppercase tracking-widest">
                  PERSONAL LETTER • CELEBRATION EDITION
                </span>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setIsOpen(false);
                  }}
                  className="text-slate-400 hover:text-white p-1 rounded-full hover:bg-white/10 cursor-pointer"
                  title="Close Letter"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="space-y-4 text-slate-200 text-base sm:text-lg font-light leading-relaxed">
                <p>
                  Dearest <span className="font-semibold text-amber-300">{name}</span>,
                </p>
                {letterText.split('\n\n').map((paragraph, idx) => {
                  const parts = paragraph.split(/(\*\*.*?\*\*)/g);
                  return (
                    <p key={idx}>
                      {parts.map((part, i) => {
                        if (part.startsWith('**') && part.endsWith('**')) {
                          return (
                            <strong key={i} className="font-semibold text-amber-300">
                              {part.slice(2, -2)}
                            </strong>
                          );
                        }
                        return part;
                      })}
                    </p>
                  );
                })}
              </div>

              <div className="pt-6 border-t border-amber-400/20 flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4">
                <div>
                  <div className="text-xs text-amber-400/70 uppercase tracking-wider font-mono">
                    With all my love & warmest wishes,
                  </div>
                  <div className="font-handwriting text-3xl sm:text-4xl text-amber-300 font-bold mt-1">
                    {signature}
                  </div>
                </div>
                <div className="text-xs text-slate-400 font-mono">Written on {date}</div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
