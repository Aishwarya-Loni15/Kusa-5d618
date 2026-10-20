import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { HelpCircle, CheckCircle2, Sparkles, Trophy } from 'lucide-react';
import confetti from 'canvas-confetti';

const quizQuestions = [
  {
    question: "What makes Kusa (Ratikant) stand out from everyone else?",
    options: [
      "His hilarious jokes & witty humor",
      "His genuine heart & empathy",
      "His incredible creative mind",
      "ALL OF THE ABOVE (He is simply 1 in a million!)"
    ],
    correct: 3
  },
  {
    question: "What is Kusa's superpower?",
    options: [
      "Instantly turning any gloomy day into sunshine",
      "Making the best tea/coffee",
      "Being the most reliable friend ever",
      "All of the above!"
    ],
    correct: 3
  },
  {
    question: "What is the official verdict on October 21?",
    options: [
      "Just another regular day",
      "The day the world got a true legend: Kusa's Birthday! 🎉",
      "A national holiday for celebration",
      "Options B & C combined!"
    ],
    correct: 1
  }
];

export default function TriviaQuiz() {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [score, setScore] = useState(0);
  const [isCompleted, setIsCompleted] = useState(false);

  const handleSelect = (optionIdx) => {
    setSelectedOption(optionIdx);
    if (optionIdx === quizQuestions[currentIdx].correct) {
      setScore((prev) => prev + 1);
    }
  };

  const handleNext = () => {
    if (currentIdx + 1 < quizQuestions.length) {
      setCurrentIdx((prev) => prev + 1);
      setSelectedOption(null);
    } else {
      setIsCompleted(true);
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
      });
    }
  };

  const resetQuiz = () => {
    setCurrentIdx(0);
    setSelectedOption(null);
    setScore(0);
    setIsCompleted(false);
  };

  const currentQ = quizQuestions[currentIdx];

  return (
    <section id="quiz" className="scroll-mt-24 space-y-10 text-center">
      <div className="space-y-3">
        <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-cyan-300 glass-panel px-3 py-1 rounded-full border border-cyan-300/30">
          <HelpCircle className="w-3.5 h-3.5" />
          <span>Interactive Trivia</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-serif font-bold text-slate-100">
          The Kusa Birthday Quiz!
        </h2>
        <p className="text-slate-400 font-light max-w-xl mx-auto text-sm sm:text-base">
          Answer 3 fun questions to prove how special you are!
        </p>
      </div>

      <div className="max-w-xl mx-auto glass-panel-dark p-6 sm:p-8 rounded-3xl border border-cyan-400/30 shadow-2xl space-y-6 text-left">
        {!isCompleted ? (
          <>
            <div className="flex justify-between items-center text-xs font-mono text-cyan-300">
              <span>QUESTION {currentIdx + 1} OF {quizQuestions.length}</span>
              <span>SCORE: {score}</span>
            </div>

            <h3 className="text-lg sm:text-xl font-serif font-bold text-slate-100">
              {currentQ.question}
            </h3>

            <div className="space-y-3">
              {currentQ.options.map((opt, oIdx) => {
                const isSelected = selectedOption === oIdx;
                return (
                  <button
                    key={oIdx}
                    onClick={() => handleSelect(oIdx)}
                    className={`w-full p-4 rounded-xl border text-xs sm:text-sm font-medium text-left transition-all cursor-pointer flex items-center justify-between ${
                      isSelected
                        ? 'bg-cyan-500/20 border-cyan-400 text-cyan-200 shadow-md'
                        : 'bg-slate-950/60 border-white/10 text-slate-300 hover:bg-white/5'
                    }`}
                  >
                    <span>{opt}</span>
                    {isSelected && <CheckCircle2 className="w-4 h-4 text-cyan-400" />}
                  </button>
                );
              })}
            </div>

            {selectedOption !== null && (
              <div className="pt-2 text-right">
                <button
                  onClick={handleNext}
                  className="px-6 py-2.5 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 text-slate-950 font-bold text-xs hover:scale-105 transition-transform cursor-pointer"
                >
                  {currentIdx + 1 < quizQuestions.length ? 'Next Question →' : 'See Results 🎉'}
                </button>
              </div>
            )}
          </>
        ) : (
          <div className="text-center space-y-4 py-4">
            <Trophy className="w-12 h-12 text-amber-400 mx-auto" />
            <h3 className="text-2xl font-serif font-bold text-amber-200">
              Quiz Completed! 100% Master Friend!
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 font-light">
              Verdict: Kusa is officially certified as the absolute best person in the universe!
            </p>
            <button
              onClick={resetQuiz}
              className="px-6 py-2.5 rounded-full glass-panel border border-cyan-400/30 text-cyan-300 hover:bg-cyan-400/10 text-xs cursor-pointer"
            >
              Play Again 🔄
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
