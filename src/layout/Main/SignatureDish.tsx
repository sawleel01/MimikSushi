"use client";

import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ChevronRight, ChevronLeft } from "lucide-react";
import { Variants } from "framer-motion";
import Image from "next/image";

interface Dish {
  id: number;
  name: string;
  description: string;
  image: string;
  category?: string;
}

const dishes: Dish[] = [
  {
    id: 1,
    name: "Chef's Selection 9 Pieces",
    description: "A selection of nigiri sushi",
    image: "/images/1.png",
    category: "sushi",
  },
  {
    id: 2,
    name: "Signature Sashimi Platter",
    description: "Premium sashimi selection",
    image: "/images/1.png",

    category: "sashimi",
  },
  {
    id: 3,
    name: "Dragon Roll",
    description: "Eel, avocado, cucumber",
    image: "/images/1.png",

    category: "rolls",
  },
  {
    id: 4,
    name: "Tempura Selection",
    description: "Crispy tempura with yuzu mayo",
    image: "/images/1.png",

    category: "hot dishes",
  },
  {
    id: 5,
    name: "Wagyu Beef Tataki",
    description: "Seared wagyu with ponzu",
    image: "/images/1.png",

    category: "signature",
  },
];

export default function SignatureDishes() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.2 });

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % Math.max(1, dishes.length - 3));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) =>
      prev === 0 ? Math.max(0, dishes.length - 4) : prev - 1,
    );
  };

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  return (
    <section
      ref={containerRef}
      className="relative py-20 md:py-32 bg-white overflow-hidden max-w-7xl mx-auto"
    >
      {/* Background Decorative Elements */}
      <div className="absolute top-20 right-10 w-96 h-96 bg-[#ff626d]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-80 h-80 bg-[#d4af37]/5 rounded-full blur-3xl" />

      <div className="max-w-400 mx-auto px-6 lg:px-12">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
            {/* Title */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-2 bg-white/90 backdrop-blur-sm px-5 py-2.5 rounded-full border border-[#d4af37]/30 shadow-lg mb-4"
              >
                <span className="w-2 h-2 bg-[#c41e3a] rounded-full animate-pulse" />
                <span className="text-sm font-medium text-[#1a1a1a] tracking-wide uppercase">
                  Our Speciality
                </span>
              </motion.div>
              <motion.h2
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold text-[#1a1a1a] tracking-tight text-center"
                style={{ color: "#ff626d" }}
              >
                Mimik signatures
              </motion.h2>
            </div>
          </div>
        </motion.div>

        {/* Dishes Carousel */}
        <div className="relative">
          {/* Navigation Buttons */}
          <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 z-20 pointer-events-none">
            <div className="max-w-425 mx-auto px-4 flex justify-between">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={prevSlide}
                disabled={currentSlide === 0}
                className="pointer-events-auto w-14 h-14 rounded-full bg-white shadow-xl border border-[#1a1a1a]/10 flex items-center justify-center text-[#1a1a1a] hover:bg-[#ff626d] hover:text-white hover:border-[#ff626d] transition-all duration-300 disabled:opacity-30 disabled:hover:bg-white disabled:hover:text-[#1a1a1a]"
              >
                <ChevronLeft className="w-6 h-6" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={nextSlide}
                disabled={currentSlide >= dishes.length - 4}
                className="pointer-events-auto w-14 h-14 rounded-full bg-white shadow-xl border border-[#1a1a1a]/10 flex items-center justify-center text-[#1a1a1a] hover:bg-[#ff626d] hover:text-white hover:border-[#ff626d] transition-all duration-300 disabled:opacity-30 disabled:hover:bg-white disabled:hover:text-[#1a1a1a]"
              >
                <ChevronRight className="w-6 h-6" />
              </motion.button>
            </div>
          </div>

          {/* Dishes Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="relative overflow-hidden"
          >
            <motion.div
              animate={{
                x: `calc(-${currentSlide * 25}% - ${currentSlide * 1.5}rem)`,
              }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 30,
              }}
              className="flex gap-6"
            >
              {dishes.map((dish, index) => (
                <motion.div
                  key={dish.id}
                  variants={itemVariants}
                  className="shrink-0 w-[calc(25%-1.125rem)] min-w-70 group"
                >
                  {/* Image Container */}
                  <div className="relative aspect-4/3 mb-6 rounded-sm overflow-hidden bg-[#f8f6f0]">
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.6, ease: "easeOut" }}
                      className="w-64 h-64"
                    >
                      <Image src={dish.image} alt={dish.name} fill />
                      {/* Placeholder - Replace with actual images */}
                      <div className="w-full h-full bg-linear-to-br from-[#ff626d]/20 via-[#d4af37]/10 to-[#ff626d]/5 flex items-center justify-center">
                        <span className="text-[#1a1a1a]/30 text-sm font-medium">
                          {dish.name}
                        </span>
                      </div>
                      {/* Overlay on Hover */}
                      <motion.div
                        initial={{ opacity: 0 }}
                        whileHover={{ opacity: 1 }}
                        transition={{ duration: 0.3 }}
                        className="absolute inset-0 bg-linear-to-t from-[#ff626d]/90 via-[#ff626d]/40 to-transparent flex items-end justify-center pb-8"
                      >
                        <motion.div
                          initial={{ y: 20, opacity: 0 }}
                          whileHover={{ y: 0, opacity: 1 }}
                          transition={{ duration: 0.3, delay: 0.1 }}
                          className="text-white text-sm font-medium tracking-wide uppercase"
                        >
                          View Details
                        </motion.div>
                      </motion.div>
                    </motion.div>

                    {/* Decorative Corner Element */}
                    <div className="absolute top-4 right-4 w-12 h-12 border-t-2 border-r-2 border-white/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>

                  {/* Content */}
                  <div className="space-y-2">
                    <h3 className="font-serif text-xl font-semibold text-[#1a1a1a] group-hover:text-[#ff626d] transition-colors duration-300">
                      {dish.name}
                    </h3>
                    <p className="text-[#4a5568] text-sm leading-relaxed">
                      {dish.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Progress Indicators */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex justify-center gap-2 mt-12"
          >
            {Array.from({ length: Math.max(1, dishes.length - 3) }).map(
              (_, index) => (
                <button
                  aria-label="slide"
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className="group relative"
                >
                  <div
                    className={`h-1 rounded-full transition-all duration-300 ${
                      currentSlide === index
                        ? "w-12 bg-[#ff626d]"
                        : "w-8 bg-[#1a1a1a]/20 group-hover:bg-[#1a1a1a]/40"
                    }`}
                  />
                </button>
              ),
            )}
          </motion.div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-16"
        >
          <motion.button
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-3 px-10 py-4 bg-[#ff626d] text-white rounded-full font-medium tracking-wide transition-all duration-300 hover:shadow-lg hover:shadow-[#ff626d]/30 group relative overflow-hidden"
          >
            <span className="relative z-10">View Full Menu</span>
            <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300 relative z-10" />
            <motion.div
              className="absolute inset-0 bg-white/20"
              initial={{ scale: 0, opacity: 0 }}
              whileHover={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.4 }}
            />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
