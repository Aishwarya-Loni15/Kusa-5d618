import React from 'react';
import { motion } from 'framer-motion';
import { Cake, Heart, ArrowDownRight, Flame, Sparkles, ChevronDown } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function Hero({ name, age, date, subtext }) {
  const triggerFireworks = () => {
    const count = 200;
    const defaults = { origin: { y: 0.7 } };

    function fire(particleRatio, opts) {
      confetti({
        ...defaults,
        ...opts,
        particleCount: Math.floor(count * particleRatio)
      });
    }

    fire(0.25, { spread: 26, startVelocity: 55 });
    fire(0.2, { spread: 60 });
    fire(0.35, { spread: 100, decay: 0.91, scalar: 0.8 });
    fire(0.1, { spread: 120, startVelocity: 25, decay: 0.92, scalar: 1.2 });
    fire(0.1, { spread: 120, startVelocity: 45 });
  };

  return (
    <section id="hero" className="min-h-[85vh] flex flex-col justify-center items-center text-center relative py-12">
      {/* Top Ornament Avatar */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="mb-6 inline-flex items-center justify-center p-1 rounded-full bg-gradient-to-tr from-amber-400 via-rose-400 to-purple-500 shadow-2xl relative group"
      >
        <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden border-2 border-slate-950 shadow-inner relative">
          <img
            src="/images/kusa_polaroid_1.jpg"
            alt={name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
        </div>
        <div className="absolute -bottom-1 -right-1 bg-gradient-to-tr from-amber-400 to-rose-400 text-slate-950 p-1.5 rounded-full shadow-lg border-2 border-slate-950">
          <Cake className="w-3.5 h-3.5 stroke-[2.5]" />
        </div>
      </motion.div>

      {/* Subtitle Badge */}
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-xs sm:text-sm uppercase tracking-[0.3em] text-amber-300/90 font-medium mb-3"
      >
        A Magical Celebration For
      </motion.p>

      {/* Main Dynamic Name Title */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-serif font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-amber-100 via-amber-300 to-rose-200 leading-none mb-6 drop-shadow-sm"
      >
        {name}'s Birthday
      </motion.h1>

      {/* Hero Subtitle Text */}
      <motion.p
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="max-w-2xl text-base sm:text-lg md:text-xl text-slate-300/90 font-light font-editorial italic leading-relaxed mb-8"
      >
        "{subtext}"
      </motion.p>

      {/* Milestone Pill Counter */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="glass-panel-dark px-6 py-3 rounded-2xl border border-amber-400/30 shadow-2xl flex items-center space-x-4 mb-10 transform hover:scale-105 transition-all"
      >
        <div className="text-left">
          <div className="text-xs text-amber-300/70 uppercase tracking-wider font-semibold">Celebrating</div>
          <div className="text-xl sm:text-2xl font-serif font-bold text-amber-200 flex items-center gap-1.5">
            <span>{age}</span> Magical Years <Heart className="w-4 h-4 text-rose-400 fill-rose-400 inline" />
          </div>
        </div>
        <div className="h-8 w-px bg-amber-400/20"></div>
        <div className="text-left">
          <div className="text-xs text-amber-300/70 uppercase tracking-wider font-semibold">Today's Date</div>
          <div className="text-sm sm:text-base font-sans font-medium text-slate-200">{date}</div>
        </div>
      </motion.div>

      {/* Action Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="flex flex-col sm:flex-row items-center gap-4"
      >
        <a
          href="#timeline"
          className="w-full sm:w-auto px-8 py-4 rounded-full bg-gradient-to-r from-amber-400 via-rose-400 to-purple-500 text-slate-950 font-semibold shadow-xl shadow-amber-500/20 hover:shadow-amber-500/40 hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-2 group"
        >
          <span>Enter The Experience</span>
          <ArrowDownRight className="w-5 h-5 group-hover:translate-x-0.5 group-hover:translate-y-0.5 transition-transform" />
        </a>

        <button
          onClick={triggerFireworks}
          className="w-full sm:w-auto px-7 py-4 rounded-full bg-amber-400/20 border border-amber-400/50 text-amber-300 font-semibold hover:bg-amber-400/30 hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-2 cursor-pointer shadow-lg"
        >
          <Sparkles className="w-4 h-4 text-amber-300 animate-spin" style={{ animationDuration: '6s' }} />
          <span>Launch Fireworks 🎆</span>
        </button>

        <a
          href="#cake"
          className="w-full sm:w-auto px-7 py-4 rounded-full glass-panel border border-amber-400/30 text-amber-200 font-medium hover:bg-amber-400/10 hover:border-amber-400/60 hover:scale-105 transition-all flex items-center justify-center gap-2"
        >
          <Flame className="w-4 h-4 text-amber-400" />
          <span>Blow Out Candles</span>
        </a>
      </motion.div>

      {/* Scroll Down Cue */}
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex flex-col items-center text-amber-300/40 animate-bounce">
        <span className="text-[10px] uppercase tracking-widest mb-1">Scroll to Explore</span>
        <ChevronDown className="w-4 h-4" />
      </div>
    </section>
  );
}
