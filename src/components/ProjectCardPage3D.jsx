import SkillCard, { ThemeGlass } from "./skillsCard";
import HugeCardFunction from "./HugeProjectCard";
import { AnimatePresence, motion } from "framer-motion";


const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.5, ease: "easeOut" } },
};

function Page3DProject({ setPage, datapage }) {
  const {
    titre,
    AppUsed,
    sousTitre,
    imagePrincipal,
    projectDescription,
    texte1,
    details,
    texte2,
    but,
    texte3,
    titre2,
    HugeCardData,
  } = datapage;

  return (
    <motion.section
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="relative flex flex-col pt-40 pb-20 min-h-screen max-w-6xl mx-auto w-full px-6 text-white"
    >
      <div
        className="fixed inset-0 z-[-1] opacity-20"
        style={{
          backgroundImage: `linear-gradient(#ffffff10 1px, transparent 1px), linear-gradient(90deg, #ffffff10 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
        }}
      />
      <div className="fixed top-[-10%] left-[-10%] w-[500px] h-[500px] bg-violet-600/10 rounded-full blur-[120px] z-[-1]" />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24 items-center">
        <motion.div variants={itemVariants} className="flex flex-col gap-6">
          <h1 className="text-6xl md:text-7xl font-bold tracking-tight text-white">
            {titre}
          </h1>
          <div className="flex flex-wrap gap-2">
            {AppUsed.map((skill, index) => (
              <SkillCard key={index} texte={skill} bgColor={ThemeGlass} />
            ))}
          </div>
          <p className="text-lg text-white/60 leading-relaxed font-light border-l-2 border-violet-500/30 pl-6 italic">
            {sousTitre}
          </p>
        </motion.div>

        <motion.div
          variants={itemVariants}
          whileHover={{ scale: 1.01 }}
          className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-3 shadow-2xl"
        >
          <img
            src={imagePrincipal}
            alt={titre}
            className="w-full aspect-video lg:aspect-square object-cover rounded-2xl grayscale-[0.2] hover:grayscale-0 transition-all duration-700"
          />
        </motion.div>
      </div>

      <motion.div
        variants={itemVariants}
        className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-32"
      >
        {[
          { label: details, content: texte1 },
          { label: projectDescription, content: texte2 },
          { label: but, content: texte3 },
        ].map((box, i) => (
          <div
            key={i}
            className="bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-3xl p-8 hover:bg-white/[0.05] transition-all group"
          >
            <span className="text-[10px] uppercase tracking-[0.3em] text-violet-400 font-bold block mb-4 group-hover:text-violet-300">
              {box.label}
            </span>
            <p className="text-white/70 font-light leading-relaxed text-sm">
              {box.content}
            </p>
          </div>
        ))}
      </motion.div>

      <motion.div
        variants={itemVariants}
        className="flex flex-col items-center mb-16"
      >
        <h2 className="text-3xl font-bold mb-4">{titre2}</h2>
        <div className="w-16 h-1 bg-violet-600 rounded-full" />
      </motion.div>

      <div className="flex flex-col items-center gap-20 w-full">
        <AnimatePresence mode="popLayout">
          {HugeCardData.map((card, index) => (
            <motion.div key={index} variants={itemVariants} layout>
              <HugeCardFunction {...card} position={index} />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </motion.section>
  );
}

export default Page3DProject;
