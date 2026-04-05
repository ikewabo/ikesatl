"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Clock, InstagramLogo, FacebookLogo } from "@phosphor-icons/react";

export default function Footer() {
  return (
    <footer id="our-story" className="w-full pt-24 pb-12 px-4 md:px-8 bg-zinc-900 border-t border-white/5 relative z-10">
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-24">
        
        <div className="col-span-1 md:col-span-2 flex flex-col items-start pr-0 md:pr-16">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tighter text-zinc-50 mb-6 uppercase">
            Ike's <span className="text-accent">Cafe</span> & Grill
          </h2>
          <p className="text-zinc-400 leading-relaxed mb-8 max-w-[40ch]">
            Experience the rich, authentic flavors of Africa. From our slow-cooked Egusi to our vibrant bar, every detail is engineered for an unforgettable night out in Atlanta.
          </p>
          <div className="flex gap-4">
            <motion.a whileHover={{ y: -2 }} href="#" className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-zinc-400 hover:text-accent hover:border-accent transition-colors">
              <InstagramLogo size={24} />
            </motion.a>
            <motion.a whileHover={{ y: -2 }} href="#" className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-zinc-400 hover:text-accent hover:border-accent transition-colors">
              <FacebookLogo size={24} />
            </motion.a>
          </div>
        </div>

        <div className="col-span-1 flex flex-col gap-6">
          <h4 className="text-zinc-50 font-bold tracking-tight uppercase text-sm border-b border-white/10 pb-4">Visit Us</h4>
          <div className="flex flex-col gap-4 text-zinc-400 font-medium">
            <div className="flex items-start gap-4">
              <MapPin size={24} className="text-accent shrink-0" />
              <span>777 Oak St SW<br/>Atlanta, GA 30310</span>
            </div>
            <div className="flex items-center gap-4">
              <Phone size={24} className="text-accent shrink-0" />
              <span>+1 (404) 555-0198</span>
            </div>
          </div>
        </div>

        <div className="col-span-1 flex flex-col gap-6">
          <h4 className="text-zinc-50 font-bold tracking-tight uppercase text-sm border-b border-white/10 pb-4">Hours</h4>
          <div className="flex flex-col gap-4 text-zinc-400 font-medium">
            <div className="flex gap-4">
              <Clock size={24} className="text-accent shrink-0" />
              <div className="flex flex-col gap-1">
                <span className="text-zinc-50">Mon - Thu</span>
                <span>12:00 PM - 11:00 PM</span>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-[24px] shrink-0" />
              <div className="flex flex-col gap-1">
                <span className="text-zinc-50">Fri - Sun</span>
                <span>12:00 PM - 2:00 AM</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-zinc-500 font-mono text-xs">
          &copy; {new Date().getFullYear()} Ike's Cafe & Grill. All rights reserved.
        </p>
        <div className="flex gap-6 text-zinc-500 font-mono text-xs">
          <a href="#" className="hover:text-zinc-300">Privacy Policy</a>
          <a href="#" className="hover:text-zinc-300">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}
