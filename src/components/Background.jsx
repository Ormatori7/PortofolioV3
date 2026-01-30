import React from 'react';
import { motion } from 'framer-motion';

const Background = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-[#020202]">
      {/* 1. Texture de Grain (Look Cinématique) */}
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')] contrast-150" />

      {/* 2. Grille de Perspective (Subtile & Fixe) */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

      {/* 🟣 Néon Violet (Haut Gauche - Animation de respiration) */}
      <motion.div
        animate={{
          scale: [1, 1.15, 1],      // Grossit et rétrécit
          opacity: [0.2, 0.4, 0.2], // Brille et s'estompe
        }}
        transition={{ 
          duration: 8,              // Temps d'un cycle complet
          repeat: Infinity,         // En boucle
          ease: "easeInOut" 
        }}
        className="absolute -top-[5%] -left-[5%] w-[45%] h-[45%] rounded-full bg-violet-600/50 blur-[100px]"
      />
      
      {/* 🔵 Néon Bleu (Bas Droite - Animation décalée) */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.35, 0.2],
        }}
        transition={{ 
          duration: 12,             // Vitesse différente pour éviter la symétrie
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
        className="absolute -bottom-[10%] -right-[5%] w-[50%] h-[50%] rounded-full bg-blue-500/50 blur-[120px]"
      />

      {/* ✨ Point de lumière central (Fixe) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[30%] h-[30%] bg-indigo-500/10 blur-[150px]" />
    </div>
  );
};

export default Background;