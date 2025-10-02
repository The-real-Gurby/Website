"use client";

import { useRef, useEffect } from "react";

export default function Projectiles() {
  const projectilesRef = useRef([]);
  const canvasRef = useRef(null);

  useEffect(() => {
    // Create canvas
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    document.body.appendChild(canvas);
    canvas.style.position = "fixed";
    canvas.style.top = 0;
    canvas.style.left = 0;
    canvas.style.pointerEvents = "none"; // so buttons remain clickable
    canvas.style.zIndex = 9999;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    canvasRef.current = canvas;

    const gravity = 0.2;

    // Particle class for explosion
    class Particle {
      constructor(x, y) {
        this.x = x;
        this.y = y;
        this.size = Math.random() * 4 + 2;
        this.color = `hsl(${Math.random() * 360}, 80%, 60%)`;
        this.vx = (Math.random() - 0.5) * 10; // horizontal speed
        this.vy = (Math.random() - 1) * 10;   // vertical speed
        this.life = 60; // frames until disappear
      }
      update() {
        this.vy += gravity;
        this.x += this.vx;
        this.y += this.vy;
        this.life--;
      }
      draw() {
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, this.size, this.size);
      }
    }

    // Spawn explosion on click
    const clickHandler = (e) => {
      const x = e.clientX;
      const y = e.clientY;
      const count = 20 + Math.floor(Math.random() * 10);
      for (let i = 0; i < count; i++) {
        projectilesRef.current.push(new Particle(x, y));
      }
    };
    window.addEventListener("click", clickHandler);

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      projectilesRef.current.forEach((p, i) => {
        p.update();
        p.draw();
        if (p.life <= 0) projectilesRef.current.splice(i, 1);
      });
      requestAnimationFrame(animate);
    };
    animate();

    // Cleanup
    return () => {
      window.removeEventListener("click", clickHandler);
      document.body.removeChild(canvas);
    };
  }, []);

  return null; // no React element needed
}
