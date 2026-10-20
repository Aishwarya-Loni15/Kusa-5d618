import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { Cake as CakeIcon, Wind, Flame } from 'lucide-react';

export default function BirthdayCake() {
  const [candles, setCandles] = useState([true, true, true]); // 3 candles active
  const [wishBannerVisible, setWishBannerVisible] = useState(false);

  const playBlowSound = () => {
    try {
      const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(400, audioCtx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(100, audioCtx.currentTime + 0.3);
      gain.gain.setValueAtTime(0.3, audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.3);
      osc.connect(gain);
      gain.connect(audioCtx.destination);
      osc.start();
      osc.stop(audioCtx.currentTime + 0.3);
    } catch (err) {
      console.log('Audio Context error', err);
    }
  };

  const triggerConfetti = () => {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#f59e0b', '#ec4899', '#a855f7', '#3b82f6', '#10b981']
    });

    setTimeout(() => {
      confetti({
        particleCount: 50,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: ['#ffd700', '#ff69b4', '#ffffff']
      });
    }, 250);

    setTimeout(() => {
      confetti({
        particleCount: 50,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: ['#ffd700', '#ff69b4', '#ffffff']
      });
    }, 400);
  };

  const extinguishCandle = (index) => {
    if (!candles[index]) return;
    const nextCandles = [...candles];
    nextCandles[index] = false;
    setCandles(nextCandles);
    playBlowSound();

    if (nextCandles.every((c) => !c)) {
      setWishBannerVisible(true);
      triggerConfetti();
    }
  };

  const blowOutAll = () => {
    setCandles([false, false, false]);
    playBlowSound();
    setWishBannerVisible(true);
    triggerConfetti();
  };

  const relight = () => {
    setCandles([true, true, true]);
    setWishBannerVisible(false);
  };

  return (
    <section id="cake" className="scroll-mt-24 space-y-10 text-center">
      {/* Section Header */}
      <div className="space-y-3">
        <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-amber-400 glass-panel px-3 py-1 rounded-full border border-amber-400/30">
          <CakeIcon className="w-3.5 h-3.5" />
          <span>The Birthday Ritual</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-serif font-bold text-slate-100">
          Make a Wish & Blow Out The Candles!
        </h2>
        <p className="text-slate-300 font-light max-w-xl mx-auto text-sm sm:text-base">
          Click the flames or tap the "Blow Out Candles" button below to make your wish and unleash the celebration confetti!
        </p>
      </div>

      {/* Cake Container */}
      <div className="relative max-w-md mx-auto py-8">
        {/* Glow Backlight */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-gradient-to-tr from-amber-500/20 via-rose-500/20 to-purple-500/20 rounded-full blur-3xl pointer-events-none"></div>

        {/* Cake Illustration */}
        <div className="relative z-10 flex flex-col items-center justify-center">
          {/* Candles Layer */}
          <div className="flex justify-center items-end space-x-8 mb-[-4px] relative z-20">
            {/* Candle 1 */}
            <div className="flex flex-col items-center cursor-pointer group" onClick={() => extinguishCandle(0)} title="Click flame to blow out">
              {candles[0] ? (
                <div className="relative w-4 h-6 mb-1 transition-all duration-300">
                  <div className="absolute inset-0 bg-gradient-to-t from-amber-500 via-yellow-300 to-white rounded-full blur-[1px] animate-flicker shadow-[0_0_15px_rgba(245,158,11,0.9)]"></div>
                  <div className="absolute top-1 left-1/2 -translate-x-1/2 w-1.5 h-2.5 bg-white rounded-full"></div>
                </div>
              ) : (
                <div className="relative h-6 mb-1 flex items-center justify-center">
                  <div className="smoke"></div>
                </div>
              )}
              <div className="w-1 h-2 bg-slate-800"></div>
              <div className="w-3.5 h-14 bg-gradient-to-b from-rose-300 via-rose-400 to-rose-500 rounded-t-sm shadow-md border-x border-white/20 relative">
                <div className="absolute inset-0 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:4px_4px] opacity-30"></div>
              </div>
            </div>

            {/* Candle 2 (Center Big) */}
            <div className="flex flex-col items-center cursor-pointer group" onClick={() => extinguishCandle(1)} title="Click flame to blow out">
              {candles[1] ? (
                <div className="relative w-5 h-8 mb-1 transition-all duration-300">
                  <div className="absolute inset-0 bg-gradient-to-t from-amber-500 via-yellow-200 to-white rounded-full blur-[1px] animate-flicker shadow-[0_0_20px_rgba(245,158,11,1)]"></div>
                  <div className="absolute top-1.5 left-1/2 -translate-x-1/2 w-2 h-3.5 bg-white rounded-full"></div>
                </div>
              ) : (
                <div className="relative h-8 mb-1 flex items-center justify-center">
                  <div className="smoke"></div>
                </div>
              )}
              <div className="w-1 h-2.5 bg-slate-800"></div>
              <div className="w-4 h-18 bg-gradient-to-b from-amber-200 via-amber-300 to-amber-500 rounded-t-sm shadow-md border-x border-white/30 relative">
                <div className="absolute inset-0 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:4px_4px] opacity-30"></div>
              </div>
            </div>

            {/* Candle 3 */}
            <div className="flex flex-col items-center cursor-pointer group" onClick={() => extinguishCandle(2)} title="Click flame to blow out">
              {candles[2] ? (
                <div className="relative w-4 h-6 mb-1 transition-all duration-300">
                  <div className="absolute inset-0 bg-gradient-to-t from-amber-500 via-yellow-300 to-white rounded-full blur-[1px] animate-flicker shadow-[0_0_15px_rgba(245,158,11,0.9)]"></div>
                  <div className="absolute top-1 left-1/2 -translate-x-1/2 w-1.5 h-2.5 bg-white rounded-full"></div>
                </div>
              ) : (
                <div className="relative h-6 mb-1 flex items-center justify-center">
                  <div className="smoke"></div>
                </div>
              )}
              <div className="w-1 h-2 bg-slate-800"></div>
              <div className="w-3.5 h-14 bg-gradient-to-b from-purple-300 via-purple-400 to-purple-500 rounded-t-sm shadow-md border-x border-white/20 relative">
                <div className="absolute inset-0 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:4px_4px] opacity-30"></div>
              </div>
            </div>
          </div>

          {/* Top Tier */}
          <div className="w-48 h-16 bg-gradient-to-r from-pink-100 via-amber-100 to-pink-100 rounded-t-2xl shadow-xl relative border-b-4 border-amber-300/40 flex items-center justify-center">
            <div className="absolute top-0 left-0 right-0 h-4 bg-white/90 rounded-t-2xl flex justify-around items-end">
              <div className="w-4 h-5 bg-white/90 rounded-b-full shadow-sm"></div>
              <div class="w-5 h-7 bg-white/90 rounded-b-full shadow-sm"></div>
              <div className="w-4 h-4 bg-white/90 rounded-b-full shadow-sm"></div>
              <div className="w-6 h-8 bg-white/90 rounded-b-full shadow-sm"></div>
              <div className="w-4 h-5 bg-white/90 rounded-b-full shadow-sm"></div>
            </div>
            <div className="flex space-x-6 z-10 pt-2">
              <span className="text-sm">🍓</span>
              <span className="text-sm">✨</span>
              <span className="text-sm">🍓</span>
            </div>
          </div>

          {/* Bottom Tier */}
          <div className="w-64 h-24 bg-gradient-to-r from-purple-900 via-rose-900 to-purple-900 rounded-t-2xl shadow-2xl relative border-t-2 border-amber-400/30 flex flex-col items-center justify-center">
            <div className="absolute top-0 left-0 right-0 h-5 bg-amber-100/90 flex justify-around items-end">
              <div className="w-6 h-6 bg-amber-100/90 rounded-b-full"></div>
              <div className="w-7 h-9 bg-amber-100/90 rounded-b-full"></div>
              <div className="w-5 h-5 bg-amber-100/90 rounded-b-full"></div>
              <div className="w-8 h-10 bg-amber-100/90 rounded-b-full"></div>
              <div className="w-6 h-7 bg-amber-100/90 rounded-b-full"></div>
            </div>
            <div className="text-amber-200/90 font-serif font-bold text-base sm:text-lg tracking-widest uppercase z-10 pt-2 text-center">
              Happy Birthday Kusa! ✨
            </div>
            <div className="text-[10px] sm:text-xs font-mono text-rose-300/90 font-semibold tracking-wider z-10 pb-1">
              With Love, Aishi & Chinna ❤️
            </div>
          </div>

          {/* Plate */}
          <div className="w-80 h-4 bg-gradient-to-r from-amber-400 via-amber-200 to-amber-400 rounded-full shadow-2xl border-t border-white/60"></div>
          <div className="w-44 h-5 bg-gradient-to-r from-slate-700 via-slate-800 to-slate-700 rounded-b-xl shadow-2xl border-t border-slate-600"></div>
        </div>
      </div>

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
        <button
          onClick={blowOutAll}
          className="px-8 py-4 rounded-full bg-gradient-to-r from-amber-400 via-amber-300 to-rose-400 text-slate-950 font-bold shadow-xl shadow-amber-500/25 hover:shadow-amber-500/40 hover:scale-105 active:scale-95 transition-all flex items-center gap-2 cursor-pointer"
        >
          <Wind className="w-5 h-5" />
          <span>Blow Out All Candles 💨</span>
        </button>

        <button
          onClick={relight}
          className="px-6 py-3.5 rounded-full glass-panel border border-amber-400/30 text-amber-300 hover:bg-amber-400/10 hover:scale-105 transition-all flex items-center gap-2 text-sm cursor-pointer"
        >
          <Flame className="w-4 h-4" />
          <span>Relight Candles 🕯️</span>
        </button>
      </div>

      {/* Wish Banner */}
      {wishBannerVisible && (
        <div className="max-w-md mx-auto p-4 glass-panel-dark rounded-2xl border border-amber-400/50 shadow-2xl space-y-3">
          <p className="text-amber-200 font-serif text-lg">🌟 Candles Blown! Your Birthday Wish Has Been Sent To The Stars!</p>
          <button
            onClick={triggerConfetti}
            className="px-5 py-2 rounded-full bg-rose-500 text-white font-semibold text-xs hover:bg-rose-600 transition-colors cursor-pointer"
          >
            🎉 Trigger Extra Celebration Confetti!
          </button>
        </div>
      )}
    </section>
  );
}
