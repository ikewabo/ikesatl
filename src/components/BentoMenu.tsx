"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight } from "@phosphor-icons/react";

const bentoItems = [
  {
    id: 1,
    title: "Authentic Egusi Soup",
    category: "Signature Dish",
    image: "/egusi.png",
    colSpan: "md:col-span-8",
    rowSpan: "md:row-span-2",
  },
  {
    id: 2,
    title: "Premium Mixology",
    category: "The Bar",
    image: "/cocktail.png",
    colSpan: "md:col-span-4",
    rowSpan: "md:row-span-1",
  },
  {
    id: 3,
    title: "Luxe Atmosphere",
    category: "Experience",
    image: "/interior.png",
    colSpan: "md:col-span-4",
    rowSpan: "md:row-span-1",
  }
];

export default function BentoMenu() {
  return (
    <section id="menu" className="w-full py-24 px-4 md:px-8 relative z-10 bg-zinc-950">
      <div className="max-w-[1400px] mx-auto">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
          >
            <h2 className="text-4xl md:text-6xl tracking-tighter leading-none text-zinc-50 font-bold mb-4">
              Curated <br/>
              <span className="text-zinc-500">Selections.</span>
            </h2>
          </motion.div>
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center gap-2 border-b border-accent pb-1 text-accent font-medium tracking-tight hover:text-amber-500 transition-colors w-fit"
          >
            View Full Menu
            <ArrowUpRight weight="bold" />
          </motion.button>
        </div>

        {/* Bento Grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 md:grid-rows-2 gap-6 h-auto md:h-[700px]">
          {bentoItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ type: "spring", stiffness: 100, damping: 20, delay: index * 0.1 }}
              className={`group relative rounded-[2.5rem] overflow-hidden border border-white/5 bg-zinc-900/50 shadow-2xl ${item.colSpan} ${item.rowSpan}`}
            >
              <div className="absolute inset-0 bg-zinc-950/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
              <div className="absolute inset-x-0 bottom-0 p-8 z-20 bg-gradient-to-t from-zinc-950/90 via-zinc-950/40 to-transparent">
                <span className="text-accent text-xs font-bold uppercase tracking-widest mb-2 block">
                  {item.category}
                </span>
                <h3 className="text-2xl md:text-3xl text-zinc-50 font-semibold tracking-tight">
                  {item.title}
                </h3>
              </div>
              <Image 
                src={item.image}
                alt={item.title}
                fill
                className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
              />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
