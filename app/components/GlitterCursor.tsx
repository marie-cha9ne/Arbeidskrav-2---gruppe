"use client";

import { useEffect, useRef } from "react";

//Ønkser å informere at denne koden IKKE ER VÅR. vi la den kun til fordi det så gøy ut
export default function GlitterCursor() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const colors = ["#f780a4ff","#ffccd5","#9F86C0","#5E548E","#231942","#fff",]

  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d")!;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles: any[] = [];

    function addParticle(x: number, y: number) {
      particles.push({
        x,
        y,
        alpha: 1,
        size: Math.random() * 4 + 1,
        color: colors[Math.floor(Math.random()* colors.length)],
        speedX: (Math.random() - 0.5) * 2,
        speedY: (Math.random() - 0.5) * 2,
      });
    }

    function draw() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p, i) => {
        ctx.globalAlpha = p.alpha;
        ctx.fillStyle = p.color;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();

        // oppdater partikkel
        p.x += p.speedX;
        p.y += p.speedY;
        p.alpha -= 0.02;

        // fjern når den blir usynlig
        if (p.alpha <= 0) particles.splice(i, 1);
      });
      requestAnimationFrame(draw);
    }

    // legg til glitter ved musbevegelse
    window.addEventListener("mousemove", (e) => {
      for (let i = 0; i < 5; i++) {
        addParticle(e.clientX, e.clientY);
      }
    });

    draw();

    // håndter resize
    window.addEventListener("resize", () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    });
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{ 
        position: "fixed", 
        top: 0, 
        left: 0, 
        width: "100vw", 
        height: "100vh", 
        pointerEvents: "none", 
        zIndex: 9999 
      }}
    />
  );
}
