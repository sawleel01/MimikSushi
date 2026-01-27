"use client";

import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";
import { useState } from "react";

const contactInfo = [
  {
    id: 1,
    icon: Phone,
    title: "Phone Number",
    atconInfo: "020 7167 8370",
    doncasterInfo: "020 7167 8370",
    color: "#c41e3a",
    bgGradient: "from-[#c41e3a]/10 to-[#d4af37]/5",
  },
  {
    id: 2,
    icon: Mail,
    title: "Email Address",
    atconInfo: " mimiksushi@gmail.com",
    doncasterInfo: "info@mimikgroupuk.com",
    color: "#d4af37",
    bgGradient: "from-[#d4af37]/10 to-[#2d5016]/5",
  },
  {
    id: 3,
    icon: MapPin,
    title: "Our Location",
    atconInfo: "269 High St, London W3 9BT",
    doncasterInfo: "3 Wood Street, Doncaster DN1 3LH",
    color: "#2d5016",
    bgGradient: "from-[#2d5016]/10 to-[#c41e3a]/5",
  },
  {
    id: 4,
    icon: Clock,
    title: "Opening Hours",
    atconInfo: "Mon-Sun: 12PM - 10PM",
    doncasterInfo:
      "Fri - Sun: 12PM - 10PM | Mon, Wed, Thu: 12PM - 15PM, 05PM - 10PM | Tue: Closed",
    color: "#c41e3a",
    bgGradient: "from-[#c41e3a]/10 to-[#d4af37]/5",
  },
];

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Handle form submission here
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="relative bg-linear-to-b from-[#e8e4d8] via-[#f8f6f0] to-[#e8e4d8] py-20">
      {/* Section Header */}
      <div className="relative overflow-hidden">
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
                Get In Touch
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
                  Contact Us
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
              className="text-xl md:text-2xl text-[#4a5568] max-w-3xl mx-auto leading-relaxed"
            >
              We&apos;d love to hear from you. Reach out for reservations or
              inquiries
            </motion.p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 pb-20">
        {/* Contact Info Grid - 2x2 */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 gap-6 mb-20"
        >
          {contactInfo.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true, margin: "-100px" }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className="group relative"
              >
                {/* Decorative background blur */}
                <motion.div
                  animate={{
                    scale: [1, 1.05, 1],
                    opacity: [0.5, 0.8, 0.5],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: index * 0.5,
                  }}
                  className={`absolute inset-0 bg-linear-to-br ${item.bgGradient} rounded-2xl blur-xl`}
                />

                {/* Main card */}
                <div className="relative bg-white rounded-2xl p-8 border-2 border-[#d4af37]/20 shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden">
                  {/* Shine effect on hover */}
                  <motion.div className="absolute inset-0 bg-linear-to-r from-transparent via-white/10 to-transparent skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />

                  <div className="relative z-10 space-y-4">
                    {/* Icon */}
                    <motion.div
                      whileHover={{ rotate: [0, -10, 10, 0] }}
                      transition={{ duration: 0.5 }}
                      className="w-16 h-16 rounded-full bg-linear-to-br from-[#c41e3a] to-[#a01729] flex items-center justify-center shadow-lg"
                      style={{
                        boxShadow: `0 0 30px ${item.color}40`,
                      }}
                    >
                      <Icon className="w-8 h-8 text-white" />
                    </motion.div>

                    {/* Title */}
                    <h3 className="font-['Noto_Serif_JP'] text-2xl font-bold text-[#1a1a1a]">
                      {item.title}
                    </h3>

                    {/* Info */}
                    <div className="space-y-1">
                      <p className="text-lg font-medium text-[#1a1a1a]">
                        Atcon: {item.atconInfo}
                      </p>
                      <p className="text-lg font-medium text-[#1a1a1a]">
                        Doncaster: {item.doncasterInfo}
                      </p>
                    </div>

                    {/* Decorative line */}
                    <div className="flex items-center gap-2 pt-2">
                      <div className="w-2 h-2 bg-[#c41e3a] rounded-full" />
                      <div className="w-2 h-2 bg-[#d4af37] rounded-full" />
                      <div className="w-2 h-2 bg-[#2d5016] rounded-full" />
                      <div className="h-px flex-1 bg-linear-to-r from-[#d4af37]/30 to-transparent" />
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true, margin: "-100px" }}
          className="relative"
        >
          {/* Decorative background */}
          <motion.div
            animate={{
              scale: [1, 1.02, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute inset-0 bg-linear-to-br from-[#c41e3a]/10 via-[#d4af37]/10 to-[#2d5016]/10 rounded-3xl blur-2xl"
          />

          {/* Form container */}
          <div className="relative bg-white rounded-3xl p-8 md:p-12 border-2 border-[#d4af37]/20 shadow-2xl">
            {/* Form header */}
            <div className="mb-10 text-center">
              <h3 className="font-['Noto_Serif_JP'] text-3xl md:text-4xl font-bold mb-3">
                <span className="bg-linear-to-r from-[#1a1a1a] to-[#4a5568] bg-clip-text text-transparent">
                  Send Us a Message
                </span>
              </h3>
              <p className="text-[#4a5568]">
                Fill out the form below and we&apos;ll get back to you shortly
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name and Email Row */}
              <div className="grid md:grid-cols-2 gap-6">
                {/* Name Input */}
                <div className="space-y-2">
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-[#1a1a1a]"
                  >
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border-2 border-[#d4af37]/20 bg-[#f8f6f0] focus:border-[#c41e3a] focus:bg-white focus:outline-none transition-all duration-300 text-[#1a1a1a] placeholder:text-[#4a5568]/50"
                    placeholder="John Doe"
                  />
                </div>

                {/* Email Input */}
                <div className="space-y-2">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-[#1a1a1a]"
                  >
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border-2 border-[#d4af37]/20 bg-[#f8f6f0] focus:border-[#c41e3a] focus:bg-white focus:outline-none transition-all duration-300 text-[#1a1a1a] placeholder:text-[#4a5568]/50"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              {/* Subject Input */}
              <div className="space-y-2">
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-[#1a1a1a]"
                >
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl border-2 border-[#d4af37]/20 bg-[#f8f6f0] focus:border-[#c41e3a] focus:bg-white focus:outline-none transition-all duration-300 text-[#1a1a1a] placeholder:text-[#4a5568]/50"
                  placeholder="Reservation Inquiry"
                />
              </div>

              {/* Message Textarea */}
              <div className="space-y-2">
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-[#1a1a1a]"
                >
                  Your Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 rounded-xl border-2 border-[#d4af37]/20 bg-[#f8f6f0] focus:border-[#c41e3a] focus:bg-white focus:outline-none transition-all duration-300 text-[#1a1a1a] placeholder:text-[#4a5568]/50 resize-none"
                  placeholder="Tell us about your inquiry..."
                />
              </div>

              {/* Submit Button */}
              <div className="flex justify-center pt-4">
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="group relative bg-linear-to-r from-[#c41e3a] to-[#a01729] text-white px-10 py-4 rounded-full font-medium text-lg overflow-hidden shadow-xl shadow-[#c41e3a]/30 hover:shadow-2xl hover:shadow-[#c41e3a]/40 transition-all duration-300"
                >
                  <span className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                  <span className="relative flex items-center gap-2">
                    Send Message
                    <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </motion.button>
              </div>

              {/* Decorative elements */}
              <div className="flex items-center justify-center gap-3 pt-6">
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
                  className="w-2 h-2 bg-[#c41e3a] rounded-full"
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
                  className="w-2 h-2 bg-[#d4af37] rounded-full"
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
                  className="w-2 h-2 bg-[#2d5016] rounded-full"
                />
              </div>
            </form>
          </div>
        </motion.div>
      </div>

      {/* Bottom linear overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-linear-to-t from-[#e8e4d8] to-transparent pointer-events-none" />
    </div>
  );
}
