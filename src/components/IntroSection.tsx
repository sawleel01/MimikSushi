"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { ArrowDown } from "lucide-react";

type IntroSectionProps = {
  subtitle: string;
  title: string;
  description: string;
};

export default function IntroSection({
  subtitle,
  title,
  description,
}: IntroSectionProps) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const opacity = useTransform(smoothProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(smoothProgress, [0, 0.5], [1, 0.8]);
  const y = useTransform(smoothProgress, [0, 1], [0, -300]);
  const textY = useTransform(smoothProgress, [0, 0.5], [0, -100]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div ref={containerRef} className="relative bg-[#0a0a0a] overflow-hidden">
      {/* Hero Section - Full Screen */}
      <motion.section
        style={{ opacity, scale }}
        className="relative h-screen flex items-center justify-center overflow-hidden"
      >
        {/* Background  */}
        <div className="absolute inset-0 bg-linear-to-br from-[#1a1a1a] via-[#0a0a0a] to-[#2d1810]">
          <motion.div
            animate={{
              backgroundPosition: ["0% 0%", "100% 100%"],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              repeatType: "reverse",
            }}
            className="absolute inset-0 opacity-30"
            style={{
              backgroundImage:
                "radial-linear(circle at 20% 50%, rgba(196, 30, 58, 0.15) 0%, transparent 50%), radial-linear(circle at 80% 80%, rgba(212, 175, 55, 0.15) 0%, transparent 50%)",
              backgroundSize: "200% 200%",
            }}
          />
        </div>

        {/* Main Content */}
        <motion.div
          style={{ y: textY }}
          className="relative z-10 text-center px-6 max-w-5xl"
        >
          {/* Subtitle */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="mb-6"
          >
            <span className="inline-block text-[#d4af37] text-sm md:text-base tracking-[0.3em] uppercase font-light border border-[#d4af37]/30 px-6 py-2 rounded-full backdrop-blur-sm bg-white/5">
              {subtitle}
            </span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="font-serif text-6xl md:text-8xl lg:text-9xl font-bold text-white mb-6 tracking-tight"
            style={{
              transform: `translate(${mousePosition.x * 0.5}px, ${
                mousePosition.y * 0.5
              }px)`,
              textShadow: "0 10px 40px rgba(0,0,0,0.5)",
            }}
          >
            {title}
          </motion.h1>

          {/* Decorative Line */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.2, delay: 1.2 }}
            className="w-48 h-px bg-linear-to-r from-transparent via-[#d4af37] to-transparent mx-auto mb-8"
          />

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.4 }}
            className="text-white/80 text-lg md:text-xl lg:text-2xl max-w-3xl mx-auto leading-relaxed font-light"
          >
            {description}
          </motion.p>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 2 }}
            className="absolute -bottom-20 left-1/2 -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="flex flex-col items-center gap-2 text-white/60"
            >
              <span className="text-sm tracking-widest">SCROLL</span>

              <ArrowDown className="w-6 h-6" />
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Parallax Image */}
        <motion.div
          style={{ y }}
          className="absolute inset-0 opacity-10 pointer-events-none"
        >
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMCAwaDEwMHYxMDBIMHoiIGZpbGw9Im5vbmUiLz48cGF0aCBkPSJNMjAgMjBoNjB2NjBIMjB6IiBmaWxsPSJub25lIiBzdHJva2U9IiNkNGFmMzciIHN0cm9rZS13aWR0aD0iMC41Ii8+PC9zdmc+')] bg-repeat" />
        </motion.div>
      </motion.section>
    </div>
  );
}
