"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { ArrowLeft, CalendarBlank, CaretDown } from "@phosphor-icons/react";

const celebrationTypes = [
  {
    id: "wedding",
    title: "Weddings & Receptions",
    subtitle: "A majestic setting for your special day.",
    image: "/res_wedding.png",
    colSpan: "md:col-span-2",
  },
  {
    id: "group",
    title: "Corporate & Groups",
    subtitle: "Private dining with elegant refinement.",
    image: "/res_group.png",
    colSpan: "col-span-1",
  },
  {
    id: "birthday",
    title: "Birthdays & VIP",
    subtitle: "Bottle service and glamorous nightlife.",
    image: "/res_birthday.png",
    colSpan: "col-span-1",
  },
  {
    id: "standard",
    title: "Standard Dining",
    subtitle: "An intimate and moody culinary journey.",
    image: "/res_standard.png",
    colSpan: "md:col-span-2",
  }
];

export default function ReservationsPage() {
  return (
    <main className="min-h-screen bg-zinc-950 font-sans selection:bg-accent/30 selection:text-accent pb-24">
      <Navbar />

      <section className="relative pt-32 md:pt-48 pb-16 px-4 md:px-8 xl:px-0 max-w-[1400px] mx-auto z-10">
        
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
            Celebrate <br/>
            <span className="text-zinc-500 italic font-light">With Us.</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 50, damping: 20, delay: 0.1 }}
            className="text-zinc-400 max-w-[50ch] text-base md:text-lg leading-relaxed"
          >
            Whether it is an intimate evening for two or a sweeping wedding reception, our team is dedicated to engineering an unforgettable luxury experience.
          </motion.p>
        </div>

        {/* Bento Grid Presentation */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-24">
          {celebrationTypes.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ type: "spring", stiffness: 100, damping: 20, delay: index * 0.1 }}
              className={`group relative overflow-hidden rounded-[2rem] min-h-[350px] md:min-h-[450px] bg-zinc-900 ${item.colSpan}`}
            >
              <Image 
                src={item.image}
                alt={item.title}
                fill
                className="object-cover object-center group-hover:scale-105 transition-transform duration-1000 ease-out opacity-80 group-hover:opacity-100 mix-blend-luminosity hover:mix-blend-normal"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent opacity-90 group-hover:opacity-70 transition-opacity duration-700" />
              
              <div className="absolute inset-0 p-8 md:p-12 flex flex-col justify-end">
                <h3 className="text-3xl md:text-4xl text-zinc-50 font-bold tracking-tight mb-2">
                  {item.title}
                </h3>
                <p className="text-zinc-400 font-medium">
                  {item.subtitle}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* The Booking Console */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 50, damping: 20 }}
          className="max-w-4xl mx-auto bg-zinc-900/40 backdrop-blur-xl border border-white/5 rounded-[2.5rem] p-8 md:p-16 shadow-2xl relative overflow-hidden"
        >
          {/* Subtle background glow */}
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-accent opacity-[0.03] blur-3xl rounded-full pointer-events-none" />

          <div className="mb-12 text-center md:text-left flex flex-col md:flex-row justify-between items-center border-b border-white/5 pb-8">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-zinc-50 mb-2">Secure a Date</h2>
              <p className="text-zinc-400">Fill out the details below to begin an inquiry.</p>
            </div>
            <CalendarBlank size={48} className="text-zinc-700 mt-6 md:mt-0" weight="duotone" />
          </div>

          <form className="flex flex-col gap-6 relative z-10" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Name */}
              <div className="flex flex-col gap-2">
                <label className="text-sm font-bold tracking-widest uppercase text-zinc-500 ml-2">Full Name</label>
                <input 
                  type="text" 
                  placeholder="John Doe" 
                  className="bg-zinc-950/50 border border-white/10 rounded-2xl px-6 py-4 text-zinc-100 placeholder:text-zinc-700 outline-none focus:border-accent/50 focus:bg-zinc-950 transition-all font-medium"
                />
              </div>

              {/* Email */}
              <div className="flex flex-col gap-2">
                <label className="text-sm font-bold tracking-widest uppercase text-zinc-500 ml-2">Email Address</label>
                <input 
                  type="email" 
                  placeholder="contact@example.com" 
                  className="bg-zinc-950/50 border border-white/10 rounded-2xl px-6 py-4 text-zinc-100 placeholder:text-zinc-700 outline-none focus:border-accent/50 focus:bg-zinc-950 transition-all font-medium"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {/* Date */}
              <div className="flex flex-col gap-2">
                <label className="text-sm font-bold tracking-widest uppercase text-zinc-500 ml-2">Date</label>
                <input 
                  type="date" 
                  className="bg-zinc-950/50 border border-white/10 rounded-2xl px-6 py-4 text-zinc-100 outline-none focus:border-accent/50 focus:bg-zinc-950 transition-all font-medium appearance-none [color-scheme:dark]"
                />
              </div>

              {/* Time */}
              <div className="flex flex-col gap-2">
                <label className="text-sm font-bold tracking-widest uppercase text-zinc-500 ml-2">Time</label>
                <input 
                  type="time" 
                  className="bg-zinc-950/50 border border-white/10 rounded-2xl px-6 py-4 text-zinc-100 outline-none focus:border-accent/50 focus:bg-zinc-950 transition-all font-medium appearance-none [color-scheme:dark]"
                />
              </div>

              {/* Guests */}
              <div className="flex flex-col gap-2">
                <label className="text-sm font-bold tracking-widest uppercase text-zinc-500 ml-2">Guests</label>
                <input 
                  type="number" 
                  min="1" 
                  placeholder="2" 
                  className="bg-zinc-950/50 border border-white/10 rounded-2xl px-6 py-4 text-zinc-100 placeholder:text-zinc-700 outline-none focus:border-accent/50 focus:bg-zinc-950 transition-all font-medium"
                />
              </div>
            </div>

            {/* Event Type Select */}
            <div className="flex flex-col gap-2">
              <label className="text-sm font-bold tracking-widest uppercase text-zinc-500 ml-2">Type of Inquiry</label>
              <div className="relative">
                <select className="w-full bg-zinc-950/50 border border-white/10 rounded-2xl px-6 py-4 text-zinc-100 outline-none focus:border-accent/50 focus:bg-zinc-950 transition-all font-medium appearance-none">
                  <option value="standard">Standard Dining Reservation</option>
                  <option value="birthday">Birthday / VIP Table</option>
                  <option value="group">Corporate / Large Group</option>
                  <option value="wedding">Wedding Reception</option>
                  <option value="catering">Offsite Catering</option>
                </select>
                <CaretDown className="absolute right-6 top-1/2 -translate-y-1/2 text-zinc-500 pointer-events-none" weight="bold" />
              </div>
            </div>

            {/* Message Area */}
            <div className="flex flex-col gap-2">
              <label className="text-sm font-bold tracking-widest uppercase text-zinc-500 ml-2">Special Requests?</label>
              <textarea 
                rows={4}
                placeholder="Any allergies, special occasions, or VIP requirements we should know about..." 
                className="bg-zinc-950/50 border border-white/10 rounded-2xl px-6 py-4 text-zinc-100 placeholder:text-zinc-700 outline-none focus:border-accent/50 focus:bg-zinc-950 transition-all font-medium resize-none"
              />
            </div>

            {/* Submit */}
            <motion.button 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="mt-4 w-full bg-accent hover:bg-amber-500 text-zinc-950 px-8 py-5 rounded-2xl text-lg font-bold tracking-tight transition-colors shadow-[inset_0_1px_0_rgba(255,255,255,0.4)]"
            >
              Submit Inquiry
            </motion.button>
          </form>

        </motion.div>
      </section>
      
      <Footer />
    </main>
  );
}
