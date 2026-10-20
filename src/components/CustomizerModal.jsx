import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sliders, X } from 'lucide-react';

export default function CustomizerModal({ isOpen, onClose, state, onSave }) {
  const [nameInput, setNameInput] = useState(state.name);
  const [subtextInput, setSubtextInput] = useState(state.subtext);
  const [ageInput, setAgeInput] = useState(state.age);
  const [dateInput, setDateInput] = useState(state.date);
  const [letterInput, setLetterInput] = useState(state.letterText);
  const [signatureInput, setSignatureInput] = useState(state.signature);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave({
      name: nameInput,
      subtext: subtextInput,
      age: ageInput,
      date: dateInput,
      letterText: letterInput,
      signature: signatureInput
    });
    onClose();
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          className="relative w-full max-w-2xl glass-panel-dark rounded-3xl p-6 sm:p-8 border border-amber-400/40 shadow-2xl space-y-6 max-h-[90vh] overflow-y-auto"
        >
          <div className="flex justify-between items-center pb-4 border-b border-amber-400/20">
            <div className="flex items-center gap-2 text-amber-300">
              <Sliders className="w-5 h-5" />
              <h3 className="text-xl font-serif font-bold">Personalize Celebration Website</h3>
            </div>
            <button onClick={onClose} className="text-slate-400 hover:text-white p-1 rounded-full hover:bg-white/10 cursor-pointer">
              <X className="w-5 h-5" />
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4 text-xs sm:text-sm">
            <div>
              <label className="block text-slate-300 font-semibold mb-1">Birthday Name / Nickname</label>
              <input
                type="text"
                value={nameInput}
                onChange={(e) => setNameInput(e.target.value)}
                className="w-full px-3 py-2 rounded-xl bg-[#0b0c16] border border-amber-400/30 text-white focus:outline-none focus:border-amber-400"
              />
            </div>

            <div>
              <label className="block text-slate-300 font-semibold mb-1">Hero Subtitle Wish</label>
              <textarea
                rows={2}
                value={subtextInput}
                onChange={(e) => setSubtextInput(e.target.value)}
                className="w-full px-3 py-2 rounded-xl bg-[#0b0c16] border border-amber-400/30 text-white focus:outline-none focus:border-amber-400"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-slate-300 font-semibold mb-1">Years / Age</label>
                <input
                  type="text"
                  value={ageInput}
                  onChange={(e) => setAgeInput(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl bg-[#0b0c16] border border-amber-400/30 text-white focus:outline-none focus:border-amber-400"
                />
              </div>
              <div>
                <label className="block text-slate-300 font-semibold mb-1">Date Badge</label>
                <input
                  type="text"
                  value={dateInput}
                  onChange={(e) => setDateInput(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl bg-[#0b0c16] border border-amber-400/30 text-white focus:outline-none focus:border-amber-400"
                />
              </div>
            </div>

            <div>
              <label className="block text-slate-300 font-semibold mb-1">Secret Letter Content</label>
              <textarea
                rows={4}
                value={letterInput}
                onChange={(e) => setLetterInput(e.target.value)}
                className="w-full px-3 py-2 rounded-xl bg-[#0b0c16] border border-amber-400/30 text-white focus:outline-none focus:border-amber-400"
              />
            </div>

            <div>
              <label className="block text-slate-300 font-semibold mb-1">Letter Signature</label>
              <input
                type="text"
                value={signatureInput}
                onChange={(e) => setSignatureInput(e.target.value)}
                className="w-full px-3 py-2 rounded-xl bg-[#0b0c16] border border-amber-400/30 text-white focus:outline-none focus:border-amber-400"
              />
            </div>

            <div className="flex justify-end gap-3 pt-4 border-t border-amber-400/20">
              <button
                type="button"
                onClick={onClose}
                className="px-5 py-2.5 rounded-xl border border-white/20 text-slate-300 hover:bg-white/10 text-xs cursor-pointer"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-amber-400 to-rose-400 text-slate-950 font-bold text-xs hover:scale-105 transition-transform cursor-pointer"
              >
                Apply Live Changes ✨
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
