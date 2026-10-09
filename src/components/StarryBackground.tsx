import React, { useEffect, useRef } from 'react';

interface Star {
  x: number;
  y: number;
  radius: number;
  baseAlpha: number;
  alpha: number;
  twinkleSpeed: number;
  twinklePhase: number;
  color: string;
  hasGlow: boolean;
}

interface ShootingStar {
  x: number;
  y: number;
  length: number;
  speed: number;
  angle: number;
  alpha: number;
  active: boolean;
}

export const StarryBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let stars: Star[] = [];
    let shootingStar: ShootingStar | null = null;
    let lastShootingStarTime = Date.now();

    const starColors = [
      '#ffffff', // Crisp white
      '#ffffff',
      '#e0f2fe', // Cool blue star
      '#fef08a', // Subtle warm yellow star
      '#bae6fd', // Stellar blue
      '#f5d0fe', // Subtle violet star
    ];

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      const width = window.innerWidth;
      const height = window.innerHeight;

      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      ctx.scale(dpr, dpr);
      initStars(width, height);
    };

    const initStars = (width: number, height: number) => {
      const count = Math.floor((width * height) / 3800); // Responsive count ~180-280 stars
      stars = [];

      for (let i = 0; i < count; i++) {
        const hasGlow = Math.random() < 0.12; // 12% of stars have brighter cosmic glow
        const radius = hasGlow 
          ? Math.random() * 1.6 + 1.0 
          : Math.random() * 1.1 + 0.4;
        
        const color = starColors[Math.floor(Math.random() * starColors.length)];

        stars.push({
          x: Math.random() * width,
          y: Math.random() * height,
          radius,
          baseAlpha: Math.random() * 0.6 + 0.25,
          alpha: Math.random() * 0.6 + 0.25,
          twinkleSpeed: Math.random() * 0.03 + 0.008,
          twinklePhase: Math.random() * Math.PI * 2,
          color,
          hasGlow,
        });
      }
    };

    const spawnShootingStar = (width: number, height: number) => {
      const startX = Math.random() * (width * 0.8);
      const startY = Math.random() * (height * 0.4);
      shootingStar = {
        x: startX,
        y: startY,
        length: Math.random() * 80 + 70,
        speed: Math.random() * 8 + 10,
        angle: (Math.PI / 4) + (Math.random() * 0.2 - 0.1), // ~45 degrees diagonal
        alpha: 1,
        active: true,
      };
    };

    let time = 0;
    const render = () => {
      time += 1;
      const width = window.innerWidth;
      const height = window.innerHeight;

      ctx.clearRect(0, 0, width, height);

      // 1. Draw twinkling stars
      for (let i = 0; i < stars.length; i++) {
        const star = stars[i];
        
        // Sine wave twinkle
        star.twinklePhase += star.twinkleSpeed;
        const currentAlpha = star.baseAlpha + Math.sin(star.twinklePhase) * 0.35;
        const clampedAlpha = Math.max(0.1, Math.min(1, currentAlpha));

        ctx.save();
        ctx.fillStyle = star.color;
        ctx.globalAlpha = clampedAlpha;

        // If star has glow, draw soft outer halo
        if (star.hasGlow) {
          ctx.beginPath();
          ctx.arc(star.x, star.y, star.radius * 2.8, 0, Math.PI * 2);
          ctx.fillStyle = star.color;
          ctx.globalAlpha = clampedAlpha * 0.25;
          ctx.fill();

          // Sparkle cross for a few prominent stars
          if (star.radius > 2.0 && clampedAlpha > 0.75) {
            ctx.beginPath();
            ctx.strokeStyle = star.color;
            ctx.lineWidth = 0.5;
            ctx.globalAlpha = clampedAlpha * 0.6;
            const crossLen = star.radius * 3.5;
            ctx.moveTo(star.x - crossLen, star.y);
            ctx.lineTo(star.x + crossLen, star.y);
            ctx.moveTo(star.x, star.y - crossLen);
            ctx.lineTo(star.x, star.y + crossLen);
            ctx.stroke();
          }
        }

        // Draw star core
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fillStyle = star.color;
        ctx.globalAlpha = clampedAlpha;
        ctx.fill();

        ctx.restore();
      }

      // 2. Periodic subtle shooting star (every 9-16 seconds)
      const now = Date.now();
      if (!shootingStar && now - lastShootingStarTime > 11000) {
        if (Math.random() < 0.05) {
          spawnShootingStar(width, height);
          lastShootingStarTime = now;
        }
      }

      if (shootingStar && shootingStar.active) {
        ctx.save();
        const cos = Math.cos(shootingStar.angle);
        const sin = Math.sin(shootingStar.angle);
        
        const tailX = shootingStar.x - cos * shootingStar.length;
        const tailY = shootingStar.y - sin * shootingStar.length;

        const grad = ctx.createLinearGradient(
          tailX, tailY, shootingStar.x, shootingStar.y
        );
        grad.addColorStop(0, 'rgba(255, 255, 255, 0)');
        grad.addColorStop(0.7, `rgba(186, 230, 253, ${shootingStar.alpha * 0.6})`);
        grad.addColorStop(1, `rgba(255, 255, 255, ${shootingStar.alpha})`);

        ctx.beginPath();
        ctx.strokeStyle = grad;
        ctx.lineWidth = 1.5;
        ctx.moveTo(tailX, tailY);
        ctx.lineTo(shootingStar.x, shootingStar.y);
        ctx.stroke();

        // Advance shooting star
        shootingStar.x += cos * shootingStar.speed;
        shootingStar.y += sin * shootingStar.speed;
        shootingStar.alpha -= 0.015;

        if (shootingStar.alpha <= 0 || shootingStar.x > width + 100 || shootingStar.y > height + 100) {
          shootingStar.active = false;
          shootingStar = null;
        }
        ctx.restore();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    window.addEventListener('resize', resize);
    resize();
    render();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div 
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden select-none"
      aria-hidden="true"
    >
      {/* 1. Deep cosmic dark background gradient */}
      <div className="absolute inset-0 bg-[#05060b]" />

      {/* 2. Deep space subtle dust and nebulae */}
      <div 
        className="absolute inset-0 opacity-40 mix-blend-screen"
        style={{
          background: `
            radial-gradient(circle at 20% 15%, rgba(56, 189, 248, 0.08) 0%, transparent 45%),
            radial-gradient(circle at 85% 25%, rgba(168, 85, 247, 0.07) 0%, transparent 40%),
            radial-gradient(circle at 50% 80%, rgba(99, 102, 241, 0.06) 0%, transparent 50%),
            radial-gradient(ellipse at 70% 85%, rgba(14, 165, 233, 0.05) 0%, transparent 45%)
          `,
        }}
      />

      {/* 3. Subtle cosmic vignette at edges */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(circle at center, transparent 35%, rgba(2, 4, 8, 0.7) 100%)',
        }}
      />

      {/* 4. Canvas with animated twinkling stars and shooting stars */}
      <canvas 
        ref={canvasRef} 
        className="absolute inset-0 w-full h-full block"
      />
    </div>
  );
};
