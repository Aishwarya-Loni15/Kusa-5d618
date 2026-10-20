import React from 'react';
import { motion } from 'framer-motion';
import { Camera, ArrowRight } from 'lucide-react';

export default function Timeline({ memories, onSelectMemory }) {
  return (
    <section id="timeline" className="scroll-mt-24 space-y-12">
      {/* Section Header */}
      <div className="text-center space-y-3">
        <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-amber-400 glass-panel px-3 py-1 rounded-full border border-amber-400/30">
          <Camera className="w-3.5 h-3.5" />
          <span>Memory Lane</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-serif font-bold text-slate-100">
          Moments That Made Time Stand Still
        </h2>
        <p className="text-slate-400 font-light max-w-xl mx-auto text-sm sm:text-base">
          Click any polaroid to unlock the story and secret memory note hidden inside.
        </p>
      </div>

      {/* Timeline List */}
      <div className="relative max-w-5xl mx-auto">
        {/* Center Vertical Ribbon Line */}
        <div className="absolute left-1/2 top-8 bottom-8 -translate-x-1/2 w-0.5 bg-gradient-to-b from-amber-400/10 via-amber-400/40 to-amber-400/10 hidden md:block"></div>

        <div className="space-y-12 sm:space-y-16">
          {memories.map((mem, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.7, delay: idx * 0.1 }}
                className="relative flex flex-col md:flex-row items-center justify-between gap-8 group"
              >
                {/* Description Column */}
                <div
                  className={`w-full md:w-1/2 ${
                    isEven ? 'md:pr-10 text-center md:text-right order-2 md:order-1' : 'md:pl-10 text-center md:text-left order-2'
                  }`}
                >
                  <span className="text-xs font-mono tracking-widest text-amber-400 uppercase bg-amber-400/10 px-2.5 py-1 rounded-md border border-amber-400/20">
                    {mem.date}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-serif font-bold text-slate-100 mt-3">
                    {mem.title}
                  </h3>
                  <p className="text-slate-300 text-sm mt-2 leading-relaxed font-light">
                    {mem.desc}
                  </p>
                  <button
                    onClick={() => onSelectMemory(mem)}
                    className="mt-4 inline-flex items-center gap-1.5 text-xs text-amber-300 hover:text-amber-200 font-semibold group-hover:translate-x-1 transition-transform cursor-pointer"
                  >
                    <span>View Full Memory</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>

                {/* Center Pin */}
                <div className="absolute left-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-[#0b0c16] border-2 border-amber-400 shadow-lg shadow-amber-400/50 hidden md:flex items-center justify-center z-20 group-hover:scale-125 transition-transform">
                  <div className="w-2 h-2 rounded-full bg-amber-400 animate-ping"></div>
                </div>

                {/* Polaroid Box Column */}
                <div
                  className={`w-full md:w-1/2 ${
                    isEven ? 'md:pl-10 order-1 md:order-2' : 'md:pr-10 order-1'
                  } perspective-1000`}
                >
                  <div
                    onClick={() => onSelectMemory(mem)}
                    className="polaroid-card cursor-pointer bg-slate-50 p-4 pb-6 rounded-sm shadow-2xl border border-slate-200 transform hover:scale-105 transition-all duration-300 group-hover:shadow-amber-500/20"
                    style={{ transform: `rotate(${isEven ? '-2deg' : '2.5deg'})` }}
                  >
                    <div className="aspect-square w-full overflow-hidden bg-slate-900 rounded-xs relative group-hover:brightness-105 transition-all">
                      <img
                        src={mem.img}
                        alt={mem.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                        onError={(e) => {
                          e.target.src =
                            'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&w=800&q=80';
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                        <span className="text-xs text-amber-200 font-handwriting text-lg">✨ Tap to open note</span>
                      </div>
                    </div>
                    <div className="mt-4 text-center">
                      <p className="font-handwriting text-2xl text-slate-800 font-bold">"{mem.caption}"</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
