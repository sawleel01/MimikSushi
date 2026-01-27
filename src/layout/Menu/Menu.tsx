"use client";

import { motion } from "framer-motion";
import { Leaf, Flame } from "lucide-react";

// Types
interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  spicy?: boolean;
  vegetarian?: boolean;
}

// Menu Data
const menuCategories = [
  { id: "nigiri", name: "Nigiri" },
  { id: "sashimi", name: "Sashimi" },
  { id: "rolls", name: "Specialty Rolls" },
  { id: "appetizers", name: "Appetizers" },
  { id: "hot-dishes", name: "Hot Dishes" },
  { id: "desserts", name: "Desserts" },
];

const menuItems: MenuItem[] = [
  // Nigiri
  {
    id: "1",
    name: "Toro Nigiri",
    description: "Premium fatty tuna",
    price: 12,
    category: "nigiri",
  },
  {
    id: "2",
    name: "Salmon Nigiri",
    description: "Fresh Norwegian salmon",
    price: 8,
    category: "nigiri",
  },
  {
    id: "3",
    name: "Yellowtail Nigiri",
    description: "Japanese yellowtail",
    price: 10,
    category: "nigiri",
  },
  {
    id: "4",
    name: "Eel Nigiri",
    description: "Grilled freshwater eel",
    price: 11,
    category: "nigiri",
  },
  {
    id: "5",
    name: "Uni Nigiri",
    description: "Sea urchin",
    price: 15,
    category: "nigiri",
  },

  // Sashimi
  {
    id: "6",
    name: "Toro Sashimi",
    description: "5 pieces of premium fatty tuna",
    price: 18,
    category: "sashimi",
  },
  {
    id: "7",
    name: "Salmon Sashimi",
    description: "6 pieces of fresh salmon",
    price: 14,
    category: "sashimi",
  },
  {
    id: "8",
    name: "Assorted Sashimi",
    description: "Chef's selection of 9 pieces",
    price: 25,
    category: "sashimi",
  },
  {
    id: "9",
    name: "Yellowtail Sashimi",
    description: "6 pieces of yellowtail",
    price: 16,
    category: "sashimi",
  },

  // Rolls
  {
    id: "10",
    name: "Dragon Roll",
    description: "Eel, cucumber, avocado",
    price: 16,
    category: "rolls",
  },
  {
    id: "11",
    name: "Rainbow Roll",
    description: "Assorted fish on California roll",
    price: 18,
    category: "rolls",
  },
  {
    id: "12",
    name: "Spicy Tuna Roll",
    description: "Tuna, spicy mayo, cucumber",
    price: 14,
    category: "rolls",
    spicy: true,
  },
  {
    id: "13",
    name: "Philadelphia Roll",
    description: "Salmon, cream cheese, avocado",
    price: 13,
    category: "rolls",
  },
  {
    id: "14",
    name: "Volcano Roll",
    description: "Spicy tuna, topped with baked scallop",
    price: 19,
    category: "rolls",
    spicy: true,
  },

  // Appetizers
  {
    id: "15",
    name: "Edamame",
    description: "Steamed soybeans with sea salt",
    price: 6,
    category: "appetizers",
    vegetarian: true,
  },
  {
    id: "16",
    name: "Gyoza",
    description: "Pan-fried pork dumplings",
    price: 8,
    category: "appetizers",
  },
  {
    id: "17",
    name: "Agedashi Tofu",
    description: "Fried tofu in dashi broth",
    price: 7,
    category: "appetizers",
    vegetarian: true,
  },
  {
    id: "18",
    name: "Takoyaki",
    description: "Octopus balls with bonito flakes",
    price: 9,
    category: "appetizers",
  },

  // Hot Dishes
  {
    id: "19",
    name: "Miso Soup",
    description: "Traditional soybean soup",
    price: 4,
    category: "hot-dishes",
    vegetarian: true,
  },
  {
    id: "20",
    name: "Ramen",
    description: "Tonkotsu broth with chashu pork",
    price: 16,
    category: "hot-dishes",
  },
  {
    id: "21",
    name: "Teriyaki Chicken",
    description: "Grilled chicken with teriyaki glaze",
    price: 15,
    category: "hot-dishes",
  },
  {
    id: "22",
    name: "Tempura",
    description: "Assorted vegetable and shrimp tempura",
    price: 14,
    category: "hot-dishes",
  },

  // Desserts
  {
    id: "23",
    name: "Mochi Ice Cream",
    description: "Green tea, mango, or strawberry",
    price: 7,
    category: "desserts",
    vegetarian: true,
  },
  {
    id: "24",
    name: "Dorayaki",
    description: "Red bean pancake sandwich",
    price: 6,
    category: "desserts",
    vegetarian: true,
  },
  {
    id: "25",
    name: "Matcha Tiramisu",
    description: "Japanese twist on Italian classic",
    price: 8,
    category: "desserts",
    vegetarian: true,
  },
];

