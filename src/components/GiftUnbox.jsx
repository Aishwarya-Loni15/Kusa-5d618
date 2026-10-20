import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Gift, Sparkles, Award, Coffee, Compass, Utensils, Heart, 
  ShieldCheck, Zap, Star, Camera, Music, PartyPopper, Check, RotateCw, Crown, Ticket
} from 'lucide-react';
import confetti from 'canvas-confetti';

const giftBoxes = [
  {
    id: "honors",
    tag: "GIFT #01 • ROYAL HONORS",
    title: "The Golden Friendship Honors",
    subtitle: "Officially awarding the best friend in the universe",
    ribbonColor: "from-amber-400 via-yellow-300 to-amber-500",
    borderClosed: "border-amber-400/40 hover:border-amber-400/80",
    glowColor: "from-amber-500/15 via-yellow-500/5 to-transparent",
    accentText: "text-amber-300",
    badgeBg: "bg-amber-400/20 text-amber-300 border-amber-400/40",
    confettiColors: ['#ffd700', '#ffb703', '#fb8500', '#ffffff'],
    items: [
      {
        icon: Crown,
        title: "World's Best Friend Trophy 👑",
        desc: "Certified as the most loyal, caring, and extraordinary best friend. Awarded with infinite love to Ratikant (Kusa)!",
        perk: "Lifetime Honor"
      },
      {
        icon: Sparkles,
        title: "The Lucky Charm Seal 🧿",
        desc: "A lifelong emblem of peace, happiness, and good fortune — having you in my life is the greatest blessing.",
        perk: "Always Active"
      },
      {
        icon: ShieldCheck,
        title: "Unbreakable Friendship Warranty 🤝",
        desc: "Guaranteed 100% unconditional loyalty, zero expiry date, and standing by your side through every chapter.",
        perk: "Non-Cancellable"
      }
    ]
  },
  {
    id: "coupons",
    tag: "GIFT #02 • VIP COUPONS",
    title: "The VIP Friendship Passes",
    subtitle: "Real perks redeemable anytime, no questions asked",
    ribbonColor: "from-rose-400 via-pink-400 to-rose-500",
    borderClosed: "border-rose-400/40 hover:border-rose-400/80",
    glowColor: "from-rose-500/15 via-pink-500/5 to-transparent",
    accentText: "text-rose-300",
    badgeBg: "bg-rose-400/20 text-rose-300 border-rose-400/40",
    confettiColors: ['#f72585', '#ff4d6d', '#ff758f', '#ff8fa3', '#ffd700'],
    items: [
      {
        icon: Coffee,
        title: "Unlimited Chai & Late-Night Talks ☕",
        desc: "Redeemable 24/7 for hot tea, midnight deep chats, sharing secrets, and laughing until our stomachs hurt.",
        perk: "Unlimited Uses"
      },
      {
        icon: Compass,
        title: "Spontaneous Roadtrip & Drive Pass 🚗",
        desc: "Valid for an unplanned road trip, sunset drive, or spontaneous adventure to wherever the road leads us.",
        perk: "1-Call Away"
      },
      {
        icon: Utensils,
        title: "2:00 AM Midnight Food Run 🍟",
        desc: "Immunity from diets — street food, snacks, midnight cravings, or spontaneous feast, completely on me!",
        perk: "Anytime Valid"
      }
    ]
  },
  {
    id: "care",
    tag: "GIFT #03 • HEART CARE",
    title: "The Heartfelt Comfort Package",
    subtitle: "A safe space of encouragement, warmth & comfort",
    ribbonColor: "from-purple-400 via-indigo-400 to-purple-500",
    borderClosed: "border-purple-400/40 hover:border-purple-400/80",
    glowColor: "from-purple-500/15 via-indigo-500/5 to-transparent",
    accentText: "text-purple-300",
    badgeBg: "bg-purple-400/20 text-purple-300 border-purple-400/40",
    confettiColors: ['#9d4edd', '#c77dff', '#e0aaff', '#ffffff', '#ffd700'],
    items: [
      {
        icon: Heart,
        title: "Infinite Warm Hugs & Comfort 🫂",
        desc: "Whenever a day feels heavy, exhausting, or overwhelming, redeemable for instant comfort and reassurance.",
        perk: "Forever Valid"
      },
      {
        icon: Zap,
        title: "Emergency Motivation & Cheerleader 🚀",
        desc: "Whenever self-doubt creeps in, an instant reminder of how brilliant, resilient, and capable you are.",
        perk: "Instant Boost"
      },
      {
        icon: Star,
        title: "Peaceful Silence & Safe Space 🌙",
        desc: "A pass where you don't even need to speak — understanding your mood and being there even in complete silence.",
        perk: "Guaranteed Peace"
      }
    ]
  },
  {
    id: "celebration",
    tag: "GIFT #04 • CELEBRATION",
    title: "The Memory & Celebration Perks",
    subtitle: "Fun privileges and birthday celebration perks",
    ribbonColor: "from-emerald-400 via-teal-300 to-emerald-500",
    borderClosed: "border-emerald-400/40 hover:border-emerald-400/80",
    glowColor: "from-emerald-500/15 via-teal-500/5 to-transparent",
    accentText: "text-emerald-300",
    badgeBg: "bg-emerald-400/20 text-emerald-300 border-emerald-400/40",
    confettiColors: ['#06d6a0', '#118ab2', '#ffd166', '#ffffff', '#ff6b6b'],
    items: [
      {
        icon: Camera,
        title: "Polaroid Core Memory Vault 📸",
        desc: "An archive of every funny memory, candid picture, and unforgettable adventure we have shared together.",
        perk: "Memories Forever"
      },
      {
        icon: Music,
        title: "Bestie Soundtrack & Midnight Vibes 🎧",
        desc: "Our shared playlist of songs that instantly bring a smile and remind us of the great times we've had.",
        perk: "Endless Tunes"
      },
      {
        icon: PartyPopper,
        title: "Birthday King VIP Immunity 👑",
        desc: "Zero teasing today, double slices of cake, and whatever song or movie you want to pick is final!",
        perk: "Birthday Privilege"
      }
    ]
  }
];

