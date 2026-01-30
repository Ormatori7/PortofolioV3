import { motion } from "framer-motion";

function HugeCardFunction({ image, categorie, titre, description, position }) {
  // Permet d'alterner l'ordre image/texte une fois sur deux
  const isEven = position % 2 === 0;

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      whileHover={{ y: -5 }}
      
      className={`group relative bg-white/[0.02] backdrop-blur-3xl border border-white/5 rounded-[2.5rem] flex flex-col md:flex-row ${
        isEven ? "md:flex-row" : "md:flex-row-reverse"
      } w-full max-w-[950px] h-auto md:h-[420px] overflow-hidden text-white shadow-2xl transition-all duration-500 hover:border-violet-500/30 hover:shadow-violet-900/20`}
    >
      
      
      <div className="relative w-full md:w-1/2 h-72 md:h-full overflow-hidden p-6 flex items-center justify-center">
        
        
        <div 
          className="absolute inset-0 bg-cover bg-center blur-2xl scale-110 opacity-30 transition-all duration-1000 group-hover:scale-125 group-hover:opacity-50"
          style={{ backgroundImage: `url(${image})` }}
        />
        
         <div className="absolute inset-0 bg-black/20" />

        
        <motion.img
          src={image}
          alt={titre}
          
          whileHover={{ scale: 1.03 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
         
          className="relative z-10 w-full h-full object-contain rounded-2xl drop-shadow-2xl transition-all duration-500"
        />
      </div>

      
      <div className="p-8 md:p-12 md:py-14 flex flex-col justify-center flex-1 space-y-5 relative z-20">
        <div>
          <span className="px-4 py-1.5 bg-violet-500/10 border border-violet-500/20 rounded-full text-[11px] font-black uppercase tracking-[0.3em] text-violet-300">
            {categorie}
          </span>
        </div>

        <h3 className="text-3xl md:text-5xl font-black text-white leading-tight tracking-tighter group-hover:text-violet-300 transition-colors duration-300">
          {titre}
        </h3>

        
        <p className="text-white/60 text-sm md:text-base leading-relaxed font-light">
          {description}
        </p>
        
        
        
          <motion.div 
            className="w-12 h-[2px] bg-violet-500 group-hover:bg-white transition-colors" 
            whileHover={{ width: 60 }} 
          />
        
      </div>

      {/* Lueur d'ambiance qui change de côté selon l'index */}
      <div className={`absolute ${isEven ? "-left-32 top-0" : "-right-32 bottom-0"} w-80 h-80 bg-violet-600/20 rounded-full blur-[120px] opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none mix-blend-screen`} />
    </motion.div>
  );
}

export default HugeCardFunction;