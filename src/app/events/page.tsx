"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "@phosphor-icons/react";
import { useRef } from "react";

const experiences = [
  {
    id: "afrobites",
    title: "Afrobites & Cocktails",
    subtitle: "Every Friday Night",
    description: "Immerse yourself in a vibrant nightlife experience. Signature cocktails, curated Afrobeat selections, and an electric atmosphere designed for those who appreciate upscale lounging.",
    image: "/event_afrobites.png",
    buttonText: "Reserve a VIP Section"
  },
  {
    id: "jazz",
    title: "Smooth Jazz Evenings",
    subtitle: "A Masterpiece Ambiance",
    description: "Let the melodic brass of live saxophone players serenade you. An incredibly luxurious, moody evening perfectly paired with our signature dishes and a glass of fine wine.",
    image: "/event_jazz.png",
    buttonText: "Book a Table"
  },
  {
    id: "buffet",
    title: "The Chop Life Buffet",
    subtitle: "A Culinary Feast",
    description: "Every special holiday, we unveil our masterpiece buffet. A breathtaking elevated spread featuring all your authentic favorites, unlimited and presented with Michelin-tier elegance.",
    image: "/event_buffet.png",
    buttonText: "View Schedule"
  },
  {
    id: "private",
    title: "Private Events & Catering",
    subtitle: "Bespoke Luxury",
    description: "From corporate retreats to extravagant birthday celebrations, reserve our VIP rooms or have our culinary team cater your private estate. We bring the luxury of Ike's directly to you.",
    image: "/event_private.png",
    buttonText: "Inquire Now"
  }
];

function EventSection({ event, index }: { event: typeof experiences[0], index: number }) {
  const isEven = index % 2 === 0;
  const ref = useRef(null);
  
  // Parallax effect on images
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <section 
      ref={ref}
      className={`min-h-[80vh] w-full flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center overflow-hidden border-b border-white/5 last:border-0`}
    >
      {/* Image Block: Full Bleed 50% */}
      <div className="w-full lg:w-1/2 h-[50vh] lg:h-[80vh] relative overflow-hidden bg-zinc-950">
        <motion.div style={{ y }} className="absolute inset-0 w-full h-[120%] -top-[10%]">
          <Image 
            src={event.image}
            alt={event.title}
            fill
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-transparent to-transparent lg:hidden" />
        </motion.div>
      </div>

      {/* Content Block */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 md:p-16 lg:p-24 bg-zinc-950 relative z-10 -mt-16 lg:mt-0 rounded-t-3xl lg:rounded-none border-t lg:border-t-0 border-white/10 lg:border-none backdrop-blur-3xl lg:backdrop-blur-none">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ type: "spring", stiffness: 50, damping: 20 }}
          className="max-w-xl w-full"
        >
          <div className="inline-block border border-accent/20 bg-accent/10 px-4 py-1.5 rounded-full text-accent text-xs font-bold uppercase tracking-widest mb-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]">
            {event.subtitle}
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold text-zinc-50 tracking-tighter leading-[0.95] mb-6">
            {event.title}
          </h2>
          <p className="text-zinc-400 text-base md:text-lg leading-relaxed mb-10 max-w-[45ch]">
            {event.description}
          </p>
          
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="group flex items-center gap-3 bg-zinc-900 border border-white/10 hover:border-accent hover:bg-accent hover:text-zinc-950 text-zinc-50 px-8 py-4 rounded-full text-sm font-bold tracking-tight transition-all"
          >
            {event.buttonText}
            <ArrowRight weight="bold" className="group-hover:translate-x-1 transition-transform" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}

export default function EventsPage() {
  return (
    <main className="min-h-screen bg-zinc-950 font-sans selection:bg-accent/30 selection:text-accent">
      <Navbar />

      {/* Hero Header */}
      <section className="pt-32 md:pt-48 pb-16 px-4 md:px-8 xl:px-0 max-w-[1400px] mx-auto z-10">
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
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
            Curated <br/>
            <span className="text-zinc-500 italic font-light">Experiences.</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 50, damping: 20, delay: 0.1 }}
            className="text-zinc-400 max-w-[50ch] text-base md:text-lg leading-relaxed"
          >
            From vibrant Afrobeat nights to exclusive Michelin-style private catering, 
            discover how we elevate the rhythm of Atlanta into unforgettable events.
          </motion.p>
        </div>
      </section>

      {/* Immersive Staggered Modules */}
      <div className="w-full">
        {experiences.map((evt, index) => (
          <EventSection key={evt.id} event={evt} index={index} />
        ))}
      </div>

      {/* Private Catering CTA Section */}
      <section className="py-24 md:py-32 px-4 bg-zinc-950 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/interior.png')] bg-cover bg-center opacity-10 mix-blend-luminosity" />
        <div className="max-w-4xl mx-auto text-center relative z-10 flex flex-col items-center">
          <h2 className="text-4xl md:text-6xl font-bold text-zinc-50 tracking-tighter mb-6">
            Host at Ike's
          </h2>
          <p className="text-zinc-400 text-lg max-w-[50ch] mb-10">
            Let our premium team handle your next extravagant celebration. Secure VIP bottle service, private dining rooms, or request off-site catering.
          </p>
          <button className="bg-accent text-zinc-950 hover:bg-amber-500 px-10 py-5 rounded-full text-sm font-bold tracking-tight shadow-[inset_0_1px_0_rgba(255,255,255,0.4)] transition-all transform hover:scale-105 active:scale-95">
            Submit an Inquiry
          </button>
        </div>
      </section>

      <Footer />
    </main>
  );
}
