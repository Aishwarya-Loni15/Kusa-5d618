import React, { useState, useEffect, useRef } from 'react';
import { Volume2, VolumeX } from 'lucide-react';

export default function AudioPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioCtxRef = useRef(null);
  const timerRef = useRef(null);

  const toggleAudio = () => {
    if (!audioCtxRef.current) {
      audioCtxRef.current = new (window.AudioContext || window.webkitAudioContext)();
    }

    if (isPlaying) {
      setIsPlaying(false);
      if (timerRef.current) clearInterval(timerRef.current);
    } else {
      setIsPlaying(true);
      startMelody();
    }
  };

  const startMelody = () => {
    const notes = [261.63, 329.63, 392.00, 523.25, 440.00, 349.23];
    let idx = 0;

    const playNote = () => {
      if (!audioCtxRef.current) return;
      const ctx = audioCtxRef.current;
      const freq = notes[idx % notes.length];
      idx++;

      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, ctx.currentTime);

      gain.gain.setValueAtTime(0, ctx.currentTime);
      gain.gain.linearRampToValueAtTime(0.08, ctx.currentTime + 0.5);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 2.5);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start();
      osc.stop(ctx.currentTime + 2.5);
    };

    playNote();
    timerRef.current = setInterval(playNote, 1800);
  };

  useEffect(() => {
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, []);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center space-x-2">
      {isPlaying && (
        <div className="flex glass-panel px-3 py-2 rounded-full border border-amber-400/30 items-center space-x-1">
          <span className="w-1 h-3 bg-amber-400 rounded-full animate-pulse"></span>
          <span className="w-1 h-4 bg-rose-400 rounded-full animate-pulse" style={{ animationDelay: '0.15s' }}></span>
          <span className="w-1 h-2 bg-purple-400 rounded-full animate-pulse" style={{ animationDelay: '0.3s' }}></span>
          <span className="w-1 h-5 bg-amber-300 rounded-full animate-pulse" style={{ animationDelay: '0.45s' }}></span>
        </div>
      )}

      <button
        onClick={toggleAudio}
        className="glass-panel p-3.5 rounded-full border border-amber-400/40 text-amber-300 hover:bg-amber-400/20 hover:scale-110 active:scale-95 transition-all shadow-2xl flex items-center justify-center cursor-pointer"
        title={isPlaying ? "Mute Ambient Soundtrack" : "Play Ambient Soundtrack"}
      >
        {isPlaying ? <Volume2 className="w-5 h-5 text-amber-400" /> : <VolumeX className="w-5 h-5" />}
      </button>
    </div>
  );
}
