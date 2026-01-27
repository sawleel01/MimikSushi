"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const branches = [
  { name: "Atcon", location: "Atcon" },
  { name: "Doncaster", location: "Doncaster" },
];

export default function Navbar() {
  const [selectedBranch, setSelectedBranch] = useState("");
  const [showBranchModal, setShowBranchModal] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [hasVisited, setHasVisited] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const links = [
    { label: "Menu", href: "/menu" },
    { label: "Contact", href: "/contact" },
    { label: "Reservation", href: "/reservation" },
  ];

  useEffect(() => {
    const visited = sessionStorage.getItem("hasVisited");
    const savedBranch = sessionStorage.getItem("selectedBranch");

    if (savedBranch) {
      setSelectedBranch(savedBranch);
    }

    if (!visited) {
      setShowBranchModal(true);
      sessionStorage.setItem("hasVisited", "true");
    }

    setHasVisited(true);

    // Handle scroll
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleBranchSelect = (branchName: string) => {
    setSelectedBranch(branchName);
    sessionStorage.setItem("selectedBranch", branchName);
    setShowBranchModal(false);
  };

  return (
    <>
      {/* Branch Selector Modal */}
      <AnimatePresence>
        {showBranchModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-100 flex items-center justify-center bg-black/85 backdrop-blur-sm px-4"
            onClick={(e) =>
              e.target === e.currentTarget && setShowBranchModal(false)
            }
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 30 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{
                type: "spring",
                damping: 20,
                stiffness: 300,
                delay: 0.1,
              }}
              className="relative w-full max-w-lg bg-[#f8f6f0] rounded-sm p-8 md:p-12 shadow-2xl"
            >
              <div className="absolute top-0 left-0 right-0 h-1 bg-linear-to-r from-[#c41e3a] to-[#d4af37]" />

              <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#1a1a1a] mb-2 tracking-wide">
                Select Your Location
              </h2>
              <p className="text-[#4a5568] text-lg mb-8">
                Choose your preferred Mimik sushi bar location
              </p>

              <div className="space-y-3">
                {branches.map((branch, index) => (
                  <motion.button
                    key={branch.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    onClick={() => handleBranchSelect(branch.name)}
                    className="w-full bg-white border-2 border-transparent hover:border-[#d4af37] rounded-sm p-5 text-left transition-all duration-300 hover:translate-x-2 hover:shadow-lg group relative overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-linear-to-r from-transparent via-[#d4af37]/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-500" />
                    <h3 className="font-serif text-xl font-semibold text-[#1a1a1a] mb-1">
                      {branch.name}
                    </h3>
                    <p className="text-[#4a5568] text-sm">{branch.location}</p>
                  </motion.button>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Navbar */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{
          type: "spring",
          damping: 20,
          stiffness: 100,
          delay: hasVisited ? 0 : 1,
        }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-[#f8f6f0]/95 backdrop-blur-xl border-b border-black/10 shadow-sm"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div
            className={`flex items-center transition-all duration-500 ${
              isScrolled
                ? "justify-between h-20"
                : "justify-center h-24 md:h-32"
            }`}
          >
            {/* Logo - Centered when not scrolled, left when scrolled */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: hasVisited ? 0.2 : 1.3 }}
              className={`flex items-center gap-6 transition-all duration-500 ${
                isScrolled ? "" : "absolute left-1/2 -translate-x-1/2"
              }`}
            >
              <div
                className={`font-serif font-bold text-[#1a1a1a] tracking-wide cursor-pointer relative group transition-all duration-500  ${
                  isScrolled ? "text-2xl md:text-3xl" : "text-4xl md:text-5xl"
                }`}
              >
                <Link href="/">
                  <span
                    className={`transition-colors duration-300 ${
                      isScrolled
                        ? "text-[#1a1a1a]"
                        : "text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]"
                    }`}
                  >
                    MimikSushi
                    <br />
                    <span className="text-sm flex justify-center">
                      {selectedBranch}
                    </span>
                  </span>
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-linear-to-r from-[#c41e3a] to-[#d4af37] group-hover:w-full transition-all duration-500" />
                </Link>
              </div>

              {isScrolled && (
                <motion.div
                  initial={{ opacity: 0, width: 0 }}
                  animate={{ opacity: 1, width: "2px" }}
                  className="hidden md:block h-8 bg-linear-to-b from-transparent via-[#d4af37] to-transparent"
                />
              )}

              {isScrolled && (
                <motion.button
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  onClick={() => setShowBranchModal(true)}
                  className="hidden md:flex items-center gap-3 bg-white border-2 border-transparent hover:border-[#d4af37] rounded-full px-4 py-2.5 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md relative overflow-hidden group"
                >
                  <div className="absolute inset-0 bg-linear-to-br from-[#c41e3a]/10 to-[#d4af37]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <span className="text-xl">📍</span>
                  <div className="flex flex-col items-start">
                    <span className="text-[0.65rem] text-[#4a5568] uppercase tracking-wider font-light">
                      Location
                    </span>
                    <span className="font-serif text-sm font-semibold text-[#1a1a1a]">
                      {selectedBranch}
                    </span>
                  </div>
                </motion.button>
              )}
            </motion.div>

            {/* Desktop Navigation - Only show when scrolled */}
            <AnimatePresence>
              {isScrolled && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.3 }}
                  className="hidden lg:flex items-center gap-10"
                >
                  {links.map((item, index) => (
                    <motion.a
                      key={item.label}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.05 }}
                      href={item.href}
                      className="text-[#1a1a1a] hover:text-[#c41e3a] text-base tracking-wide transition-colors duration-300 relative py-2 group"
                    >
                      {item.label}
                      <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-[#c41e3a] group-hover:w-full transition-all duration-400" />
                    </motion.a>
                  ))}

                  <motion.a
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.15 }}
                    href="#"
                    className="bg-linear-to-br from-[#c41e3a] to-[#a01729] text-white px-7 py-3 rounded-full font-medium tracking-wider transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-[#c41e3a]/30 relative overflow-hidden group"
                  >
                    <span className="absolute inset-0 bg-white/20 rounded-full scale-0 group-hover:scale-100 transition-transform duration-500" />
                    <span className="relative">Login</span>
                  </motion.a>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Mobile Menu Button - Only show when scrolled */}
            <AnimatePresence>
              {isScrolled && (
                <motion.button
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  className="lg:hidden flex flex-col gap-1.5 p-2"
                >
                  <span
                    className={`w-7 h-0.5 bg-[#1a1a1a] transition-all duration-300 ${
                      isMobileMenuOpen ? "rotate-45 translate-y-2" : ""
                    }`}
                  />
                  <span
                    className={`w-7 h-0.5 bg-[#1a1a1a] transition-all duration-300 ${
                      isMobileMenuOpen ? "opacity-0" : ""
                    }`}
                  />
                  <span
                    className={`w-7 h-0.5 bg-[#1a1a1a] transition-all duration-300 ${
                      isMobileMenuOpen ? "-rotate-45 -translate-y-2" : ""
                    }`}
                  />
                </motion.button>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Mobile Menu - Only show when scrolled */}
        <AnimatePresence>
          {isMobileMenuOpen && isScrolled && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden border-t border-black/10 bg-[#f8f6f0] overflow-hidden"
            >
              <div className="px-6 py-6 space-y-4">
                <button
                  onClick={() => setShowBranchModal(true)}
                  className="w-full flex items-center gap-3 bg-white border-2 border-transparent hover:border-[#d4af37] rounded-full px-4 py-3 transition-all duration-300"
                >
                  <span className="text-xl">📍</span>
                  <div className="flex flex-col items-start">
                    <span className="text-[0.65rem] text-[#4a5568] uppercase tracking-wider font-light">
                      Location
                    </span>
                    <span className="font-serif text-sm font-semibold text-[#1a1a1a]">
                      {selectedBranch}
                    </span>
                  </div>
                </button>

                {links.map((item, index) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <Link
                      href={item.href}
                      className="block text-[#1a1a1a] hover:text-[#c41e3a] text-base py-3 border-b border-black/10 transition-colors duration-300"
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                ))}

                <motion.a
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                  href="#"
                  className="block text-center bg-linear-to-br from-[#c41e3a] to-[#a01729] text-white px-7 py-3 rounded-full font-medium tracking-wider transition-all duration-300 hover:shadow-lg hover:shadow-[#c41e3a]/30 mt-4"
                >
                  Login
                </motion.a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
}
