"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

interface AboutContentProps {
  id: number;
  imageSrc?: string; // <-- new field
  title: string;
  description?: string;
  descriptionPoints?: string[];
  color: string;
  bgGradient: string;
}

const aboutContent: AboutContentProps[] = [
  {
    id: 1,
    imageSrc: "/images/mimik.png",
    title: "Inclusive Indulgence",
    description:
      "Sushi and ramen shouldn’t be exclusive. Our curated menu breaks boundaries, offering bold flavors, artisanal ingredients, and inventive pairings that speak to every palate. Whether you’re a sushi purist or a curious first-timer, we invite you to explore a world where quality meets creativity.",
    color: "#c41e3a",
    bgGradient: "from-[#c41e3a]/20 via-[#d4af37]/10 to-[#c41e3a]/5",
  },
  {
    id: 2,
    imageSrc: "/images/9.png",
    title: "Beyond the Plate",
    description:
      "Dining here isn’t just a meal—it’s an immersive experience. From the moment you step in, our team of culinary artists (think master chefs, flavor alchemists, and hospitality pros) crafts moments designed to dazzle. Each dish is a harmony of precision and passion, plated to perfection and served with genuine warmth.",
    color: "#d4af37",
    bgGradient: "from-[#d4af37]/20 via-[#2d5016]/10 to-[#d4af37]/5",
  },
  {
    id: 3,
    imageSrc: "/logo/MJMJ.png",
    title: "Why Us?",
    descriptionPoints: [
      "Innovation Unleashed — Seasonal ingredients, unexpected textures, and visually stunning creations",
      "Heart & Craft⁠ — Every roll, slice, and garnish is a labor of love.",
      "Vibes that Welcome⁠ — A space where laughter flows as freely as our signature miso soup.",
    ],
    color: "#2d5016",
    bgGradient: "from-[#2d5016]/20 via-[#c41e3a]/10 to-[#2d5016]/5",
  },
];

