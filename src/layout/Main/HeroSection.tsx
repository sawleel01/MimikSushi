"use client";

import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { ArrowRight, Plus } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { useLocation } from "@/components/LocationContext";

const LOCATION_ACTIONS = {
  acton: {
    giftCardUrl: "https://mimik-sushi-wakefield.resos.com/bookin",
    orderUrl: "https://order.toasttab.com/online/mimik-sushi-doncaster",
    reservationUrl: "https://order.toasttab.com/online/mimik-sushi-acton",
  },
  doncaster: {
    giftCardUrl: "https://order.toasttab.com/egiftcards/mimik-sushi-doncaster",
    orderUrl: "https://order.toasttab.com/online/mimik-sushi-doncaster",
    reservationUrl: "https://mimik-sushi-doncaster.resos.com/booking",
  },
  wakefield: {
    giftCardUrl: "https://mimik-sushi-wakefield.resos.com/bookin",
    orderUrl: "https://order.toasttab.com/online/mimik-sushi-doncaster",
    reservationUrl: "https://mimik-sushi-wakefield.resos.com/booking",
  },
};

export default function SushiHero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { location } = useLocation();

  const key = location?.toLowerCase() as
    | keyof typeof LOCATION_ACTIONS
    | undefined;

  const actions = LOCATION_ACTIONS[key ?? "doncaster"];

  const locationName = location?.charAt(0).toUpperCase() + location?.slice(1);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  // Smooth spring physics for animations
  const springConfig = { stiffness: 100, damping: 30, restDelta: 0.001 };

  // Parallax effects
  const y1 = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, 300]),
    springConfig,
  );
  const y2 = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, 200]),
    springConfig,
  );
  const y3 = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, 100]),
    springConfig,
  );

  // Scale and opacity effects
  const scale = useSpring(
    useTransform(scrollYProgress, [0, 0.5], [1, 0.8]),
    springConfig,
  );
  const opacity = useSpring(
    useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.5, 0]),
    springConfig,
  );
  const imageOpacity = useSpring(
    useTransform(scrollYProgress, [0, 0.3], [0.3, 0]),
    springConfig,
  );

  // Rotation effects
  const rotate1 = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, -15]),
    springConfig,
  );
  const rotate2 = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, 15]),
    springConfig,
  );

  return (
    <div ref={heroRef} className="relative min-h-screen bg-white">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Animated circles */}
        <motion.div
          style={{ y: y1, rotate: rotate1, opacity: imageOpacity }}
          className="absolute -top-20 -right-20 w-96 h-96 rounded-full bg-linear-to-br from-[#c41e3a]/10 to-[#d4af37]/10 blur-3xl"
        />
        <motion.div
          style={{ y: y2, rotate: rotate2, opacity: imageOpacity }}
          className="absolute top-1/3 -left-32 w-80 h-80 rounded-full bg-linear-to-br from-[#d4af37]/10 to-[#c41e3a]/10 blur-3xl"
        />
        <motion.div
          style={{ y: y3, opacity: imageOpacity }}
          className="absolute bottom-20 right-1/4 w-64 h-64 rounded-full bg-linear-to-br from-[#2d5016]/5 to-[#d4af37]/5 blur-2xl"
        />
      </div>

      {/* Main Hero Content */}
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-40 lg:py-14 flex items-center">
        <div className="w-full grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div style={{ scale, opacity }} className="space-y-8 z-10">
            {/* Small Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full border border-[#d4af37]/30 shadow-lg"
            >
              <span className="w-2 h-2 bg-[#c41e3a] rounded-full animate-pulse" />
              <span className="text-sm font-medium text-[#1a1a1a] tracking-wide">
                Est. 1987
              </span>
            </motion.div>

            {/* Main Heading */}
            <div className="space-y-4">
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="font-['Noto_Serif_JP'] text-6xl md:text-7xl lg:text-8xl font-bold leading-none"
              >
                <span
                  className="block bg-black bg-clip-text  animate-linear bg-size-[200%_auto] "
                  style={{ color: "#ff626d" }}
                >
                  MimikSushi
                </span>
              </motion.h1>

              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="font-['Noto_Serif_JP'] text-4xl md:text-5xl lg:text-6xl font-bold text-[#1a1a1a]"
              >
                Authentic Experience
              </motion.h2>
            </div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="text-lg md:text-xl text-[#4a5568] leading-relaxed max-w-xl"
            >
              Japanese cuisine with a Modern take in {locationName}
            </motion.p>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="flex flex-wrap flex-col md:flex-row gap-3"
            >
              <motion.a
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                href={actions.giftCardUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative text-white px-6 py-4 rounded-full font-medium text-lg transition-all duration-300"
                style={{ backgroundColor: "#ff626d" }}
              >
                <span className="relative flex items-center gap-2 justify-center">
                  Gift Cards
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                href={actions.orderUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-white/80 backdrop-blur-sm border-2 border-[#1a1a1a] text-[#1a1a1a] px-6 py-4 rounded-full font-medium text-lg hover:bg-[#1a1a1a] hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <span className="flex items-center gap-2 justify-center">
                  Order Online
                  <Plus className="w-5 h-5 group-hover:rotate-90 transition-transform duration-300" />
                </span>
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                href={actions.reservationUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative text-white px-6 py-4 rounded-full font-medium text-lg transition-all duration-300"
                style={{ backgroundColor: "#ff626d" }}
              >
                <span className="relative flex items-center gap-2 justify-center">
                  Reservation
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </motion.a>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.1 }}
              className="grid grid-cols-3 gap-6 pt-8 border-t border-[#1a1a1a]/10"
            >
              <div className="text-center lg:text-left">
                <div className="font-['Noto_Serif_JP'] text-3xl md:text-4xl font-bold text-[#c41e3a]">
                  10+
                </div>
                <div className="text-sm text-[#4a5568] mt-1">
                  Years Experience
                </div>
              </div>
              <div className="text-center lg:text-left">
                <div className="font-['Noto_Serif_JP'] text-3xl md:text-4xl font-bold text-[#d4af37]">
                  2k+
                </div>
                <div className="text-sm text-[#4a5568] mt-1">Happy Guests</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="font-['Noto_Serif_JP'] text-3xl md:text-4xl font-bold text-[#2d5016]">
                  3
                </div>
                <div className="text-sm text-[#4a5568] mt-1">Locations</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content - Floating Sushi Images */}
          <motion.div
            style={{ y: y2 }}
            className="relative hidden lg:block h-150"
          >
            {/* Main Image Container */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="relative w-full h-full"
            >
              {/* Floating Card 1 */}
              <motion.div
                animate={{
                  y: [0, -20, 0],
                  rotate: [0, 2, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute top-0 right-0 w-72 h-96 bg-white rounded-2xl shadow-2xl overflow-hidden border border-[#d4af37]/20"
              >
                <div className="w-full h-full bg-linear-to-br from-[#c41e3a]/20 to-[#d4af37]/20 flex items-center justify-center">
                  <Image
                    src="/images/2.png"
                    alt="Sushi Dish"
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-white/95 backdrop-blur-sm p-4 border-t border-[#d4af37]/20">
                  <h3 className="font-['Noto_Serif_JP'] text-xl font-bold text-[#1a1a1a]">
                    Sushi Platter
                  </h3>
                  <p className="text-sm text-[#4a5568]">
                    Traditional hand-pressed
                  </p>
                </div>
              </motion.div>

              {/* Floating Card 2 */}
              <motion.div
                animate={{
                  y: [0, 20, 0],
                  rotate: [0, -2, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5,
                }}
                className="absolute top-32 left-0 w-64 h-80 bg-white rounded-2xl shadow-2xl overflow-hidden border border-[#c41e3a]/20"
              >
                <div className="w-full h-full bg-linear-to-br from-[#d4af37]/20 to-[#2d5016]/20 flex items-center justify-center">
                  <Image
                    src="/images/12.png"
                    alt="Sushi Dish"
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-white/95 backdrop-blur-sm p-4 border-t border-[#c41e3a]/20">
                  <h3 className="font-['Noto_Serif_JP'] text-xl font-bold text-[#1a1a1a]">
                    Sushi Platter
                  </h3>
                  <p className="text-sm text-[#4a5568]">
                    Chef&apos;s selection
                  </p>
                </div>
              </motion.div>

              {/* Floating Card 3 */}
              <motion.div
                animate={{
                  y: [0, -15, 0],
                  rotate: [0, 3, 0],
                }}
                transition={{
                  duration: 7,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1,
                }}
                className="absolute bottom-0 right-16 w-56 h-72 bg-white rounded-2xl shadow-2xl overflow-hidden border border-[#2d5016]/20"
              >
                <div className="w-full h-full bg-linear-to-br from-[#2d5016]/20 to-[#c41e3a]/20 flex items-center justify-center">
                  <Image
                    src="/images/13.png"
                    alt="Sushi Dish"
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-white/95 backdrop-blur-sm p-4 border-t border-[#2d5016]/20">
                  <h3 className="font-['Noto_Serif_JP'] text-lg font-bold text-[#1a1a1a]">
                    Sushi Combo
                  </h3>
                  <p className="text-sm text-[#4a5568]">Curated pairings</p>
                </div>
              </motion.div>

              {/* Decorative Elements */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -top-10 -right-10 w-32 h-32 border-2 border-[#d4af37]/30 rounded-full"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                className="absolute -bottom-10 -left-10 w-40 h-40 border-2 border-[#c41e3a]/30 rounded-full"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Bottom linear overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-linear-to-t from-[#e8e4d8] to-transparent pointer-events-none" />
    </div>
  );
}
