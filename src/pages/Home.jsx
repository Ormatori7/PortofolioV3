import { motion } from "framer-motion";

function BoutonVersProfil({ texte, action }) {
  return (
    <motion.button
      whileHover={{
        scale: 1.05,
        boxShadow: "0px 0px 20px rgba(139, 92, 246, 0.3)",
      }}
      whileTap={{ scale: 0.95 }}
      onClick={action}
      className="relative overflow-hidden group bg-violet-800/40 backdrop-blur-xl border border-white/20 px-10 py-4 rounded-full text-white text-sm font-medium transition-all cursor-pointer"
    >
      {/* Effet de brillance au survol */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
      <span className="relative z-10 uppercase tracking-widest">{texte}</span>
    </motion.button>
  );
}

function Acceuil({ setPage }) {
  return (
    <section className="relative min-h-dvh w-full flex flex-col items-center justify-center px-4 overflow-hidden">
      {/* --- FOND DYNAMIQUE --- */}
      {/* Grille de fond subtile */}
      <div
        className="absolute inset-0 z-0 opacity-20"
        style={{
          backgroundImage: `linear-gradient(#ffffff10 1px, transparent 1px), linear-gradient(90deg, #ffffff10 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
        }}
      />

      {/* Orbes de lumière floues (Ambient Glow) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-violet-600/20 rounded-full blur-[120px] z-0 animate-pulse" />
      <div className="absolute top-1/4 right-1/4 w-[300px] h-[300px] bg-blue-600/10 rounded-full blur-[100px] z-0" />

      {/* --- CONTENU --- */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 text-center"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="inline-block px-4 py-1.5 mb-6 rounded-full border border-violet-500/30 bg-violet-500/10 text-violet-400 text-xs font-bold uppercase tracking-widest"
        >
          Available for new opportunities and 3D challenges
        </motion.div>

        <h1 className="text-6xl md:text-8xl font-black text-white mb-6 tracking-tighter">
          Welcome in my
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-violet-600 to-indigo-400 animate-gradient-x">
            portofolio
          </span>
        </h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.6 }}
          transition={{ delay: 0.4 }}
          className="text-white text-lg md:text-xl max-w-2xl mx-auto mb-12 font-light italic"
        >
          "Where <span className="text-white font-normal">code </span> meet{" "}
          <span className="text-white font-normal"> 3D</span>."
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <BoutonVersProfil
            texte="About me"
            action={() => setPage("ProfilFunction")}
          />
        </motion.div>
      </motion.div>
    </section>
  );
}

export default Acceuil;
