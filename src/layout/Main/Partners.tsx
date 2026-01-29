"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const partners = [
  {
    name: "Uber Eats",
    logo: "/images/partners/ubereats.png",
  },
  {
    name: "Just Eat",
    logo: "/images/partners/justeat.png",
  },
  {
    name: "Deliveroo",
    logo: "/images/partners/deliveroo.png",
  },
];

export default function SushiPartners() {
  return (
    <section className=" bg-white py-10">
      <div className="max-w-5xl mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-zinc-900 mb-4">
            Available On Your{" "}
            <span style={{ color: "#ff626d" }}>Favorite Platforms</span>
          </h2>
        </motion.div>

        {/* Partners */}
        <div className="grid grid-cols-3 gap-4 sm:gap-6">
          {partners.map((partner, index) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              whileHover={{ y: -4 }}
              className="group"
            >
              <div className="border border-zinc-200 rounded-xl p-4 sm:p-6 text-center hover:shadow-md transition-all">
                {/* Logo */}
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.25 }}
                  className="relative w-32 h-32 sm:w-20 sm:h-20 mx-auto mb-3"
                >
                  <Image
                    src={partner.logo}
                    alt={partner.name}
                    fill
                    sizes="100px"
                    className="object-contain"
                  />
                </motion.div>

                {/* Name */}
                <h3 className="text-sm sm:text-base font-semibold text-zinc-900">
                  {partner.name}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
