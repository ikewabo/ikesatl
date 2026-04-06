"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { ArrowLeft } from "@phosphor-icons/react";

export default function OurStoryPage() {
  return (
    <main className="min-h-screen bg-zinc-950 font-sans selection:bg-accent/30 selection:text-accent">
      <Navbar />

      <section className="relative pt-32 pb-0 px-4 md:px-8 xl:px-0 max-w-[1400px] mx-auto z-10 min-h-screen">
        
        {/* Return Button */}
        <div className="mb-12">
          <Link href="/">
            <motion.div 
              whileHover={{ x: -5 }}
              className="flex items-center gap-2 text-zinc-400 hover:text-accent transition-colors cursor-pointer font-medium tracking-tight text-sm"
            >
              <ArrowLeft weight="bold" />
              Return Home
            </motion.div>
          </Link>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 relative pb-32">
          
          {/* Left Column: Fixed Image Editoral */}
          <div className="w-full lg:w-5/12 relative">
            <div className="block lg:sticky top-32 w-full h-[60vh] lg:h-[75vh] rounded-[2.5rem] overflow-hidden border border-white/10 shadow-2xl relative">
              <Image 
                src="/our_story_kumasi.png"
                alt="Kumasi Heritage - Lady Pounding Yam"
                fill
                priority
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-zinc-950/20 to-transparent" />
              
              {/* Badge/Watermark */}
              <div className="absolute bottom-10 left-10 text-zinc-50 tracking-widest text-xs uppercase font-bold flex flex-col gap-1">
                <span className="text-accent">Heritage</span>
                <span>Kumasi, Ghana &bull; Atlanta, GA</span>
              </div>
            </div>
          </div>

          {/* Right Column: Scrolling Story Text */}
          <div className="w-full lg:w-7/12 flex flex-col justify-center pt-8 lg:pt-32">
            
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 50, damping: 20 }}
              className="inline-block border border-accent/20 bg-accent/10 px-4 py-1.5 rounded-full text-accent text-xs font-bold uppercase tracking-widest mb-8 md:mb-12 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]"
            >
              Our Story
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 50, damping: 20, delay: 0.1 }}
              className="text-5xl md:text-7xl lg:text-8xl tracking-tighter leading-[0.95] text-zinc-50 font-bold mb-16"
            >
              Every Plate <br/>
              <span className="text-zinc-500 italic font-light">Tells a Story.</span>
            </motion.h1>

            <div className="flex flex-col gap-12 text-lg md:text-xl lg:text-2xl text-zinc-300 leading-relaxed max-w-[60ch] font-light tracking-tight">
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ type: "spring", stiffness: 50, damping: 20 }}
              >
                <strong className="text-zinc-50 font-medium">Ike’s Cafe & Grill</strong> is a West African–inspired dining destination where culture, flavor, and community come together. Rooted in a story that connects Atlanta and Kumasi, Ghana, Ike’s was created to offer more than a meal—it was built to create an experience. Inspired by the richness of West African hospitality and the pride of the African diaspora, Ike’s brings people together through authentic food, warm service, and unforgettable atmosphere.
              </motion.p>
              
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ type: "spring", stiffness: 50, damping: 20 }}
              >
                Our menu celebrates the bold, comforting flavors of West Africa, with beloved dishes that speak to tradition, home, and heritage. From richly seasoned classics to buffet favorites and signature plates, every meal is prepared to deliver both authenticity and satisfaction. Whether you are reconnecting with familiar tastes or discovering West African cuisine for the first time, Ike’s offers a dining experience that feels vibrant, generous, and real.
              </motion.p>
              
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ type: "spring", stiffness: 50, damping: 20 }}
              >
                But Ike’s is more than a restaurant. It is also a place for celebration—for birthdays, private gatherings, Sunday brunches, evenings out, and moments worth remembering. With great food, music, drinks, and an energetic social atmosphere, Ike’s Cafe & Grill has grown into a destination for food lovers and the wider African and diaspora community in Norcross and beyond.
              </motion.p>
              
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ type: "spring", stiffness: 50, damping: 20 }}
                className="text-2xl md:text-3xl text-accent font-medium leading-tight pt-12 border-t border-white/5"
              >
                At Ike’s Cafe & Grill, every gathering feels like home, and every visit is a celebration of West African culture at its best.
              </motion.p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
