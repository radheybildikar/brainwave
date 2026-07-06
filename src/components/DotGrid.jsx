import { useEffect, useRef } from "react";

export default function DotGrid() {
  const canvasRef = useRef(null);

  useEffect(function () {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let mouse = { x: -9999, y: -9999 };
    let animationFrame;

    function resize() {
      canvas.width = window.innerWidth;
      canvas.height = canvas.parentElement.offsetHeight;
    }
    resize();
    window.addEventListener("resize", resize);

    function handleMove(e) {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    }
    window.addEventListener("mousemove", handleMove);

    const spacing = 36;

    function draw() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (let x = 0; x < canvas.width; x += spacing) {
        for (let y = 0; y < canvas.height; y += spacing) {
          const dx = mouse.x - x;
          const dy = mouse.y - y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const maxDist = 160;
          const proximity = Math.max(0, 1 - dist / maxDist);
          const radius = 1 + proximity * 2.5;
          const opacity = 0.15 + proximity * 0.7;

          ctx.beginPath();
          ctx.arc(x, y, radius, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(0, 240, 255, ${opacity})`;
          ctx.fill();
        }
      }
      animationFrame = requestAnimationFrame(draw);
    }
    draw();

    return function () {
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", handleMove);
      if (animationFrame) cancelAnimationFrame(animationFrame);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none opacity-60"
    />
  );
}