export default function GiftUnbox() {
  const [openedBoxes, setOpenedBoxes] = useState({});
  const [claimedPerks, setClaimedPerks] = useState({});

  const triggerConfetti = (colors) => {
    try {
      confetti({
        particleCount: 70,
        spread: 80,
        origin: { y: 0.6 },
        colors: colors || ['#ffd700', '#ff69b4', '#ffffff']
      });

      setTimeout(() => {
        confetti({
          particleCount: 50,
          angle: 60,
          spread: 50,
          origin: { x: 0 },
          colors: colors || ['#ffd700', '#ff69b4', '#ffffff']
        });
      }, 150);

      setTimeout(() => {
        confetti({
          particleCount: 50,
          angle: 120,
          spread: 50,
          origin: { x: 1 },
          colors: colors || ['#ffd700', '#ff69b4', '#ffffff']
        });
      }, 300);
    } catch (e) {
      console.log('Confetti error', e);
    }
  };

  const toggleBox = (box) => {
    const isCurrentlyOpen = !!openedBoxes[box.id];
    setOpenedBoxes(prev => ({
      ...prev,
      [box.id]: !isCurrentlyOpen
    }));

    if (!isCurrentlyOpen) {
      triggerConfetti(box.confettiColors);
    }
  };

  const toggleClaimPerk = (key) => {
    setClaimedPerks(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
    try {
      confetti({
        particleCount: 30,
        spread: 45,
        origin: { y: 0.7 },
        colors: ['#ffd700', '#ff4d6d', '#4cc9f0']
      });
    } catch (e) {}
  };

  const allOpened = giftBoxes.every(b => openedBoxes[b.id]);

  const toggleAll = () => {
    const nextState = {};
    giftBoxes.forEach(b => {
      nextState[b.id] = !allOpened;
    });
    setOpenedBoxes(nextState);
    if (!allOpened) {
      triggerConfetti(['#ffd700', '#f72585', '#7209b7', '#4cc9f0', '#ffffff']);
    }
  };

  return (
    <section id="gift" className="scroll-mt-24 space-y-10 text-center relative">
      <div className="space-y-3">
        <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-rose-300 glass-panel px-3 py-1 rounded-full border border-rose-300/30">
          <Gift className="w-3.5 h-3.5 text-rose-400" />
          <span>Surprise Gift Vault</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-serif font-bold text-slate-100">
          Special Gift Boxes For Kusa ❤️
        </h2>
        <p className="text-slate-400 font-light max-w-xl mx-auto text-sm sm:text-base">
          Tap each of the 4 unique gift boxes to unwrap different surprises, friendship awards, VIP passes, and perks!
        </p>

        <div className="pt-2">
          <button
            onClick={toggleAll}
            className="text-xs glass-panel px-4 py-2 rounded-full border border-amber-400/30 text-amber-300 hover:bg-amber-400/10 transition-all inline-flex items-center gap-1.5 cursor-pointer shadow-lg"
          >
            <RotateCw className="w-3.5 h-3.5" />
            <span>{allOpened ? "Wrap All Gift Boxes" : "Unbox All 4 Gifts ✨"}</span>
          </button>
        </div>
      </div>

      {/* Grid of 4 Different Gift Boxes */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto text-left">
        {giftBoxes.map((box) => {
          const isOpen = !!openedBoxes[box.id];

          return (
            <div key={box.id} className="relative">
              <AnimatePresence mode="wait">
                {!isOpen ? (
                  /* Closed Gift Box */
                  <motion.div
                    key="closed"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => toggleBox(box)}
                    className={`cursor-pointer glass-panel-dark p-6 sm:p-8 rounded-3xl border ${box.borderClosed} shadow-xl flex flex-col justify-between min-h-[300px] relative overflow-hidden group transition-all`}
                  >
                    {/* Background Glow */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${box.glowColor} opacity-40 group-hover:opacity-80 transition-opacity`}></div>

                    {/* Decorative Ribbon Cross */}
                    <div className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-4 bg-gradient-to-b from-white/10 via-amber-300/10 to-transparent pointer-events-none"></div>

                    {/* Header Tag */}
                    <div className="flex justify-between items-center z-10">
                      <span className={`text-[11px] font-mono tracking-wider font-semibold px-2.5 py-1 rounded-full border ${box.badgeBg}`}>
                        {box.tag}
                      </span>
                      <Heart className="w-4 h-4 text-rose-400/40 group-hover:text-rose-400 group-hover:scale-110 transition-all" />
                    </div>

                    {/* Center Gift Box Icon with Animated Ribbon */}
                    <div className="my-6 flex flex-col items-center justify-center text-center space-y-3 z-10">
                      <div className={`w-20 h-20 rounded-2xl bg-gradient-to-tr ${box.ribbonColor} flex items-center justify-center text-slate-950 shadow-2xl group-hover:scale-110 transition-transform relative`}>
                        <Gift className="w-10 h-10 stroke-[2]" />
                        <div className="absolute -top-1.5 -right-1.5 bg-rose-500 text-white p-1 rounded-full shadow-md animate-pulse">
                          <Heart className="w-3.5 h-3.5 fill-white" />
                        </div>
                      </div>
                      <div>
                        <h3 className="text-xl font-serif font-bold text-slate-100 group-hover:text-amber-200 transition-colors">
                          {box.title}
                        </h3>
                        <p className="text-xs text-slate-400 mt-1 max-w-xs">
                          {box.subtitle}
                        </p>
                      </div>
                    </div>

                    {/* Bottom CTA */}
                    <div className="flex justify-between items-center z-10 pt-3 border-t border-white/5 text-xs">
                      <span className="text-slate-400 flex items-center gap-1.5">
                        <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                        <span>Contains 3 gifts</span>
                      </span>
                      <span className={`${box.accentText} font-semibold flex items-center gap-1 group-hover:translate-x-1 transition-transform`}>
                        Tap to Unbox 🎁 →
                      </span>
                    </div>
                  </motion.div>
                ) : (
                  /* Opened Gift Box with Detailed Gifts */
                  <motion.div
                    key="opened"
                    initial={{ opacity: 0, scale: 0.95, y: 10 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.35 }}
                    className="glass-panel-dark p-6 sm:p-7 rounded-3xl border border-amber-400/40 shadow-2xl space-y-5 relative overflow-hidden"
                  >
                    {/* Header with Title and Re-wrap button */}
                    <div className="flex justify-between items-start gap-3 pb-3 border-b border-white/10">
                      <div>
                        <span className={`text-[10px] font-mono font-bold tracking-wider uppercase px-2 py-0.5 rounded-full border ${box.badgeBg}`}>
                          {box.tag}
                        </span>
                        <h4 className="text-lg sm:text-xl font-serif font-bold text-slate-100 mt-1.5 flex items-center gap-2">
                          <span>{box.title}</span>
                          <Sparkles className={`w-4 h-4 ${box.accentText}`} />
                        </h4>
                      </div>
                      <button
                        onClick={() => toggleBox(box)}
                        className="text-[11px] text-slate-400 hover:text-white px-2.5 py-1 rounded-lg bg-white/5 hover:bg-white/10 transition-colors cursor-pointer flex items-center gap-1 shrink-0"
                      >
                        <RotateCw className="w-3 h-3" />
                        <span>Wrap back</span>
                      </button>
                    </div>

                    {/* 3 Different Gifts in This Box */}
                    <div className="space-y-3">
                      {box.items.map((item, itemIdx) => {
                        const Icon = item.icon;
                        const perkKey = `${box.id}-${itemIdx}`;
                        const isClaimed = !!claimedPerks[perkKey];

                        return (
                          <div
                            key={itemIdx}
                            className="p-3.5 sm:p-4 rounded-2xl bg-slate-950/80 border border-white/10 hover:border-amber-400/30 transition-all space-y-2 group"
                          >
                            <div className="flex items-start justify-between gap-3">
                              <div className="flex items-center gap-2.5">
                                <div className={`w-8 h-8 rounded-xl ${box.badgeBg} flex items-center justify-center shrink-0`}>
                                  <Icon className="w-4 h-4" />
                                </div>
                                <h5 className="font-semibold text-slate-100 text-xs sm:text-sm">
                                  {item.title}
                                </h5>
                              </div>
                              <button
                                onClick={() => toggleClaimPerk(perkKey)}
                                className={`text-[10px] font-mono px-2 py-0.5 rounded-full border transition-all cursor-pointer shrink-0 flex items-center gap-1 ${
                                  isClaimed 
                                    ? "bg-emerald-500/20 text-emerald-300 border-emerald-400/40" 
                                    : "bg-white/5 text-slate-300 border-white/10 hover:border-amber-400/40 hover:text-amber-300"
                                }`}
                              >
                                {isClaimed ? (
                                  <>
                                    <Check className="w-3 h-3 text-emerald-400" />
                                    <span>Redeemed! ✨</span>
                                  </>
                                ) : (
                                  <>
                                    <Ticket className="w-3 h-3" />
                                    <span>{item.perk}</span>
                                  </>
                                )}
                              </button>
                            </div>
                            <p className="text-[11px] sm:text-xs text-slate-400 pl-10 leading-relaxed font-light">
                              {item.desc}
                            </p>
                          </div>
                        );
                      })}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </section>
  );
}