export default function SushiMenu() {
  return (
    <div className="min-h-screen bg-[#f5f1e8] py-12 px-4">
      {/* Menu Container */}
      <div className="max-w-5xl mx-auto bg-white shadow-2xl">
        {/* Menu Header */}
        <div className="border-b-4 border-double border-black py-12 px-8 text-center bg-white">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="mb-4"></div>
            <h1 className="font-['Noto_Serif_JP'] text-5xl font-bold text-black mb-3 tracking-wide">
              Mimik Sushi
            </h1>
            <div className="w-32 h-0.5 bg-black mx-auto mb-3"></div>
            <p className="text-sm text-gray-700 uppercase tracking-widest">
              Authentic Japanese Cuisine
            </p>
          </motion.div>
        </div>

        {/* Menu Content */}
        <div className="px-12 py-10">
          {menuCategories.map((category, categoryIndex) => {
            const categoryItems = menuItems.filter(
              (item) => item.category === category.id,
            );

            return (
              <motion.section
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                className="mb-12 last:mb-0"
              >
                {/* Category Header */}
                <div className="text-center mb-8">
                  <div className="flex items-center justify-center gap-4 mb-2">
                    <div className="flex-1 h-px bg-black"></div>
                    <h2 className="font-['Noto_Serif_JP'] text-3xl font-bold text-black uppercase tracking-wider px-4">
                      {category.name}
                    </h2>
                    <div className="flex-1 h-px bg-black"></div>
                  </div>
                </div>

                {/* Menu Items Grid */}
                <div className="grid md:grid-cols-2 gap-x-8 gap-y-6">
                  {categoryItems.map((item, itemIndex) => (
                    <motion.div
                      key={item.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{
                        duration: 0.5,
                        delay: categoryIndex * 0.1 + itemIndex * 0.05,
                      }}
                      className="group"
                    >
                      <div className="flex items-start justify-between gap-3 mb-1">
                        <div className="flex-1">
                          <div className="flex items-baseline gap-2">
                            <h3 className="font-['Noto_Serif_JP'] text-lg font-semibold text-black group-hover:text-gray-700 transition-colors">
                              {item.name}
                            </h3>
                            {item.spicy && (
                              <Flame className="w-3.5 h-3.5 text-red-600 inline-block" />
                            )}
                            {item.vegetarian && (
                              <Leaf className="w-3.5 h-3.5 text-green-700 inline-block" />
                            )}
                          </div>
                          <div className="flex-1 border-b border-dotted border-gray-400 my-1.5"></div>
                        </div>
                        <span className="font-['Noto_Serif_JP'] text-lg font-medium text-black whitespace-nowrap ml-2">
                          ${item.price.toFixed(2)}
                        </span>
                      </div>
                      <p className="text-sm text-gray-600 italic leading-relaxed">
                        {item.description}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </motion.section>
            );
          })}
        </div>

        {/* Menu Footer */}
        <div className="border-t-4 border-double border-black py-8 px-8 text-center bg-white">
          <p className="text-sm text-gray-700 mb-2">
            <Flame className="w-4 h-4 inline-block mr-1 text-red-600" />
            Spicy
            <span className="mx-4">•</span>
            <Leaf className="w-4 h-4 inline-block mr-1 text-green-700" />
            Vegetarian
          </p>
          <p className="text-xs text-gray-600 mt-4 font-['Noto_Serif_JP']">
            いらっしゃいませ • Welcome
          </p>
        </div>
      </div>
    </div>
  );
}
