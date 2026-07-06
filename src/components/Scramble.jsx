import { useEffect, useState, useRef } from "react";

const CHARS = "!<>-_\\/[]{}—=+*^?#________";

export default function Scramble({ text, className = "", trigger = true }) {
  const [display, setDisplay] = useState(text);
  const frameRef = useRef(0);
  const queueRef = useRef([]);

  useEffect(
    function () {
      if (!trigger) return;

      const queue = text.split("").map(function (char) {
        const start = Math.floor(Math.random() * 20);
        const end = start + Math.floor(Math.random() * 20);
        return { from: "", to: char, start, end };
      });
      queueRef.current = queue;
      frameRef.current = 0;

      let animationFrame;

      function update() {
        let output = "";
        let complete = 0;
        for (let i = 0; i < queueRef.current.length; i++) {
          const { from, to, start, end } = queueRef.current[i];
          if (frameRef.current >= end) {
            complete++;
            output += to;
          } else if (frameRef.current >= start) {
            output += CHARS[Math.floor(Math.random() * CHARS.length)];
          } else {
            output += from;
          }
        }
        setDisplay(output);
        if (complete === queueRef.current.length) {
          return;
        }
        frameRef.current++;
        animationFrame = requestAnimationFrame(update);
      }

      update();

      return function () {
        if (animationFrame) cancelAnimationFrame(animationFrame);
      };
    },
    [text, trigger],
  );

  return <span className={className}>{display}</span>;
}
