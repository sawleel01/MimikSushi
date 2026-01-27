"use client";

import { motion } from "framer-motion";
import { Variants } from "framer-motion";

const footerLinks = {
  menu: [
    { name: "Sushi", href: "#" },
    { name: "Drinks", href: "#" },
    { name: "Desserts", href: "#" },
  ],
  locations: [
    { name: "A", href: "#" },
    { name: "B", href: "#" },
  ],
  company: [
    { name: "About Us", href: "#" },
    { name: "Our Chefs", href: "#" },
    { name: "Menu", href: "#" },
    { name: "Contact", href: "#" },
  ],
  legal: [
    { name: "Privacy Policy", href: "#" },
    { name: "Terms of Service", href: "#" },
  ],
};

const socialLinks = [
  { name: "Instagram", icon: "I", href: "#" },
  { name: "Facebook", icon: "F", href: "#" },
  { name: "Twitter", icon: "X", href: "#" },
  { name: "TikTok", icon: "T", href: "#" },
];

export default function Footer() {
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

  return (
    <footer className="relative bg-linear-to-br from-[#1a1a1a] to-[#2d2d2d] text-[#f8f6f0] overflow-hidden">
      {/* Decorative Top Border */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-linear-to-r from-[#c41e3a] via-[#d4af37] to-[#c41e3a]" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 pt-16 pb-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-9 gap-12 lg:gap-8"
        >
          {/* Brand Section */}
          <motion.div variants={itemVariants} className="lg:col-span-3">
            <div className="space-y-6">
              <div>
                <h2 className="font-['Noto_Serif_JP'] text-3xl md:text-4xl font-bold text-[#f8f6f0] tracking-wide mb-2">
                  Sushibar
                </h2>
                <p className="text-[#d4af37] text-sm font-medium tracking-wider">
                  Authentic Japanese Sushi Bar
                </p>
              </div>

              <p className="text-[#a8a8a8] leading-relaxed text-sm">
                Experience the art of authentic Japanese cuisine. Our master
                chefs bring centuries of tradition to every carefully crafted
                piece.
              </p>

              {/* Social Links */}
              <div className="flex gap-3">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-12 h-12 bg-white/5 hover:bg-white/10 rounded-full flex items-center justify-center text-xl transition-colors duration-300 border border-white/10 hover:border-[#d4af37]/50 group relative overflow-hidden"
                    aria-label={social.name}
                  >
                    <span className="absolute inset-0 bg-linear-to-br from-[#c41e3a]/20 to-[#d4af37]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <span className="relative">{social.icon}</span>
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Menu Links */}
          <motion.div variants={itemVariants} className="lg:col-span-2">
            <h3 className="font-['Noto_Serif_JP'] text-lg font-semibold mb-4 text-[#d4af37]">
              Menu
            </h3>
            <ul className="space-y-3">
              {footerLinks.menu.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-[#a8a8a8] hover:text-[#f8f6f0] transition-colors duration-300 text-sm group inline-flex items-center"
                  >
                    <span className="w-0 h-px bg-[#d4af37] group-hover:w-4 transition-all duration-300 mr-0 group-hover:mr-2" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Locations */}
          <motion.div variants={itemVariants} className="lg:col-span-2">
            <h3 className="font-['Noto_Serif_JP'] text-lg font-semibold mb-4 text-[#d4af37]">
              Locations
            </h3>
            <ul className="space-y-3">
              {footerLinks.locations.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-[#a8a8a8] hover:text-[#f8f6f0] transition-colors duration-300 text-sm group inline-flex items-center"
                  >
                    <span className="w-0 h-px bg-[#d4af37] group-hover:w-4 transition-all duration-300 mr-0 group-hover:mr-2" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Company Links */}
          <motion.div variants={itemVariants} className="lg:col-span-2">
            <h3 className="font-['Noto_Serif_JP'] text-lg font-semibold mb-4 text-[#d4af37]">
              Company
            </h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-[#a8a8a8] hover:text-[#f8f6f0] transition-colors duration-300 text-sm group inline-flex items-center"
                  >
                    <span className="w-0 h-px bg-[#d4af37] group-hover:w-4 transition-all duration-300 mr-0 group-hover:mr-2" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="h-px bg-linear-to-r from-transparent via-white/20 to-transparent my-12"
        />

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="flex flex-col md:flex-row justify-between items-center gap-6"
        >
          <div className="flex flex-wrap justify-center md:justify-start gap-6 text-xs text-[#a8a8a8]">
            {footerLinks.legal.map((link, index) => (
              <span key={link.name} className="flex items-center">
                <a
                  href={link.href}
                  className="hover:text-[#d4af37] transition-colors duration-300"
                >
                  {link.name}
                </a>
                {index < footerLinks.legal.length - 1 && (
                  <span className="ml-6 text-white/20">|</span>
                )}
              </span>
            ))}
          </div>

          <div className="text-xs text-[#a8a8a8] text-center md:text-right">
            <p>© {new Date().getFullYear()} Sushi Bar. All rights reserved.</p>
            <p className="mt-1 text-[#d4af37]/60"></p>
          </div>
        </motion.div>
      </div>

      {/* Decorative Bottom Element */}
      <div className="absolute bottom-0 left-0 right-0 h-2 bg-linear-to-r from-[#c41e3a] via-[#d4af37] to-[#c41e3a] opacity-50" />
    </footer>
  );
}
