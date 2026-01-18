"use client";
import { useEffect, useState, useRef } from "react";

export default function ScrollProgressBar() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const animationFrame = useRef<number | null>(null);

  useEffect(() => {
    const updateProgress = () => {
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const scroll = (totalScroll / windowHeight) * 100;
      setScrollProgress(scroll);
      animationFrame.current = requestAnimationFrame(updateProgress);
    };

    const handleScroll = () => {
      if (animationFrame.current === null) {
        animationFrame.current = requestAnimationFrame(updateProgress);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (animationFrame.current) cancelAnimationFrame(animationFrame.current);
    };
  }, []);

  return (
    <div
      className="fixed top-0 left-0 h-[4px] bg-[--accent-primary] z-50 transition-[width] duration-75 ease-linear shadow-[0_0_10px_var(--accent-primary)]"
      style={{ width: `${scrollProgress}%` }}
    ></div>
  );
}
