import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { PenTool, Send } from 'lucide-react';
import confetti from 'canvas-confetti';

const initialWishes = [
  {
    author: "Aishi ❤️",
    time: "Today",
    text: "Happiest Birthday Kusa (Chinna)! 🎂 You are truly one of a kind, my biggest comfort, and someone I cherish with all my heart. May this year bring you endless happiness, peace, and beautiful memories! ✨💖",
    color: "amber"
  },
  {
    author: "Chinna 🌟",
    time: "Today",
    text: "To the most extraordinary person, happiest birthday Kusa! May our bond, laughter, and crazy memories stay forever young. Always here for you through every single step of life! 🫂🥂",
    color: "rose"
  },
  {
    author: "Kusa 💫",
    time: "Today",
    text: "So grateful and blessed to have Chinna by my side! Thank you for making this birthday and every single day so magical and unforgettable. Love you always! 🧿❤️",
    color: "purple"
  }
];

export default function Guestbook() {
  const [wishes, setWishes] = useState(initialWishes);
  const [authorInput, setAuthorInput] = useState('');
  const [textInput, setTextInput] = useState('');

  const handlePost = (e) => {
    e.preventDefault();
    if (!textInput.trim()) return;

    const newWish = {
      author: authorInput.trim() || "Anonymous Friend",
      time: "Just Now",
      text: textInput.trim(),
      color: "amber"
    };

    setWishes([newWish, ...wishes]);
    setAuthorInput('');
    setTextInput('');

    confetti({
      particleCount: 50,
      spread: 50,
      origin: { y: 0.8 }
    });
  };

  return (
    <section id="guestbook" className="scroll-mt-24 space-y-8">
      <div className="text-center space-y-3">
        <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-purple-400 glass-panel px-3 py-1 rounded-full border border-purple-400/30">
          <PenTool className="w-3.5 h-3.5" />
          <span>Interactive Wish Wall</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-serif font-bold text-slate-100">
          Leave a Birthday Wish
        </h2>
        <p className="text-slate-400 font-light max-w-xl mx-auto text-sm sm:text-base">
          Type a warm note or wish below to stick it onto the live digital wish wall!
        </p>
      </div>

      <form onSubmit={handlePost} className="max-w-xl mx-auto glass-panel-dark p-4 sm:p-6 rounded-2xl border border-purple-400/30 shadow-xl space-y-4">
        <div className="flex flex-col sm:flex-row gap-3">
          <input
            type="text"
            placeholder="Your Name (e.g. Aishi, Chinna, Kusa)"
            value={authorInput}
            onChange={(e) => setAuthorInput(e.target.value)}
            className="w-full sm:w-1/3 px-4 py-2.5 rounded-xl bg-[#0b0c16]/80 border border-purple-400/30 text-slate-100 text-sm focus:outline-none focus:border-purple-400"
          />
          <input
            type="text"
            placeholder="Write a sweet birthday wish..."
            value={textInput}
            onChange={(e) => setTextInput(e.target.value)}
            className="w-full sm:w-2/3 px-4 py-2.5 rounded-xl bg-[#0b0c16]/80 border border-purple-400/30 text-slate-100 text-sm focus:outline-none focus:border-purple-400"
          />
        </div>
        <button
          type="submit"
          className="w-full py-3 rounded-xl bg-gradient-to-r from-purple-500 to-rose-500 text-white font-semibold text-sm hover:brightness-110 active:scale-[0.99] transition-all flex items-center justify-center gap-2 cursor-pointer"
        >
          <Send className="w-4 h-4" />
          <span>Pin Wish to Wall</span>
        </button>
      </form>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
        {wishes.map((w, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
            className={`p-5 rounded-2xl border space-y-2 transform hover:scale-105 transition-transform ${
              idx % 3 === 0
                ? 'bg-amber-400/10 border-amber-400/30'
                : idx % 3 === 1
                ? 'bg-rose-400/10 border-rose-400/30'
                : 'bg-purple-400/10 border-purple-400/30'
            }`}
          >
            <div className="flex justify-between items-center">
              <span className="font-semibold text-amber-300 text-sm">{w.author}</span>
              <span className="text-[10px] text-amber-400/60 font-mono">{w.time}</span>
            </div>
            <p className="text-slate-100 text-xs leading-relaxed font-light">"{w.text}"</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
