import React, { useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { HiChevronLeft, HiChevronRight } from "react-icons/hi"; // Flèches stylisées
import { motion } from 'framer-motion';

const BoxCarousel = ({ images }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  // Fonctions pour les flèches
  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  return (
    <div className="relative w-full max-w-4xl mx-auto group">
      {/* 1. LA BOÎTE PRINCIPALE */}
      <div 
        className="overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/[0.03] backdrop-blur-xl shadow-2xl" 
        ref={emblaRef}
      >
        <div className="flex">
          {images?.map((img, index) => (
            <div key={index} className="flex-[0_0_100%] min-w-0 relative aspect-video">
              <img 
                src={img} 
                className="w-full h-full object-cover" 
                alt={`Slide ${index}`} 
              />
            </div>
          ))}
        </div>
      </div>

      {/* 2. LES FLÈCHES (Sur les côtés) */}
      <button
        onClick={scrollPrev}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-black/40 border border-white/10 text-white backdrop-blur-md hover:bg-violet-500/50 transition-all opacity-0 group-hover:opacity-100"
      >
        <HiChevronLeft size={24} />
      </button>

      <button
        onClick={scrollNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-black/40 border border-white/10 text-white backdrop-blur-md hover:bg-violet-500/50 transition-all opacity-0 group-hover:opacity-100"
      >
        <HiChevronRight size={24} />
      </button>
    </div>
  );
};

export default BoxCarousel;