"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, Clock, MapPin, Phone, Mail } from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    question: "What are your operating hours?",
    answer:
      "We are open Monday to Thursday from 11:30 AM to 9:30 PM, Friday to Saturday from 11:30 AM to 10:30 PM, and Sunday from 12:00 PM to 9:00 PM. Hours may vary by location, so please check with your nearest branch.",
    icon: Clock,
  },
  {
    question: "Do you offer takeout and delivery?",
    answer:
      "Yes! We offer both takeout and delivery services. You can order directly through our website, or through popular delivery platforms. Fresh ingredients and careful packaging ensure your sushi arrives in perfect condition.",
    icon: MapPin,
  },
  {
    question: "Can I make a reservation?",
    answer:
      "Absolutely! We highly recommend making reservations, especially for weekends and special occasions. You can reserve a table through our website, by calling us directly, or through our mobile app.",
    icon: Phone,
  },
  {
    question: "Do you accommodate dietary restrictions?",
    answer:
      "Yes, we cater to various dietary needs including vegetarian, vegan, and gluten-free options. Please inform our staff of any allergies or dietary restrictions when ordering, and we'll be happy to recommend suitable dishes.",
    icon: Mail,
  },
  {
    question: "What makes MimikSushi different?",
    answer:
      "Since 1987, we've combined traditional Japanese techniques with modern innovation. Our master chefs use only the freshest ingredients, sourced daily. Every dish is crafted with precision and passion, creating an authentic yet contemporary dining experience.",
    icon: Clock,
  },
  {
    question: "Do you offer catering services?",
    answer:
      "Yes! We provide catering for events of all sizes - from intimate gatherings to corporate functions. Our catering menu includes sushi platters, bento boxes, and party trays. Contact us at least 48 hours in advance to discuss your needs.",
    icon: Phone,
  },
];

export default function SushiFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative bg-white py-24 px-6 lg:px-8">
      <div className="relative max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-red-50 border border-red-100 px-4 py-2 rounded-full mb-6"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-red-600" />
            </span>
            <span className="text-sm font-medium text-red-900">
              Got Questions?
            </span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-zinc-900 mb-4">
            Frequently Asked{" "}
            <span style={{ color: "#ff626d" }}>Questions!</span>
          </h2>
          <p className="text-lg text-zinc-600 max-w-2xl mx-auto">
            Everything you need to know about MimikSushi. Can&apos;t find an
            answer? Feel free to contact us.
          </p>
        </motion.div>

        {/* FAQ Grid */}
        <div className="max-w-5xl mx-auto space-y-3 mb-10">
          {faqs.map((faq, index) => {
            const Icon = faq.icon;
            const isOpen = openIndex === index;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <motion.div
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.3 }}
                  className="h-full"
                >
                  <div
                    className={`relative h-full bg-white border-2 rounded-2xl p-6 cursor-pointer transition-all duration-300 ${
                      isOpen
                        ? "border-red-600 shadow-xl shadow-red-600/10"
                        : "border-zinc-200 hover:border-zinc-300 shadow-lg hover:shadow-xl"
                    }`}
                    onClick={() => toggleFAQ(index)}
                  >
                    {/* Icon and Question */}
                    <div className="flex items-start gap-4 ">
                      <motion.div
                        animate={{ rotate: isOpen ? 360 : 0 }}
                        transition={{ duration: 0.5 }}
                        className={` w-12 rounded-xl flex items-center justify-center transition-colors duration-300 ${
                          isOpen
                            ? "bg-red-600 text-white"
                            : "bg-zinc-100 text-zinc-600"
                        }`}
                      >
                        <Icon className="w-5 h-5" />
                      </motion.div>

                      <div className="flex-1">
                        <h3 className="text-lg font-bold text-zinc-900 mb-2">
                          {faq.question}
                        </h3>
                      </div>

                      <motion.button
                        animate={{ rotate: isOpen ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                        className={`shrink-0 w-8 h-8 rounded-lg flex items-center justify-center transition-colors duration-300 ${
                          isOpen
                            ? "bg-red-100 text-red-600"
                            : "bg-zinc-100 text-zinc-600 hover:bg-zinc-200"
                        }`}
                      >
                        {isOpen ? (
                          <Minus className="w-4 h-4" />
                        ) : (
                          <Plus className="w-4 h-4" />
                        )}
                      </motion.button>
                    </div>

                    {/* Answer */}
                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <motion.p
                            initial={{ y: -10 }}
                            animate={{ y: 0 }}
                            exit={{ y: -10 }}
                            transition={{ duration: 0.3 }}
                            className="text-zinc-600 leading-relaxed pl-16"
                          >
                            {faq.answer}
                          </motion.p>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    {/* Decorative Corner Element */}
                    <motion.div
                      animate={{
                        scale: isOpen ? 1 : 0,
                        rotate: isOpen ? 0 : -180,
                      }}
                      transition={{ duration: 0.3 }}
                      className="absolute -top-1 -right-1 w-8 h-8 bg-red-600 rounded-full opacity-20"
                    />
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
