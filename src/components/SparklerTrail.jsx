import React, { useEffect, useRef } from 'react';

export default function SparklerTrail() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let particles = [];
    let animationFrame;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', resize);
    resize();

    class SparkParticle {
      constructor(x, y) {
        this.x = x;
        this.y = y;
        this.size = Math.random() * 3 + 1;
        this.speedX = (Math.random() - 0.5) * 3;
        this.speedY = (Math.random() - 0.5) * 3;
        this.color = `hsl(${Math.random() * 60 + 35}, 100%, 75%)`; // Warm golden hues
        this.life = 1;
        this.decay = Math.random() * 0.03 + 0.02;
      }
      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        this.life -= this.decay;
        this.size *= 0.96;
      }
      draw() {
        ctx.save();
        ctx.globalAlpha = Math.max(0, this.life);
        ctx.fillStyle = this.color;
        ctx.shadowBlur = 8;
        ctx.shadowColor = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }
    }

    const handleMouseMove = (e) => {
      for (let i = 0; i < 3; i++) {
        particles.push(new SparkParticle(e.clientX, e.clientY));
      }
    };

    const handleTouchMove = (e) => {
      if (e.touches[0]) {
        for (let i = 0; i < 3; i++) {
          particles.push(new SparkParticle(e.touches[0].clientX, e.touches[0].clientY));
        }
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('touchmove', handleTouchMove);

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p, idx) => {
        p.update();
        p.draw();
        if (p.life <= 0 || p.size <= 0.2) {
          particles.splice(idx, 1);
        }
      });
      animationFrame = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchmove', handleTouchMove);
      cancelAnimationFrame(animationFrame);
    };
  }, []);

  return <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none z-40 opacity-80" />;
}
