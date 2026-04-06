"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { ArrowLeft } from "@phosphor-icons/react";

const menuItems = [
  {
    id: "snapper",
    title: "Jumbo Red Snapper",
    price: "$48.72",
    image: "/menu_red_snapper.png",
    description: "Magnificent whole snapper, perfectly fried and bathed in our vibrant pepper and onion stew.",
    badge: "Chef's Signature"
  },
  {
    id: "jollof",
    title: "Classic Jollof Rice",
    price: "$23.20",
    image: "/menu_jollof_rice.png",
    description: "The iconic West African classic. A smoky, rich tomato reduction served with golden fried plantains."
  },
  {
    id: "beef-suya",
    title: "Premium Beef Suya",
    price: "$18.56",
    image: "/menu_beef_suya.png",
    description: "Thinly sliced prime beef, masterfully grilled and thickly dusted in our vibrant signature yaji spice.",
    badge: "Best Seller"
  },
  {
    id: "ayamase",
    title: "Ayamase (Designer Stew)",
    price: "$23.20",
    image: "/menu_ayamase.png",
    description: "A deeply complex, dark reduction of green bell peppers, locuts beans, and assorted prime cuts."
  },
  {
    id: "waakye",
    title: "Authentic Waakye",
    price: "$25.52",
    image: "/menu_waakye.png",
    description: "A traditional staple of rice and beans, elevated with rich dark shito sauce and authentic garnishes."
  },
  {
    id: "efo-riro",
    title: "Symphonic Efo Riro",
    price: "$22.40",
    image: "/menu_efo_riro.png",
    description: "A luxurious, deeply savory stew crafted from vibrant green spinach, assorted meats, and traditional spices."
  },
  {
    id: "chicken-suya",
    title: "Smoked Chicken Suya",
    price: "$23.20",
    image: "/menu_chicken_suya.png",
    description: "Tender, smoky chicken charred to absolute perfection with an intense blend of aromatic African spices."
  },
  {
    id: "peppersoup",
    title: "Goat Pepper Soup",
    price: "$23.20",
    image: "/menu_goat_pepper_soup.png",
    description: "A deeply comforting, fiercely aromatic broth bursting with incredibly tender cutlets and indigenous spices."
  }
];

export default function MenuPage() {
  return (
    <main className="min-h-screen bg-zinc-950 font-sans selection:bg-accent/30 selection:text-accent">
      <Navbar />

      <section className="relative pt-32 md:pt-48 pb-24 px-4 md:px-8 xl:px-0 max-w-[1400px] mx-auto z-10">
        
        {/* Header Block */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left mb-16 md:mb-24">
          <Link href="/">
            <motion.div 
              whileHover={{ x: -5 }}
              className="flex items-center gap-2 text-zinc-400 hover:text-accent transition-colors mb-8 cursor-pointer font-medium tracking-tight text-sm"
            >
              <ArrowLeft weight="bold" />
              Return Home
            </motion.div>
          </Link>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 50, damping: 20 }}
            className="text-5xl md:text-7xl lg:text-8xl tracking-tighter leading-[0.95] text-zinc-50 font-bold mb-6"
          >
            The Culinary <br/>
            <span className="text-zinc-500 italic font-light">Exhibition.</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 50, damping: 20, delay: 0.1 }}
            className="text-zinc-400 max-w-[50ch] text-base md:text-lg leading-relaxed"
          >
            An uncompromising celebration of authentic African flavor, 
            presented with Michelin-tier elegance. Explore our signature masterpieces.
          </motion.p>
        </div>

        {/* Menu Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {menuItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ type: "spring", stiffness: 100, damping: 20, delay: index * 0.1 }}
              className="group relative flex flex-col bg-zinc-900/30 backdrop-blur-md border border-white/5 rounded-3xl overflow-hidden hover:bg-zinc-900/60 transition-colors duration-500"
            >
              {/* Image Frame */}
              <div className="relative w-full aspect-[4/3] overflow-hidden bg-zinc-950">
                <Image 
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out opacity-90 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent opacity-60" />
                
                {item.badge && (
                  <div className="absolute top-4 right-4 bg-zinc-950/80 backdrop-blur-md border border-accent/30 text-accent text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full z-10">
                    {item.badge}
                  </div>
                )}
              </div>

              {/* Content Frame */}
              <div className="p-6 md:p-8 flex flex-col flex-1">
                <div className="flex justify-between items-start gap-4 mb-4">
                  <h3 className="text-2xl text-zinc-50 font-semibold tracking-tight leading-tight">
                    {item.title}
                  </h3>
                  <span className="text-xl text-accent font-medium tracking-tight">
                    {item.price}
                  </span>
                </div>
                <p className="text-sm text-zinc-400 leading-relaxed max-w-[90%]">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </section>

      <Footer />
    </main>
  );
}
