import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function Cursor() {
  const [visible, setVisible] = useState(false);
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);
  const springX = useSpring(mouseX, { damping: 25, stiffness: 300 });
  const springY = useSpring(mouseY, { damping: 25, stiffness: 300 });

  useEffect(
    function () {
      function moveHandler(e) {
        mouseX.set(e.clientX);
        mouseY.set(e.clientY);
        setVisible(true);
      }
      window.addEventListener("mousemove", moveHandler);
      return function () {
        window.removeEventListener("mousemove", moveHandler);
      };
    },
    [mouseX, mouseY],
  );

  if (typeof window === "undefined" || window.innerWidth < 1024) return null;

  return (
    <motion.div
      style={{ left: springX, top: springY, opacity: visible ? 1 : 0 }}
      className="fixed z-[100] pointer-events-none w-6 h-6 -ml-3 -mt-3 rounded-full border border-primary mix-blend-difference"
    />
  );
}
