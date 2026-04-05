"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "@phosphor-icons/react";
import { useEffect, useRef, useState } from "react";

const FRAME_COUNT = 171;
const FPS = 15;

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [images, setImages] = useState<HTMLImageElement[]>([]);
  const frameRef = useRef(0);
  const lastDrawTime = useRef(0);

  // Preload frames into memory
  useEffect(() => {
    const loadedImages: HTMLImageElement[] = [];

    for (let i = 1; i <= FRAME_COUNT; i++) {
      const img = new Image();
      const paddedIndex = i.toString().padStart(3, '0');
      img.src = `/frames/frame_${paddedIndex}.webp`;
      loadedImages.push(img);
    }
    
    setImages(loadedImages);
  }, []);

  // Frame Sequence Player Engine
  useEffect(() => {
    if (!canvasRef.current || images.length === 0) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;

    const render = (time: number) => {
      if (time - lastDrawTime.current > 1000 / FPS) {
        const img = images[frameRef.current];
        
        if (img && img.complete && img.naturalWidth > 0) {
          // Calculate object-cover dimensions
          const canvasRatio = canvas.width / canvas.height;
          const imgRatio = img.naturalWidth / img.naturalHeight;
          let drawWidth = canvas.width;
          let drawHeight = canvas.height;
          let offsetX = 0;
          let offsetY = 0;

          if (canvasRatio > imgRatio) {
            drawHeight = canvas.width / imgRatio;
            offsetY = (canvas.height - drawHeight) / 2;
          } else {
            drawWidth = canvas.height * imgRatio;
            offsetX = (canvas.width - drawWidth) / 2;
          }

          ctx.clearRect(0, 0, canvas.width, canvas.height);
          ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
        }

        frameRef.current = (frameRef.current + 1) % FRAME_COUNT;
        lastDrawTime.current = time;
      }

      animationFrameId = requestAnimationFrame(render);
    };

    // Handle high resolution display sizing
    const handleResize = () => {
      const dpr = window.devicePixelRatio || 1;
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      ctx.scale(dpr, dpr);
      
      // Force an immediate draw after resize to prevent flickering
      lastDrawTime.current = 0; 
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    
    animationFrameId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
    };
  }, [images]);

  return (
    <section className="relative min-h-[100dvh] w-full flex items-center justify-start pt-24 pb-12 px-4 md:px-16 overflow-hidden z-10">
      
      {/* Full Bleed Image Sequence Canvas */}
      <div className="absolute inset-0 z-0 bg-zinc-950">
        <canvas 
          ref={canvasRef} 
          className="w-full h-full block" 
        />
        {/* Dark overlay for readability */}
        <div className="absolute inset-0 bg-black/40 z-10" />
      </div>

      <div className="max-w-[1400px] mx-auto w-full relative z-20 mt-16 md:mt-0">
        
        {/* Glass Block Container with Bottom-to-Top Reveal */}
        <motion.div 
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            type: "spring", 
            stiffness: 50, 
            damping: 20, 
            delay: 22.8 // Delay for exactly 2 loops of 11.4s each
          }}
          className="max-w-xl bg-zinc-950/30 backdrop-blur-2xl border border-white/10 shadow-2xl rounded-[2.5rem] p-8 md:p-12 flex flex-col items-start"
        >
          <div className="inline-block border border-accent/20 bg-accent/10 px-4 py-1.5 rounded-full text-accent text-xs font-bold uppercase tracking-widest mb-8 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]">
            Atlanta&#x27;s Premier African Lounge
          </div>
          <h1 className="text-5xl md:text-7xl lg:text-7xl tracking-tighter leading-[0.95] text-zinc-50 font-bold mb-8">
            Taste the <br/>
            <span className="text-zinc-400 italic">Rhythm</span> of <br/>
            Africa.
          </h1>
          <p className="text-base text-zinc-300 leading-relaxed max-w-[45ch] mb-10">
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
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center gap-3 bg-zinc-900/40 border border-zinc-700 hover:bg-zinc-800 text-zinc-50 px-8 py-4 rounded-full text-sm font-bold tracking-tight transition-colors w-full sm:w-auto justify-center"
            >
              View Menu
            </motion.button>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
