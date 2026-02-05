import { motion } from "framer-motion";

function HugeDevCard({
  code,
  language,
  categorie,
  titre,
  description,
  position,
}) {
  // Permet d'alterner l'ordre code/texte une fois sur deux
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
      {/* --- PARTIE GAUCHE L'EDITEUR --- */}
      <div className="relative w-full md:w-1/2 h-80 md:h-full p-6">
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="relative z-10 w-full h-full bg-[#0d0d0d]/90 backdrop-blur-md border border-white/10 rounded-2xl overflow-hidden flex flex-col shadow-2xl"
        >
          {/* Barre de titre en mode mac */}
          <div className="flex items-center gap-1.5 px-4 py-3 bg-white/5 border-b border-white/5">
            <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]" />
            <div className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
            <div className="w-2.5 h-2.5 rounded-full bg-[#27c93f]" />
            <span className="ml-auto text-[10px] text-white/30 font-mono tracking-widest uppercase">
              {language || "pas de language"}
            </span>
          </div>

          {/* Zone du code */}
          <div className="p-5 font-mono text-[13px] leading-relaxed overflow-x-auto custom-scrollbar h-full text-left bg-[#0d0d0d]">
            {/* balise pre sert à afficher du texte  "préformaté" */}
            {/* whitespace-pre-wrap => pour le retour a la ligne */}
            <pre className="text-violet-200/90 whitespace-pre-wrap"> 
              <code>{code || "# pas de code"}</code>
              {/* les || c'est pour dire s'il n'y a rien alors met ca */}
            </pre>
          </div>
        </motion.div>
      </div>
      {/* --- PARTIE DROITE L'EDITEUR --- */}
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
      <div
        className={`absolute ${isEven ? "-left-32 top-0" : "-right-32 bottom-0"} w-80 h-80 bg-violet-600/20 rounded-full blur-[120px] opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none mix-blend-screen`}
      />
    </motion.div>
  );
}

export default HugeDevCard;
