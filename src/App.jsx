import React, { useState, useEffect, useRef } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Constellation from './components/Constellation';
import Timeline from './components/Timeline';
import ReasonsGrid from './components/ReasonsGrid';
import BirthdayCake from './components/BirthdayCake';
import SecretLetter from './components/SecretLetter';
import Guestbook from './components/Guestbook';
import AudioPlayer from './components/AudioPlayer';
import MemoryModal from './components/MemoryModal';
import CustomizerModal from './components/CustomizerModal';
import SparklerTrail from './components/SparklerTrail';

const initialMemories = [
  {
    title: "The Smile That Lights Up Every Room",
    date: "CHAPTER 01 • RADIANT ENERGY",
    desc: "No matter how chaotic or gloomy the day is, your bright smile and contagious warmth have the magic to instantly brighten everything. You carry a golden energy that makes everyone feel cherished.",
    caption: "Golden Aura & Pure Joy",
    img: "/images/kusa_polaroid_1.jpg"
  },
  {
    title: "Always Just One Call Away",
    date: "CHAPTER 02 • THE 24/7 ANCHOR",
    desc: "From random late-night talks and laughing over silly jokes to deep life advice whenever things get tough — thank you for being the person who always answers, understands without words, and never lets me feel alone.",
    caption: "Late Night Talks & Safe Harbor",
    img: "/images/kusa_polaroid_2.jpg"
  },
  {
    title: "The Passionate Dreamer & Achiever",
    date: "CHAPTER 03 • PURPOSE & DEDICATION",
    desc: "The quiet dedication and grace you carry while chasing your goals is truly inspiring. You are destined to achieve extraordinary heights, Chinna, and I will forever be right beside you celebrating every milestone.",
    caption: "Poised, Brilliant & Unstoppable",
    img: "/images/kusa_polaroid_3.jpg"
  }
];

export default function App() {
  const [theme, setTheme] = useState('cosmic');
  const [isCustomizerOpen, setIsCustomizerOpen] = useState(false);
  const [selectedMemory, setSelectedMemory] = useState(null);

  const [siteState, setSiteState] = useState({
    name: "Kusa",
    age: "24",
    date: "October 21",
    subtext: "A magical space crafted with love by your best friend to celebrate the most extraordinary person on his special day — thank you for all the late night talks, motivating me every time, and love you forever! ✨",
    letterText: `You are the best person who has ever come into my life, and I never want to lose you. ❤️🥹 You are not just my best friend; you are my happiness, my peace, and my lucky charm. 🧿💗 I don't want you to go anywhere because my life feels so much more beautiful with you in it. No matter how many people come into my life, nobody can ever take your place. 🫶\n\nYou are the person I want beside me, not just today but for my entire lifetime. ♾️❤️ You have a special place in my heart that nobody else can ever replace. I don't know what the future holds, but one thing I know for sure is that I want you to be a part of mine forever. 🥹💖 You are my favorite person, my biggest comfort, and the charm that makes my life brighter. ✨ Even if life changes and everything around us becomes different, I hope our bond will always remain the same.\n\nOn your birthday, my only wish is to keep you in my life forever, see you happy always, and make countless beautiful memories with you. **Happy Birthday, Nandu Kusa Chinni!** 🎂❤️🫂\n\nYou are my favorite person, my lucky charm, and the one I never want to lose. You are precious to me in ways that words can never fully explain, and I hope I get to keep you in my life for a lifetime. ♾️💗 Thank you for all the late night talks and motivating me every time. No matter where life takes us, you will always be someone incredibly special and extraordinary to me. Love you forever, my Nandu Kusa Chinni! 🥹❤️🧿`,
    signature: "Forever Your Best Friend ✨"
  });

  const canvasRef = useRef(null);

  // Background particle animation
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', resize);
    resize();

    class Particle {
      constructor() {
        this.reset();
      }
      reset() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 2 + 0.5;
        this.speedX = (Math.random() - 0.5) * 0.4;
        this.speedY = (Math.random() - 0.5) * 0.4;
        this.opacity = Math.random() * 0.7 + 0.2;
        this.pulse = Math.random() * 0.02 + 0.005;
      }
      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        this.opacity += Math.sin(Date.now() * this.pulse) * 0.01;
        if (this.x < 0 || this.x > canvas.width || this.y < 0 || this.y > canvas.height) {
          this.reset();
        }
      }
      draw() {
        ctx.fillStyle = `rgba(245, 222, 179, ${Math.max(0.1, Math.min(1, this.opacity))})`;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    const particles = Array.from({ length: 65 }, () => new Particle());

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        p.update();
        p.draw();
      });
      animationFrameId = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  const getThemeClass = () => {
    if (theme === 'champagne') {
      return 'bg-gradient-to-b from-slate-900 via-[#581825]/40 to-slate-950 text-slate-100';
    }
    if (theme === 'retro') {
      return 'bg-gradient-to-b from-[#2b261f] via-amber-950/80 to-slate-950 text-amber-100';
    }
    return 'bg-[#0b0c16] text-slate-100';
  };

  return (
    <div className={`min-h-screen relative font-sans antialiased overflow-x-hidden selection:bg-amber-400 selection:text-slate-950 transition-colors duration-500 bg-noise ${getThemeClass()}`}>
      {/* Interactive Cursor Sparkler Trail */}
      <SparklerTrail />

      {/* Particle Canvas */}
      <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none z-0 opacity-60" />

      {/* Ambient Orbs */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-purple-600/20 rounded-full blur-[128px] animate-pulse"></div>
        <div className="absolute top-1/3 -right-40 w-96 h-96 bg-amber-500/15 rounded-full blur-[128px] animate-pulse" style={{ animationDelay: '1.5s' }}></div>
        <div className="absolute -bottom-40 left-1/4 w-[500px] h-[500px] bg-rose-600/15 rounded-full blur-[140px] animate-pulse" style={{ animationDelay: '3s' }}></div>
      </div>

      {/* Navbar */}
      <Navbar theme={theme} setTheme={setTheme} onOpenCustomizer={() => setIsCustomizerOpen(true)} />

      {/* Main Sections Flow */}
      <main className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-32 space-y-28 sm:space-y-36">
        <Hero name={siteState.name} age={siteState.age} date={siteState.date} subtext={siteState.subtext} />
        <Constellation />
        <Timeline memories={initialMemories} onSelectMemory={(mem) => setSelectedMemory(mem)} />
        <ReasonsGrid />
        <BirthdayCake />
        <SecretLetter name={siteState.name} date={siteState.date} letterText={siteState.letterText} signature={siteState.signature} />
        <Guestbook />
      </main>

      {/* Audio Controller */}
      <AudioPlayer />

      {/* Modals */}
      <MemoryModal memory={selectedMemory} onClose={() => setSelectedMemory(null)} />
      <CustomizerModal
        isOpen={isCustomizerOpen}
        onClose={() => setIsCustomizerOpen(false)}
        state={siteState}
        onSave={(newState) => setSiteState(newState)}
      />
    </div>
  );
}
