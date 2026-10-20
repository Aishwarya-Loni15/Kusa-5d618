import React from 'react';
import { Sparkles, Settings2 } from 'lucide-react';

export default function Navbar({ theme, setTheme, onOpenCustomizer }) {
  return (
    <header class="fixed top-0 left-0 right-0 z-50 px-4 py-3 sm:px-8 flex justify-between items-center transition-all duration-300">
      {/* Brand Badge */}
      <div className="flex items-center space-x-2 glass-panel px-3 py-1.5 rounded-full border border-amber-500/20 shadow-lg">
        <Sparkles className="w-4 h-4 text-amber-400 animate-spin" style={{ animationDuration: '8s' }} />
        <span className="text-xs sm:text-sm font-editorial tracking-wider text-amber-200">
          Celebration Edition
        </span>
      </div>

      {/* Theme Switcher & Settings */}
      <div className="flex items-center space-x-3">
        <div className="glass-panel rounded-full p-1 border border-white/10 flex items-center space-x-1">
          <button
            onClick={() => setTheme('cosmic')}
            className={`px-2.5 py-1 text-xs rounded-full transition-all duration-300 ${
              theme === 'cosmic'
                ? 'bg-amber-500/20 text-amber-300 border border-amber-400/30 font-semibold'
                : 'text-slate-300 hover:text-white'
            }`}
          >
            ✨ Cosmic
          </button>
          <button
            onClick={() => setTheme('champagne')}
            className={`px-2.5 py-1 text-xs rounded-full transition-all duration-300 ${
              theme === 'champagne'
                ? 'bg-amber-500/20 text-amber-300 border border-amber-400/30 font-semibold'
                : 'text-slate-300 hover:text-white'
            }`}
          >
            🥂 Champagne
          </button>
          <button
            onClick={() => setTheme('retro')}
            className={`px-2.5 py-1 text-xs rounded-full transition-all duration-300 ${
              theme === 'retro'
                ? 'bg-amber-500/20 text-amber-300 border border-amber-400/30 font-semibold'
                : 'text-slate-300 hover:text-white'
            }`}
          >
            📜 Retro
          </button>
        </div>

        <button
          onClick={onOpenCustomizer}
          className="glass-panel p-2 rounded-full border border-amber-400/30 text-amber-300 hover:bg-amber-400/20 hover:scale-105 transition-all shadow-lg cursor-pointer"
          title="Customize Names, Dates & Content"
        >
          <Settings2 className="w-5 h-5" />
        </button>
      </div>
    </header>
  );
}
