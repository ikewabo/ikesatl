"use client";

import { motion } from "framer-motion";
import { List, X } from "@phosphor-icons/react";
import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
      className="fixed top-0 inset-x-0 z-50 px-6 py-4"
    >
      <div className="max-w-[1400px] mx-auto bg-zinc-950/60 backdrop-blur-xl border border-white/10 shadow-[inset_0_1px_0_rgba(255,255,255,0.1)] rounded-[2rem] px-8 py-3 flex items-center justify-between">
        
        <Link href="/" className="text-xl font-bold tracking-tighter uppercase text-zinc-50 flex items-center gap-2">
          <span>Ike's</span>
          <span className="text-accent text-lg">&bull;</span>
          <span className="text-zinc-400">Cafe & Grill</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium tracking-tight text-zinc-400">
          {[
            { name: "Menu", href: "/menu" },
            { name: "Events", href: "/events" },
            { name: "Reservations", href: "/reservations" },
            { name: "Our Story", href: "/our-story" }
          ].map((item) => (
            <Link key={item.name} href={item.href} className="hover:text-zinc-50 transition-colors duration-300">
              {item.name}
            </Link>
          ))}
        </div>

        <div className="hidden md:block">
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="bg-accent hover:bg-amber-500 text-zinc-950 px-6 py-2.5 rounded-full text-sm font-bold tracking-tight shadow-[inset_0_1px_0_rgba(255,255,255,0.4)] transition-colors"
          >
            Order Now
          </motion.button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-zinc-50"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} weight="bold" /> : <List size={24} weight="bold" />}
        </button>

      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          className="md:hidden absolute top-24 left-6 right-6 bg-zinc-900 border border-white/10 rounded-2xl p-6 shadow-2xl origin-top"
        >
          <div className="flex flex-col gap-6 text-center text-lg font-medium text-zinc-300">
            {[
              { name: "Menu", href: "/menu" },
              { name: "Events", href: "/events" },
              { name: "Reservations", href: "/reservations" },
              { name: "Our Story", href: "/our-story" }
            ].map((item) => (
              <Link key={item.name} href={item.href} onClick={() => setIsOpen(false)}>
                {item.name}
              </Link>
            ))}
            <button className="bg-accent text-zinc-950 px-6 py-3 rounded-full font-bold mt-4">
              Order Now
            </button>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}
