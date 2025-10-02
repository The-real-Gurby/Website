"use client";

import { useRef, useEffect } from "react";
import { gsap } from "gsap";

const Projectiles = () => {
  const projectilesRef = useRef([]);

  useEffect(() => {
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    document.body.appendChild(canvas);
    canvas.style.position = "fixed";
    canvas.style.top = "0";
    canvas.style.left = "0";
    canvas.style.pointerEvents = "none";
    canvas.style.zIndex = 9999;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const gravity = 0.2;

    class Projectile {
      constructor(x, y) {
        this.x = x;
        this.y = y;
        this.size = 4;
        this.color = "#ffffff";
        this.vx = (Math.random() - 0.5) * 8;
        this.vy = (Math.random() - 1.5) * 5;
        this.life = 60;
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

    const clickHandler = (e) => {
      for (let i = 0; i < 5; i++) projectilesRef.current.push(new Projectile(e.clientX, e.clientY));
    };
    window.addEventListener("click", clickHandler);

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      projectilesRef.current.forEach((proj, i) => {
        proj.update();
        proj.draw();
        if (proj.life <= 0) projectilesRef.current.splice(i, 1);
      });
      requestAnimationFrame(animate);
    };
    animate();

    return () => {
      window.removeEventListener("click", clickHandler);
      document.body.removeChild(canvas);
    };
  }, []);

  return null; // no JSX, canvas is injected
};

export default Projectiles;
