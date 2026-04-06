"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "@phosphor-icons/react";
import { useEffect, useRef } from "react";
import Link from "next/link";

const FRAME_COUNT = 171;
const FPS = 15;

function HeroContentBox({ delay }: { delay: number }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ 
        type: "spring", 
        stiffness: 50, 
        damping: 20, 
        delay: delay
      }}
      className="max-w-xl mx-auto md:mx-0 bg-zinc-950/30 backdrop-blur-2xl border border-white/10 shadow-2xl rounded-[2.5rem] p-6 md:p-12 flex flex-col items-center text-center md:items-start md:text-left"
    >
      <div className="inline-block border border-accent/20 bg-accent/10 px-4 py-1.5 rounded-full text-accent text-xs font-bold uppercase tracking-widest mb-6 md:mb-8 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]">
        Atlanta&#x27;s Premier African Lounge
      </div>
      <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-7xl tracking-tighter leading-[0.95] text-zinc-50 font-bold mb-6 md:mb-8">
        Taste the <br className="hidden md:block"/>
        <span className="text-zinc-400 italic">Rhythm</span> of <br/>
        Africa.
      </h1>
      <p className="text-sm md:text-base text-zinc-300 leading-relaxed max-w-[45ch] mb-8 md:mb-10">
        Elevated dining wrapped in luxury. From authentic Jollof and Suya to exquisite signature cocktails, Ike's Cafe and Grill offers a cinematic culinary journey.
      </p>

      <div className="flex flex-col sm:flex-row gap-4 items-center w-full sm:w-auto">
        <motion.button 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
          className="group flex items-center gap-3 bg-accent hover:bg-amber-500 text-zinc-950 px-8 py-4 rounded-full text-sm font-bold tracking-tight transition-colors w-full sm:w-auto justify-center"
        >
          Reserve a Table
          <ArrowRight weight="bold" className="group-hover:translate-x-1 transition-transform" />
        </motion.button>
        <Link href="/menu" className="w-full sm:w-auto">
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center gap-3 bg-zinc-900/40 border border-zinc-700 hover:bg-zinc-800 text-zinc-50 px-8 py-4 rounded-full text-sm font-bold tracking-tight transition-colors w-full justify-center"
          >
            View Menu
          </motion.button>
        </Link>
      </div>
    </motion.div>
  );
}

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  const imagesQueue = useRef<HTMLImageElement[]>([]);
  const loadedCount = useRef(0);
  const currentDrawIndex = useRef(0);
  const lastDrawTime = useRef(0);

  // Progressive Pre-loader Engine (Sequential)
  useEffect(() => {
    let isActive = true;

    const loadSequentially = async () => {
      imagesQueue.current = new Array(FRAME_COUNT);

      for (let i = 1; i <= FRAME_COUNT; i++) {
        if (!isActive) break;

        await new Promise<void>((resolve) => {
          const img = new Image();
          const paddedIndex = i.toString().padStart(3, '0');
          img.src = `/frames/frame_${paddedIndex}.webp`;

          img.onload = () => {
            if (isActive) {
              imagesQueue.current[i - 1] = img;
              loadedCount.current = Math.max(loadedCount.current, i);
            }
            resolve();
          };

          img.onerror = () => {
            resolve(); 
          };
        });
      }
    };

    loadSequentially();

    return () => {
      isActive = false;
    };
  }, []);

  // Frame Sequence Player Engine
  useEffect(() => {
    if (!canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d', { alpha: false }); 
    if (!ctx) return;

    // Hardcode native resolution explicitly
    // CSS object-cover/object-contain handles all responsive logic cheaper
    canvas.width = 800;
    canvas.height = 450;

    let animationFrameId: number;

    const render = (time: number) => {
      if (time - lastDrawTime.current >= 1000 / FPS) {
        const targetFrame = currentDrawIndex.current;
        const img = imagesQueue.current[targetFrame];
        
        if (img && img.complete && img.naturalWidth > 0) {
          ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

          const nextIndex = (targetFrame + 1) % FRAME_COUNT;
          if (imagesQueue.current[nextIndex] && imagesQueue.current[nextIndex].complete) {
              currentDrawIndex.current = nextIndex;
          } else if (loadedCount.current === FRAME_COUNT) {
              currentDrawIndex.current = nextIndex;
          }
        }

        lastDrawTime.current = time;
      }

      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <section className="relative min-h-[100dvh] w-full flex flex-col md:flex-row justify-start items-center bg-zinc-950 overflow-hidden z-10">
      
      {/* 
        Responsive Image Sequence Container 
        Mobile: Uncropped horizontal aspect-video block (prevents telescope zoom)
        Desktop: Full immersive background coverage
      */}
      <div className="relative w-full mt-24 md:mt-0 aspect-video z-0 md:absolute md:inset-0 md:h-full">
        <canvas 
          ref={canvasRef} 
          className="w-full h-full object-cover block" 
        />
        {/* Dark overlay for readability - Lighter on mobile since text sits below it */}
        <div className="absolute inset-0 bg-black/10 md:bg-black/40 z-10" />
      </div>

      <div className="w-full flex-1 flex flex-col justify-center relative z-20 px-4 md:px-16 mx-auto mt-8 md:mt-0 pb-12 md:top-6">
        <div className="max-w-[1400px] w-full">
          
          {/* Mobile Only: Renders with 0s delay natively via CSS */}
          <div className="block md:hidden">
            <HeroContentBox delay={0} />
          </div>

          {/* Desktop Only: Renders with 22.8s cinematic delay natively via CSS */}
          <div className="hidden md:block">
            <HeroContentBox delay={22.8} />
          </div>

        </div>
      </div>
    </section>
  );
}
