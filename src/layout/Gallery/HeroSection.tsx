"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Variants } from "framer-motion";
import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useLocation } from "@/components/LocationContext";

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
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const GALLERY_IMAGES = {
  acton: [
    "/images/acton/1.png",
    "/images/acton/2.png",
    "/images/acton/3.png",
    "/images/acton/4.png",
    "/images/acton/5.png",
    "/images/acton/6.png",
    "/images/acton/7.png",
    "/images/acton/8.png",
    "/images/acton/9.png",
    "/images/acton/10.png",
    "/images/acton/11.png",
    "/images/acton/12.png",
    "/images/acton/13.png",
  ],
  doncaster: [
    "/images/doncaster/1.png",
    "/images/doncaster/2.png",
    "/images/doncaster/3.png",
    "/images/doncaster/4.png",
    "/images/doncaster/5.png",
    "/images/doncaster/6.png",
    "/images/doncaster/7.png",
    "/images/doncaster/8.png",
    "/images/doncaster/9.png",
    "/images/doncaster/10.png",
    "/images/doncaster/11.png",
    "/images/doncaster/12.png",
    "/images/doncaster/13.png",
  ],
  wakefield: [
    "/images/wakefield/1.png",
    "/images/wakefield/2.png",
    "/images/wakefield/3.png",
    "/images/wakefield/4.png",
    "/images/wakefield/5.png",
    "/images/wakefield/6.png",
    "/images/wakefield/7.png",
    "/images/wakefield/8.png",
    "/images/wakefield/9.png",
    "/images/wakefield/10.png",
    "/images/wakefield/11.png",
    "/images/wakefield/12.png",
    "/images/wakefield/13.png",
  ],
};

const PER_PAGE = 6;

export default function GalleryHero() {
  const { location } = useLocation();
  const [page, setPage] = useState(0);
  const [activeImage, setActiveImage] = useState<string | null>(null);

  // Get images for the current location
  const IMAGES = GALLERY_IMAGES[location] || GALLERY_IMAGES.doncaster;

  const start = page * PER_PAGE;
  const currentImages = IMAGES.slice(start, start + PER_PAGE);
  const totalPages = Math.ceil(IMAGES.length / PER_PAGE);

  const handleLocationChange = () => {
    setPage(0);
  };

  // Location display name
  const locationName = location.charAt(0).toUpperCase() + location.slice(1);

  return (
    <section className="relative py-24 lg:py-32 bg-[#f8f6f0] overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#d4af37]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#c41e3a]/10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 bg-white/60 backdrop-blur-sm px-5 py-2.5 rounded-full border border-[#d4af37]/30 shadow-lg mb-6"
          >
            <span className="w-2 h-2 bg-[#c41e3a] rounded-full animate-pulse" />
            <span className="text-sm font-medium text-[#1a1a1a] tracking-wider uppercase">
              {locationName} Gallery
            </span>
          </motion.div>

          <h2 className="font-['Noto_Serif_JP'] text-5xl md:text-6xl lg:text-7xl font-bold text-[#1a1a1a] mb-6">
            Culinary <span style={{ color: "#ff626d" }}>Masterpieces</span>
          </h2>

          <p className="text-lg md:text-xl text-[#4a5568] max-w-2xl mx-auto leading-relaxed">
            Discover the artistry behind every dish at our {locationName}{" "}
            location
          </p>
        </motion.div>

        {/* Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          key={`${location}-${page}`} // Re-animate when location or page changes
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"
        >
          {currentImages.map((img) => (
            <motion.div
              key={img}
              variants={itemVariants}
              whileHover={{ y: -8, scale: 1.02 }}
              onClick={() => setActiveImage(img)}
              className="cursor-pointer overflow-hidden rounded-2xl group relative h-80 bg-white shadow-lg hover:shadow-2xl transition-all duration-500"
            >
              <Image
                src={img}
                alt={`${locationName} gallery image`}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Corner Decorations */}
              <div className="absolute top-3 left-3 w-8 h-8 border-t-2 border-l-2 border-white/40 rounded-tl-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute bottom-3 right-3 w-8 h-8 border-b-2 border-r-2 border-white/40 rounded-br-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Location Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                className="absolute top-3 right-3 bg-black/50 backdrop-blur-sm px-3 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              >
                <span className="text-white text-xs font-medium">
                  {locationName}
                </span>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Pagination */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="flex items-center justify-center gap-4"
        >
          {/* Previous Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Previous"
            disabled={page === 0}
            onClick={() => setPage((p) => p - 1)}
            className={`p-3 rounded-full transition-all duration-300 ${
              page === 0
                ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                : "bg-white text-[#1a1a1a] hover:bg-[#c41e3a] hover:text-white shadow-lg hover:shadow-xl"
            }`}
          >
            <ArrowLeft className="w-6 h-6" />
          </motion.button>

          {/* Page Numbers */}
          <div className="flex items-center gap-2">
            {Array.from({ length: totalPages }).map((_, i) => (
              <motion.button
                key={i}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setPage(i)}
                className={`w-12 h-12 rounded-full font-['Noto_Serif_JP'] font-semibold transition-all duration-300 ${
                  page === i
                    ? "bg-black text-white shadow-lg shadow-[#c41e3a]/30 scale-110"
                    : "bg-white text-[#1a1a1a] hover:bg-[#f8f6f0] shadow-md hover:shadow-lg"
                }`}
              >
                {i + 1}
              </motion.button>
            ))}
          </div>

          {/* Next Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Next"
            disabled={page === totalPages - 1}
            onClick={() => setPage((p) => p + 1)}
            className={`p-3 rounded-full transition-all duration-300 ${
              page === totalPages - 1
                ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                : "bg-white text-[#1a1a1a] hover:bg-[#c41e3a] hover:text-white shadow-lg hover:shadow-xl"
            }`}
          >
            <ArrowRight className="w-6 h-6" />
          </motion.button>
        </motion.div>

        {/* Page Info */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="text-center mt-6"
        >
          <p className="text-sm text-[#4a5568]">
            Showing {start + 1}-{Math.min(start + PER_PAGE, IMAGES.length)} of{" "}
            {IMAGES.length} images from {locationName}
          </p>
        </motion.div>
      </div>

      {/* Popup Modal */}
      <AnimatePresence>
        {activeImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-100 bg-black/95 backdrop-blur-xl flex items-center justify-center p-4"
            onClick={() => setActiveImage(null)}
          >
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              onClick={() => setActiveImage(null)}
              className="absolute top-6 right-6 z-10 bg-white/10 hover:bg-white/20 backdrop-blur-sm p-3 rounded-full transition-all duration-300 hover:rotate-90"
            >
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </motion.button>

            <motion.img
              src={activeImage}
              alt={`${locationName} gallery preview`}
              initial={{ scale: 0.8, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 50 }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="max-w-full max-h-[90vh] rounded-3xl shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />

            {/* Location Badge in Modal */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="absolute top-20 left-1/2 -translate-x-1/2 bg-white/10 backdrop-blur-md px-6 py-2 rounded-full border border-white/20"
            >
              <span className="text-white font-medium">{locationName}</span>
            </motion.div>

            {/* Keyboard Hints */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-4 text-white/60 text-sm"
            >
              <span className="flex items-center gap-2">
                <kbd className="px-2 py-1 bg-white/10 rounded backdrop-blur-sm">
                  ESC
                </kbd>
                or click outside to close
              </span>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
