"use client";

import { useRef, useEffect } from "react";

export default function ShakingBox() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    // Canvas size
    canvas.width = 400;
    canvas.height = 400;

    const gravity = 0.5;
    const balls = [];
    const numBalls = 30;

    class Ball {
      constructor(x, y, r) {
        this.x = x;
        this.y = y;
        this.r = r;
        this.vx = 0;
        this.vy = 0;
      }

      update(forceX, forceY) {
        this.vy += gravity;
        this.vx += forceX;
        this.vy += forceY;

        this.x += this.vx;
        this.y += this.vy;

        // Floor collision
        if (this.y + this.r > canvas.height - 10) {
          this.y = canvas.height - 10 - this.r;
          this.vy *= -0.6; // bounce
          this.vx *= 0.9; // friction
        }

        // Left wall collision
        if (this.x - this.r < 10) {
          this.x = 10 + this.r;
          this.vx *= -0.6;
        }

        // Right wall collision
        if (this.x + this.r > canvas.width - 10) {
          this.x = canvas.width - 10 - this.r;
          this.vx *= -0.6;
        }
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
        ctx.fillStyle = "red";
        ctx.fill();
      }
    }

    // Create balls
    for (let i = 0; i < numBalls; i++) {
      balls.push(
        new Ball(
          50 + Math.random() * 300,
          canvas.height - 30 - Math.random() * 50,
          8 + Math.random() * 7
        )
      );
    }

    // Track mouse velocity
    let mouseX = canvas.width / 2;
    let mouseY = canvas.height / 2;
    let prevMouseX = mouseX;
    let prevMouseY = mouseY;
    let velocityX = 0;
    let velocityY = 0;

    function handleMouseMove(e) {
      const rect = canvas.getBoundingClientRect();
      mouseX = e.clientX - rect.left;
      mouseY = e.clientY - rect.top;

      // calculate velocity
      velocityX = mouseX - prevMouseX;
      velocityY = mouseY - prevMouseY;

      prevMouseX = mouseX;
      prevMouseY = mouseY;
    }

    canvas.addEventListener("mousemove", handleMouseMove);

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw white box
      ctx.fillStyle = "white";
      ctx.fillRect(10, 10, canvas.width - 20, canvas.height - 20);

      ctx.strokeStyle = "#000";
      ctx.lineWidth = 4;
      ctx.strokeRect(10, 10, canvas.width - 20, canvas.height - 20);

      // Apply mouse velocity as shake force, scale it for bigger effect
      const shakeX = velocityX * 0.5;
      const shakeY = velocityY * 0.5;

      balls.forEach((ball) => {
        ball.update(shakeX, shakeY);
        ball.draw();
      });

      // Gradually decay velocity (so balls stop moving if mouse stops)
      velocityX *= 0.9;
      velocityY *= 0.9;

      requestAnimationFrame(animate);
    }

    animate();

    return () => {
      canvas.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="flex justify-center my-10">
      <canvas
        ref={canvasRef}
        className="border border-black rounded shadow-lg"
      />
    </div>
  );
}
