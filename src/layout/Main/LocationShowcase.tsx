"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useLocation } from "@/components/LocationContext";
import { MapPin, Phone, Clock, ArrowRight } from "lucide-react";

// Location-specific data
const LOCATION_DATA = {
  acton: {
    image: "/images/Doncaster/6.png",
    title: "Mimik Sushi Acton",
    description:
      "Our flagship location in the heart of Acton brings authentic Japanese cuisine with a modern twist. Experience the perfect blend of tradition and innovation in an elegant, contemporary setting.",
    address: "123 High Street, Acton, London W3 6RS",
    phone: "+44 20 1234 5678",
    hours: "Mon-Sun: 12:00 PM - 10:30 PM",
    features: [
      "Private Dining Rooms",
      "Outdoor Seating",
      "Sake Bar",
      "Omakase Experience",
    ],
  },
  doncaster: {
    image: "/images/Doncaster/6.png",
    title: "Mimik Sushi Doncaster",
    description:
      "Located in vibrant Doncaster, our restaurant offers an intimate dining experience with carefully crafted dishes. Each plate tells a story of culinary mastery and attention to detail.",
    address: "456 Market Place, Doncaster DN1 1NW",
    phone: "+44 130 2345 6789",
    hours: "Mon-Sun: 11:30 AM - 10:00 PM",
    features: [
      "Chef's Counter",
      "Wine Pairing",
      "Sushi Making Classes",
      "Family Friendly",
    ],
  },
  wakefield: {
    image: "/images/Doncaster/6.png",
    title: "Mimik Sushi Wakefield",
    description:
      "Our Wakefield branch combines traditional Japanese aesthetics with Yorkshire warmth. Discover a unique fusion of East meets North in every carefully prepared dish.",
    address: "789 Westgate, Wakefield WF1 1BX",
    phone: "+44 192 4567 8901",
    hours: "Mon-Sun: 12:00 PM - 11:00 PM",
  },
};

export default function LocationShowcase() {
  const { location } = useLocation();
  const key = location?.toLowerCase();
  const data = LOCATION_DATA[key as keyof typeof LOCATION_DATA];

  return (
    <section className="relative py-24 lg:py-32 bg-[#f8f6f0] overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-[#d4af37]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-[#c41e3a]/10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
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
              Your Selected Location
            </span>
          </motion.div>

          <h2 className="font-['Noto_Serif_JP'] text-5xl md:text-6xl lg:text-7xl font-bold text-[#1a1a1a] mb-6">
            Discover <span style={{ color: "#ff626d" }}>{data.title}</span>
          </h2>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative group"
          >
            <div className="relative h-[500px] lg:h-[650px] w-[500px] rounded-3xl shadow-2xl">
              <Image
                src={data.image}
                alt={data.title}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />

              {/* Floating Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="absolute top-6 left-6 bg-white/95 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg border border-[#d4af37]/30"
              >
                <div className="flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-[#c41e3a]" />
                  <span className="font-['Noto_Serif_JP'] font-semibold text-[#1a1a1a]">
                    {location.charAt(0).toUpperCase() + location.slice(1)}
                  </span>
                </div>
              </motion.div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-[#d4af37]/20 rounded-full blur-2xl -z-10" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-[#c41e3a]/20 rounded-full blur-2xl -z-10" />
          </motion.div>

          {/* Description Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-8"
          >
            {/* Main Description */}
            <div>
              <p className="text-lg text-[#4a5568] leading-relaxed mb-6">
                {data.description}
              </p>
            </div>

            {/* Contact Information */}
            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="flex items-start gap-4 p-4 bg-white/60 backdrop-blur-sm rounded-2xl border border-[#d4af37]/20 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="p-2 bg-[#c41e3a]/10 rounded-lg">
                  <MapPin className="w-5 h-5 text-[#c41e3a]" />
                </div>
                <div>
                  <h4 className="font-semibold text-[#1a1a1a] mb-1">Address</h4>
                  <p className="text-[#4a5568] text-sm">{data.address}</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="flex items-start gap-4 p-4 bg-white/60 backdrop-blur-sm rounded-2xl border border-[#d4af37]/20 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="p-2 bg-[#c41e3a]/10 rounded-lg">
                  <Phone className="w-5 h-5 text-[#c41e3a]" />
                </div>
                <div>
                  <h4 className="font-semibold text-[#1a1a1a] mb-1">Phone</h4>
                  <a
                    href={`tel:${data.phone}`}
                    className="text-[#4a5568] text-sm hover:text-[#c41e3a] transition-colors"
                  >
                    {data.phone}
                  </a>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="flex items-start gap-4 p-4 bg-white/60 backdrop-blur-sm rounded-2xl border border-[#d4af37]/20 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="p-2 bg-[#c41e3a]/10 rounded-lg">
                  <Clock className="w-5 h-5 text-[#c41e3a]" />
                </div>
                <div>
                  <h4 className="font-semibold text-[#1a1a1a] mb-1">
                    Opening Hours
                  </h4>
                  <p className="text-[#4a5568] text-sm">{data.hours}</p>
                </div>
              </motion.div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 pt-4">
              <motion.a
                href="/gallery"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 px-8 py-4 bg-white border-2 border-[#1a1a1a] rounded-full text-[#1a1a1a] font-medium tracking-wider transition-all duration-300 hover:bg-[#1a1a1a] hover:text-white shadow-lg hover:shadow-xl group"
              >
                <span className="relative">See Gallery</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
