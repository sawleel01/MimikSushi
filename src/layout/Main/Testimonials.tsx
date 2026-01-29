"use client";

import { motion } from "framer-motion";
import { Star, Quote, Heart } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Food Blogger",
    avatar: "👩‍🍳",
    rating: 5,
    comment:
      "Absolutely phenomenal! The sushi is incredibly fresh and the presentation is art. I've been coming here for 3 years and they never disappoint. The spicy tuna roll is to die for!",

    color: "from-red-500 to-rose-600",
    bgColor: "bg-red-50",
    borderColor: "border-red-200",
  },
  {
    name: "Michael Chen",
    role: "Regular Customer",
    avatar: "👨‍💼",
    rating: 5,
    comment:
      "Best Japanese restaurant in town! The quality is consistently excellent, and the staff is incredibly welcoming. Their omakase experience is a must-try for any sushi lover.",

    color: "from-amber-500 to-orange-600",
    bgColor: "bg-amber-50",
    borderColor: "border-amber-200",
  },
  {
    name: "Emily Rodriguez",
    role: "Local Guide",
    avatar: "👩‍💻",
    rating: 5,
    comment:
      "A hidden gem! The atmosphere is perfect for both dates and family dinners. Fresh ingredients, authentic flavors, and reasonable prices. The salmon nigiri melts in your mouth!",

    color: "from-emerald-500 to-green-600",
    bgColor: "bg-emerald-50",
    borderColor: "border-emerald-200",
  },
  {
    name: "David Kim",
    role: "Sushi Enthusiast",
    avatar: "👨‍🎨",
    rating: 5,
    comment:
      "I've traveled to Japan multiple times, and MimikSushi comes very close to the authentic experience. The rice is perfectly seasoned, and the fish quality is outstanding. Highly recommended!",

    color: "from-blue-500 to-indigo-600",
    bgColor: "bg-blue-50",
    borderColor: "border-blue-200",
  },
  {
    name: "Lisa Anderson",
    role: "Chef",
    avatar: "👩‍🔬",
    rating: 5,
    comment:
      "As a professional chef, I'm very picky about food quality. MimikSushi exceeds all expectations. Their attention to detail and commitment to freshness is impressive. The dragon roll is spectacular!",

    color: "from-purple-500 to-violet-600",
    bgColor: "bg-purple-50",
    borderColor: "border-purple-200",
  },
  {
    name: "James Taylor",
    role: "Food Critic",
    avatar: "👨‍🏫",
    rating: 5,
    comment:
      "A delightful fusion of tradition and innovation. The chefs clearly know their craft. Every visit is a culinary journey. The ambiance, service, and food quality all deserve five stars!",

    color: "from-pink-500 to-rose-600",
    bgColor: "bg-pink-50",
    borderColor: "border-pink-200",
  },
];

export default function SushiTestimonials() {
  return (
    <section className="relative py-24 bg-linear-to-b from-[#e8e4d8] via-[#f8f6f0] to-[#e8e4d8] overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-red-50 rounded-full blur-3xl opacity-40" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-amber-50 rounded-full blur-3xl opacity-40" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-emerald-50 rounded-full blur-3xl opacity-30" />

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
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-white border border-black px-4 py-2 rounded-full mb-6"
          >
            <Heart className="w-4 h-4 text-red-600 fill-red-600" />
            <span className="text-sm font-medium text-red-900">
              Customer Love
            </span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-zinc-900 mb-4">
            What Our <span style={{ color: "#ff626d" }}>Guests Say</span>
          </h2>
          <p className="text-lg text-zinc-600 max-w-2xl mx-auto">
            Don&apos;t just take our word for it. Hear from the people who make
            MimikSushi special.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => {
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <motion.div
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.3 }}
                  className="h-full"
                >
                  <div
                    className={`relative h-full bg-white border-2 ${testimonial.borderColor} rounded-2xl p-6 transition-all duration-300 hover:shadow-2xl group`}
                  >
                    {/* Quote Icon */}
                    <motion.div
                      className={`absolute -top-3 right-3 w-12 h-12 ${testimonial.bgColor} border-2 ${testimonial.borderColor} rounded-full flex items-center justify-center shadow-lg`}
                    >
                      <Quote className="w-5 h-5 text-zinc-600" />
                    </motion.div>

                    {/* Header */}
                    <div className="flex items-start gap-4 mb-4 mt-2">
                      <motion.div
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ duration: 0.3 }}
                        className={`shrink-0 w-14 h-14 ${testimonial.bgColor} rounded-full flex items-center justify-center text-2xl border-2 ${testimonial.borderColor}`}
                      >
                        {testimonial.avatar}
                      </motion.div>

                      <div className="flex-1">
                        <h4 className="font-bold text-zinc-900">
                          {testimonial.name}
                        </h4>
                        <p className="text-sm text-zinc-500">
                          {testimonial.role}
                        </p>
                        <div className="flex items-center gap-1 mt-1">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star
                              key={i}
                              className="w-3 h-3 text-amber-500 fill-amber-500"
                            />
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Comment */}
                    <p className="text-zinc-600 leading-relaxed mb-4">
                      {testimonial.comment}
                    </p>

                    {/* Hover Glow Effect */}
                    <motion.div
                      className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                      style={{
                        background: `linear-gradient(135deg, ${testimonial.bgColor.replace("bg-", "rgba(")}, 0.05), transparent)`,
                      }}
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
