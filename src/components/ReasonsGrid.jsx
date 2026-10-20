import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { HeartHandshake, RotateCw, ShieldCheck, Heart, Zap, Smile, Compass, Infinity, Star, Crown, Sparkles, Sun } from 'lucide-react';

const bestFriendReasons = [
  {
    num: "01",
    title: "Trust",
    body: "I can share everything with him without fear because I know he will always understand me.",
    icon: ShieldCheck,
    backIcon: HeartHandshake,
    color: "amber"
  },
  {
    num: "02",
    title: "Care",
    body: "He cares for me in little ways that make me feel special, loved, and important.",
    icon: Heart,
    backIcon: Sparkles,
    color: "rose"
  },
  {
    num: "03",
    title: "Support",
    body: "He motivates me whenever I feel low and encourages me to believe in myself.",
    icon: Zap,
    backIcon: Star,
    color: "purple"
  },
  {
    num: "04",
    title: "Happiness",
    body: "He makes me smile even on my worst days and turns simple moments into beautiful memories.",
    icon: Smile,
    backIcon: Sun,
    color: "cyan"
  },
  {
    num: "05",
    title: "Understanding",
    body: "He understands my feelings, my silence, and my mood even when I cannot explain them.",
    icon: Compass,
    backIcon: HeartHandshake,
    color: "emerald"
  },
  {
    num: "06",
    title: "Forever",
    body: "He is not just my best friend; he is someone I want beside me throughout my lifetime. ❤️🫂",
    icon: Infinity,
    backIcon: Crown,
    color: "amber"
  }
];

export default function ReasonsGrid() {
  const [flippedMap, setFlippedMap] = useState({});

  const toggleFlip = (idx) => {
    setFlippedMap((prev) => ({ ...prev, [idx]: !prev[idx] }));
  };

  const flipAll = () => {
    const allFlipped = Object.keys(flippedMap).length === bestFriendReasons.length && Object.values(flippedMap).every(Boolean);
    const nextState = {};
    bestFriendReasons.forEach((_, idx) => {
      nextState[idx] = !allFlipped;
    });
    setFlippedMap(nextState);
  };

  return (
    <section id="reasons" className="scroll-mt-24 space-y-12">
      <div className="text-center space-y-3">
        <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-rose-400 glass-panel px-3 py-1 rounded-full border border-rose-400/30">
          <HeartHandshake className="w-3.5 h-3.5" />
          <span>Interactive Cards</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-serif font-bold text-slate-100">
          Reasons Why You're The Best Friend Ever
        </h2>
        <p className="text-slate-400 font-light max-w-xl mx-auto text-sm sm:text-base">
          Tap or click each card to flip it over and uncover a special reason!
        </p>

        <div className="pt-2">
          <button
            onClick={flipAll}
            className="text-xs glass-panel px-4 py-2 rounded-full border border-rose-400/30 text-rose-300 hover:bg-rose-400/10 transition-all inline-flex items-center gap-1.5 cursor-pointer"
          >
            <RotateCw className="w-3.5 h-3.5" />
            <span>Flip All Cards</span>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {bestFriendReasons.map((item, idx) => {
          const FrontIcon = item.icon;
          const BackIcon = item.backIcon;
          const isFlipped = !!flippedMap[idx];

          return (
            <div key={idx} className="perspective-1000 h-64 cursor-pointer group" onClick={() => toggleFlip(idx)}>
              <motion.div
                animate={{ rotateY: isFlipped ? 180 : 0 }}
                transition={{ duration: 0.6 }}
                className="card-inner relative w-full h-full transform-style-3d shadow-xl rounded-2xl"
              >
                {/* Front Face */}
                <div className="absolute inset-0 backface-hidden glass-panel-dark rounded-2xl p-6 flex flex-col justify-between border border-amber-400/20 group-hover:border-amber-400/50 transition-colors">
                  <div className="flex justify-between items-center">
                    <span className="text-xs font-mono text-amber-400 tracking-wider font-semibold">
                      REASON #{item.num}
                    </span>
                    <div className="w-8 h-8 rounded-full bg-amber-400/10 flex items-center justify-center text-amber-300">
                      <FrontIcon className="w-4 h-4" />
                    </div>
                  </div>
                  <div className="text-center space-y-2">
                    <h3 className="text-xl font-serif font-bold text-slate-100">{item.title}</h3>
                    <p className="text-xs text-slate-400">Tap to reveal reason</p>
                  </div>
                  <div className="text-right text-xs text-amber-400/60 font-mono">click to flip 🔄</div>
                </div>

                {/* Back Face */}
                <div className="absolute inset-0 backface-hidden rotate-y-180 bg-gradient-to-br from-amber-500/20 via-[#14172b] to-[#0b0c16] rounded-2xl p-6 flex flex-col justify-center text-center border border-amber-400/40 shadow-inner">
                  <BackIcon className="w-6 h-6 text-amber-400 mx-auto mb-3" />
                  <p className="text-slate-200 text-sm font-light leading-relaxed">"{item.body}"</p>
                </div>
              </motion.div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
