import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Star, Moon } from 'lucide-react';

const constellationStars = [
  { id: 1, x: 20, y: 30, title: "The Day We Connected", note: "A single conversation that changed everything. From day one, you brought pure brightness into my life." },
  { id: 2, x: 45, y: 20, title: "Unforgettable Laughter", note: "Those inside jokes where we couldn't stop laughing until our stomachs hurt!" },
  { id: 3, x: 75, y: 35, title: "Unshakable Support", note: "You are the person I know I can always rely on, no matter what happens." },
  { id: 4, x: 35, y: 70, title: "Late Night Heart-to-Hearts", note: "Deep conversations under the night sky about life, big dreams, and everything in between." },
  { id: 5, x: 65, y: 75, title: "A Forever Friendship", note: "Thank you for being the most genuine, kind-hearted, and special human being." }
];

export default function Constellation() {
  const [activeStar, setActiveStar] = useState(constellationStars[0]);
  const [litStars, setLitStars] = useState([1]);

  const handleStarClick = (star) => {
    setActiveStar(star);
    if (!litStars.includes(star.id)) {
      setLitStars([...litStars, star.id]);
    }
  };

  return (
    <section id="constellation" className="scroll-mt-24 space-y-10 text-center">
      <div className="space-y-3">
        <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-amber-300 glass-panel px-3 py-1 rounded-full border border-amber-300/30">
          <Moon className="w-3.5 h-3.5" />
          <span>Interactive Starlight Map</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-serif font-bold text-slate-100">
          Kusa's Constellation of Memories
        </h2>
        <p className="text-slate-400 font-light max-w-xl mx-auto text-sm sm:text-base">
          Click the glowing stars to connect the constellation and unlock special thoughts written just for you!
        </p>
      </div>

      <div className="relative max-w-3xl mx-auto h-[380px] sm:h-[420px] glass-panel-dark rounded-3xl border border-amber-400/30 overflow-hidden shadow-2xl p-6 flex flex-col justify-between">
        {/* Constellation Lines connecting stars */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-40">
          <line x1="20%" y1="30%" x2="45%" y2="20%" stroke="#f59e0b" strokeWidth="2" strokeDasharray="4" />
          <line x1="45%" y1="20%" x2="75%" y2="35%" stroke="#f59e0b" strokeWidth="2" strokeDasharray="4" />
          <line x1="45%" y1="20%" x2="35%" y2="70%" stroke="#f59e0b" strokeWidth="2" strokeDasharray="4" />
          <line x1="35%" y1="70%" x2="65%" y2="75%" stroke="#f59e0b" strokeWidth="2" strokeDasharray="4" />
          <line x1="75%" y1="35%" x2="65%" y2="75%" stroke="#f59e0b" strokeWidth="2" strokeDasharray="4" />
        </svg>

        {/* Stars */}
        <div className="relative w-full h-full">
          {constellationStars.map((star) => {
            const isLit = litStars.includes(star.id);
            const isActive = activeStar?.id === star.id;

            return (
              <motion.button
                key={star.id}
                onClick={() => handleStarClick(star)}
                style={{ top: `${star.y}%`, left: `${star.x}%` }}
                whileHover={{ scale: 1.4 }}
                animate={{ scale: isActive ? [1, 1.2, 1] : 1 }}
                transition={{ duration: 1, repeat: isActive ? Infinity : 0 }}
                className="absolute -translate-x-1/2 -translate-y-1/2 cursor-pointer focus:outline-none z-20 group"
              >
                <div className="relative flex items-center justify-center">
                  <Star
                    className={`w-7 h-7 transition-colors duration-300 ${
                      isLit ? 'text-amber-300 fill-amber-300 drop-shadow-[0_0_12px_rgba(245,158,11,1)]' : 'text-slate-500 fill-slate-700'
                    }`}
                  />
                  {isActive && (
                    <div className="absolute inset-0 rounded-full bg-amber-400/30 blur-md animate-ping pointer-events-none"></div>
                  )}
                  <span className="absolute top-8 text-[10px] font-mono text-amber-200/80 whitespace-nowrap bg-slate-950/80 px-2 py-0.5 rounded-full border border-amber-400/20">
                    Star #{star.id}
                  </span>
                </div>
              </motion.button>
            );
          })}
        </div>

        {/* Active Star Note Card Drawer */}
        <AnimatePresence mode="wait">
          {activeStar && (
            <motion.div
              key={activeStar.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="relative z-30 bg-slate-950/90 backdrop-blur-md p-4 sm:p-5 rounded-2xl border border-amber-400/40 text-left flex items-start gap-3 shadow-xl"
            >
              <div className="p-2.5 rounded-xl bg-amber-400/10 text-amber-300 border border-amber-400/30">
                <Sparkles className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <h4 className="text-base sm:text-lg font-serif font-bold text-amber-200">
                  {activeStar.title}
                </h4>
                <p className="text-xs sm:text-sm text-slate-300 font-light leading-relaxed">
                  "{activeStar.note}"
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