export default function AboutSection() {
  const headerRef = useRef<HTMLDivElement>(null);

  return (
    <div className="relative bg-linear-to-b from-[#e8e4d8] via-[#f8f6f0] to-[#e8e4d8] py-10 border-t border-b border-[#d4af37]/30 overflow-hidden">
      {/* Enhanced Section Header */}
      <div ref={headerRef} className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-12 pb-20">
          <div className="text-center space-y-6 relative">
            {/* Background decorative elements */}
            <div className="absolute inset-0 -z-10">
              <motion.div
                animate={{ rotate: 360, scale: [1, 1.1, 1] }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute top-0 left-1/4 w-64 h-64 bg-linear-to-br from-[#c41e3a]/5 to-[#d4af37]/5 rounded-full blur-3xl"
              />
              <motion.div
                animate={{ rotate: -360, scale: [1, 1.2, 1] }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                className="absolute top-10 right-1/4 w-80 h-80 bg-linear-to-br from-[#d4af37]/5 to-[#2d5016]/5 rounded-full blur-3xl"
              />
            </div>

            {/* Small badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 bg-white/90 backdrop-blur-sm px-5 py-2.5 rounded-full border border-[#d4af37]/30 shadow-lg"
            >
              <span className="w-2 h-2 bg-[#c41e3a] rounded-full animate-pulse" />
              <span className="text-sm font-medium text-[#1a1a1a] tracking-wide uppercase">
                Our Story
              </span>
            </motion.div>

            {/* Main heading */}
            <div className="space-y-3">
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="font-['Noto_Serif_JP'] text-6xl md:text-7xl lg:text-8xl font-bold leading-none"
              >
                <span className="bg-linear-to-r from-[#1a1a1a] via-[#c41e3a] to-[#1a1a1a] bg-clip-text text-transparent">
                  About Us
                </span>
              </motion.h2>

              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
                className="h-1 w-32 mx-auto bg-linear-to-r from-transparent via-[#d4af37] to-transparent"
              />
            </div>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              viewport={{ once: true }}
              className="text-xl md:text-2xl text-[#4a5568] max-w-7xl mx-auto leading-relaxed"
            >
              Welcome to a fresh era of sushi craftsmanship—where tradition
              meets innovation and every bite tells a story. We&apos;re more
              than a restaurant; we&apos;re a culinary playground designed for
              adventurers, connoisseurs, and those simply craving something
              extraordinary.
            </motion.p>
          </div>
        </div>
      </div>

      {/* Content Sections - Regular Scrolling */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 space-y-32 pb-20">
        {aboutContent.map((item, index) => {
          const isEven = index % 2 === 0;

          return (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true, margin: "-100px" }}
              className={`grid lg:grid-cols-2 gap-12 lg:gap-16 items-center ${
                isEven ? "" : "lg:grid-flow-dense"
              }`}
            >
              {/* Image Card */}
              <motion.div
                initial={{ opacity: 0, x: isEven ? -60 : 60 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true, margin: "-100px" }}
                className={`relative ${isEven ? "" : "lg:col-start-2"}`}
              >
                <div className="relative w-full max-w-lg mx-auto">
                  {/* Animated decorative background */}
                  <motion.div
                    animate={{
                      rotate: [0, 10, 0],
                      scale: [1, 1.05, 1],
                    }}
                    transition={{
                      duration: 8,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className={`absolute inset-0 bg-linear-to-br ${item.bgGradient} rounded-3xl blur-3xl transform`}
                  />

                  {/* Main card */}
                  <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden border border-[#d4af37]/20 aspect-4/5">
                    {/* Gradient background */}
                    <div
                      className={`w-full h-full bg-linear-to-br ${item.bgGradient} relative overflow-hidden`}
                    >
                      {/* Animated shine effect */}
                      <motion.div
                        animate={{ x: ["-100%", "200%"] }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          repeatDelay: 2,
                          ease: "easeInOut",
                        }}
                        className="absolute inset-0 bg-linear-to-r from-transparent via-white/20 to-transparent skew-x-12"
                      />

                      {item.imageSrc && (
                        <Image
                          src={item.imageSrc}
                          alt={item.title}
                          fill
                          className="object-contain center-pointer"
                        />
                      )}
                    </div>

                    {/* Bottom label */}
                    <div className="absolute bottom-0 left-0 right-0 bg-white/95 backdrop-blur-sm p-6 border-t border-[#d4af37]/20">
                      <div className="flex items-center justify-between">
                        <span className="font-['Noto_Serif_JP'] text-2xl font-bold text-[#1a1a1a]">
                          {item.title}
                        </span>
                        <span className="text-sm font-medium px-3 py-1 rounded-full bg-linear-to-r from-[#c41e3a] to-[#a01729] text-white">
                          0{item.id}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Floating decorative elements */}
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{
                      duration: 20,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    className="absolute -top-8 -right-8 w-28 h-28 border-2 border-[#d4af37]/40 rounded-full"
                  />
                  <motion.div
                    animate={{ rotate: -360 }}
                    transition={{
                      duration: 15,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    className="absolute -bottom-6 -left-6 w-20 h-20 border-2 border-[#c41e3a]/30 rounded-full"
                  />
                </div>
              </motion.div>

              {/* Text Content */}
              <motion.div
                initial={{ opacity: 0, x: isEven ? 60 : -60 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true, margin: "-100px" }}
                className={`space-y-8 ${isEven ? "" : "lg:col-start-1 lg:row-start-1"}`}
              >
                {/* Number indicator with animation */}
                <div className="flex items-center gap-4">
                  <motion.div
                    whileInView={{
                      boxShadow: [
                        `0 0 20px ${item.color}30`,
                        `0 0 40px ${item.color}50`,
                        `0 0 20px ${item.color}30`,
                      ],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    viewport={{ once: false }}
                    className="w-20 h-20 rounded-full bg-linear-to-br from-[#c41e3a] to-[#a01729] flex items-center justify-center shadow-xl relative overflow-hidden"
                  >
                    {/* Shine effect */}
                    <motion.div
                      animate={{
                        x: ["-100%", "200%"],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        repeatDelay: 3,
                      }}
                      className="absolute inset-0 bg-linear-to-r from-transparent via-white/30 to-transparent skew-x-12"
                    />
                    <span className="font-['Noto_Serif_JP'] text-3xl font-bold text-white relative z-10">
                      0{item.id}
                    </span>
                  </motion.div>
                  <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    viewport={{ once: true }}
                    className="h-px flex-1 bg-linear-to-r from-[#d4af37]/50 to-transparent origin-left"
                  />
                </div>

                {/* Title with linear */}
                <h3 className="font-['Noto_Serif_JP'] text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                  <span className="bg-linear-to-r from-[#1a1a1a] to-[#4a5568] bg-clip-text text-transparent">
                    {item.title}
                  </span>
                </h3>

                {/* Description */}
                <p className="text-lg md:text-xl text-[#4a5568] leading-relaxed">
                  {item.description}
                </p>
                <ul className="list-disc list-outside pl-5 space-y-2 pt-2 text-lg marker:text-[#c41e3a]">
                  {item.descriptionPoints?.map((point, i) => (
                    <li key={i} className="text-[#1a1a1a]">
                      <span className="block text-lg md:text-xl text-[#4a5568] leading-relaxed">
                        {point}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* Decorative elements */}
                <div className="flex items-center gap-3 pt-4">
                  <motion.div
                    animate={{
                      scale: [1, 1.3, 1],
                      opacity: [0.5, 1, 0.5],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="w-2.5 h-2.5 bg-[#c41e3a] rounded-full"
                  />
                  <motion.div
                    animate={{
                      scale: [1, 1.3, 1],
                      opacity: [0.5, 1, 0.5],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 0.3,
                    }}
                    className="w-2.5 h-2.5 bg-[#d4af37] rounded-full"
                  />
                  <motion.div
                    animate={{
                      scale: [1, 1.3, 1],
                      opacity: [0.5, 1, 0.5],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 0.6,
                    }}
                    className="w-2.5 h-2.5 bg-[#2d5016] rounded-full"
                  />
                  <div className="h-px flex-1 bg-linear-to-r from-[#d4af37]/30 to-transparent" />
                </div>
              </motion.div>
            </motion.div>
          );
        })}
      </div>

      {/* Bottom linear overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-linear-to-t from-[#e8e4d8] to-transparent pointer-events-none" />
    </div>
  );
}
