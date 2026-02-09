import SkillCard, { ThemeViolet } from "../components/skillsCard.jsx";
import "../App.css";
import { motion } from "framer-motion";
import {
  SiReact,
  SiTailwindcss,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiNodedotjs,
  SiLinkedin,
  SiBlender,
  SiUnrealengine,
  SiPython,
  SiThreedotjs,
} from "react-icons/si";
import { HiUser, HiCode, HiCube, HiAcademicCap } from "react-icons/hi";
import { Github } from "lucide-react";
import { TbBrandCSharp } from "react-icons/tb";

// Variantes pour l'effet de cascade ( appellé Stagger)
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15, // Délai entre chaque carte
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

// Animation commune au survol
const hoverEffect = {
  scale: 1.02,
  borderColor: "rgba(255, 255, 255, 0.4)",
  backgroundColor: "rgba(255, 255, 255, 0.08)",
  transition: { duration: 0.3 },
};

function ProfilFunction() {
  const skills = [
    { name: "React.js", icon: <SiReact />, category: "dev" },
    { name: "Tailwind", icon: <SiTailwindcss />, category: "dev" },
    { name: "JavaScript", icon: <SiJavascript />, category: "dev" },
    { name: "HTML", icon: <SiHtml5 />, category: "dev" },
    { name: "CSS", icon: <SiCss3 />, category: "dev" },
    { name: "Node.js", icon: <SiNodedotjs />, category: "dev" },
    { name: "Python", icon: <SiPython />, category: "dev" },
    { name: "C#", icon: <TbBrandCSharp />, category: "dev" },
    { name: "Three.js", icon: <SiThreedotjs />, category: "dev" },
    { name: "React Three fiber", icon: <SiThreedotjs />, category: "dev" },

    //3D
    { name: "Blender", icon: <SiBlender />, category: "3D" },
    { name: "Unreal Engine", icon: <SiUnrealengine />, category: "3D" },
  ];

  return (
    <section className="min-h-dvh w-full flex items-center justify-center text-white p-4 py-20">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        exit={{ opacity: 0 }}
        className="grid grid-cols-1 lg:grid-cols-[350px_550px] gap-10 lg:gap-20 max-w-5xl mx-auto items-start px-6"
      >
        <motion.div
          variants={itemVariants}
          className="lg:sticky lg:top-10 flex flex-col"
        >
          <motion.div
            whileHover={hoverEffect}
            className="w-full h-auto rounded-3xl border border-white/20 bg-white/5 backdrop-blur-xl items-center justify-center flex flex-col p-8 gap-5 shadow-2xl"
          >
            <div className="relative overflow-hidden rounded-2xl w-full aspect-square">
              <img
                src="./images/0001.png"
                alt="imageProfil"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col text-center justify-center items-center">
              <h2 className="text-3xl font-bold">Moura Antoine</h2>
              <p className="text-blue-500 font-medium">
                Developer and 3D artist
              </p>
              <div className="mt-5 flex gap-5">
                <a
                  href="https://www.linkedin.com/in/antoine-moura-057a89387/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <SiLinkedin
                    size={22}
                    className="hover:text-blue-400 cursor-pointer transition-colors"
                  />
                </a>

                <a
                  href="https://github.com/Ormatori7"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github
                    size={22}
                    className="hover:text-blue-400 cursor-pointer transition-colors"
                  />
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>

        <div className="flex flex-col gap-6 w-full ">
          <motion.div
            variants={itemVariants}
            whileHover={hoverEffect}
            className="rounded-3xl border border-white/20 bg-white/5 backdrop-blur-xl p-8 shadow-2xl "
          >
            <div className="flex items-center gap-3 mb-4">
              <HiUser size={24} className="text-blue-500" />
              <h2 className="text-2xl font-bold text-white tracking-tight">
                About Me
              </h2>
            </div>
            <p className="text-white/70 text-base font-light border-l-2 border-blue-500/20 pl-5 ">
              Passionate{" "}
              <span className="text-white font-medium">Developer</span> and{" "}
              <span className="text-white font-medium">3D Artist</span>{" "}
              dedicated to crafting immersive digital experiences. I bridge the
              gap between code and art by blending software development with 3D
              to bring innovative concepts to life.
            </p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            whileHover={hoverEffect}
            className="rounded-3xl border border-white/20 bg-white/5 backdrop-blur-xl p-8 shadow-2xl "
          >
            <div className="flex items-center gap-3 mb-6">
              <HiAcademicCap size={24} className="text-blue-500" />
              <h3 className="text-xl font-bold text-white tracking-tight">
                Academic Path
              </h3>
            </div>
            <div className="ml-2 space-y-8">
              <div className="relative pl-8 group">
                <div className="absolute left-0 top-2 bottom-[-32px] w-[1px] bg-gradient-to-b from-blue-500 via-blue-500/20 to-transparent"></div>
                <div className="absolute left-[-4px] top-2 w-2 h-2 bg-blue-500 rounded-full ring-4 ring-[#121212]"></div>
                <div className="flex flex-col gap-1">
                  <div className="flex items-center gap-2">
                    <span className="text-blue-500 font-bold text-[10px] uppercase tracking-widest">
                      2024 — NOW
                    </span>
                    <span className="px-2 py-0.5 bg-blue-500/10 text-blue-500 text-[9px] rounded border border-blue-500/20 animate-pulse">
                      IN PROGRESS
                    </span>
                  </div>
                  <h4 className="text-white text-lg font-semibold">
                    Bachelor Informatique
                  </h4>
                  <p className="text-white/40 text-xs font-medium">
                    Sup-de-Vinci, Puteaux
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            whileHover={hoverEffect}
            className="w-full flex flex-col rounded-3xl border border-white/20 bg-white/5 backdrop-blur-xl p-6 shadow-2xl "
          >
            <div className="flex items-center gap-2 mb-4">
              <HiCode size={20} className="text-blue-400" />
              <h3 className="font-bold text-lg">Dev Skills</h3>
            </div>
            <div className="border-b border-white/20 mb-5 w-full"></div>
            <div className="flex flex-wrap gap-2">
              {skills
                .filter((i) => i.category === "dev")
                .map((item, index) => (
                  <SkillCard
                    key={index}
                    texte={item.name}
                    icone={item.icon}
                    bgColor={ThemeViolet}
                  />
                ))}
            </div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            whileHover={hoverEffect}
            className="w-full flex flex-col rounded-3xl border border-white/20 bg-white/5 backdrop-blur-xl p-6 shadow-2xl "
          >
            <div className="flex items-center gap-2 mb-4">
              <HiCube size={20} className="text-blue-500" />
              <h3 className="font-bold text-lg">3D Skills</h3>
            </div>
            <div className="border-b border-white/20 mb-5 w-full"></div>
            <div className="flex flex-wrap gap-2">
              {skills
                .filter((i) => i.category === "3D")
                .map((item, index) => (
                  <SkillCard
                    key={index}
                    texte={item.name}
                    icone={item.icon}
                    bgColor={ThemeViolet}
                  />
                ))}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

export default ProfilFunction;
