import SkillCard, { ThemeViolet } from "../components/skillsCard.jsx";
import "../App.css";
import { motion } from "framer-motion";
// 2. Le bloc "SI" (Simple Icons)
import {
  // Dev Skills
  SiReact,
  SiTailwindcss,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiNodedotjs,
  SiPython,

  // 3D & Design
  SiBlender,
  SiUnrealengine,

  // Réseaux Sociaux
  SiLinkedin,
  SiDiscord,
} from "react-icons/si";
// 1. Le bloc "HI" (Hero Icons)
import { HiUser, HiCode, HiCube, HiAcademicCap } from "react-icons/hi";

function ProfilFunction() {
  //la variable qui contient les skills
  const skills = [
    // la partie dev
    { name: "React.js", icon: <SiReact />, category: "dev" },
    { name: "Tailwind", icon: <SiTailwindcss />, category: "dev" },
    { name: "JavaScript", icon: <SiJavascript />, category: "dev" },
    { name: "HTML", icon: <SiHtml5 />, category: "dev" },
    { name: "CSS", icon: <SiCss3 />, category: "dev" },
    { name: "Node.js", icon: <SiNodedotjs />, category: "dev" },
    //la partie 3D
    { name: "Blender", icon: <SiBlender />, category: "3D" },
    { name: "Unreal Engine", icon: <SiUnrealengine />, category: "3D" },
  ];
  return (
    <section className="min-h-dvh w-full overflow-hidden flex items-center justify-center text-white">
      <motion.div
        initial={{ y: 50 }} // Commence 50 pixels plus bas et transparent
        animate={{ y: 0 }} // Monte à sa position finale (y: 0) et devient opaque
        exit={{ opacity: 0, y: 50 }}
        transition={{ duration: 0.5, ease: "ease-out" }}
        className="grid grid-cols-[350px_650px] gap-8 max-w-5xl mx-auto"
      >
        <div className="flex flex-col gap-6">
          <div
            id="colonne-gauche"
            className="aspect-square rounded-4xl border border-white/20 bg-white/5 backdrop-blur-xl items-center justify-center flex object-contain p-4"
          >
            <img
              src="../images/0001.png"
              alt="imageProfil"
              className="w-full h-full object-cover rounded-3xl"
            />
          </div>

          <div className="h-auto rounded-4xl border border-white/20 bg-white/5 backdrop-blur-xl p-5">
            <div className="flex items-center gap-3 mb-4">
              <HiCode size={20} className="text-blue-400" />{" "}
              <h3 className="font-bold text-xl">Dev Skills</h3>
            </div>

            <div className="border-b border-white/75 mb-4 w-full"></div>

            <div className="flex flex-wrap gap-3">
              {/* on appelle le tableau skills au debut ensuite on lui met les parametres filter et ensuite map */}
              {skills
                .filter((item) => item.category === "dev")
                .map((item, index) => (
                  <SkillCard
                    key={index}
                    texte={item.name} // On extrait le texte du paquet
                    icone={item.icon} // On extrait l'icône du paquet
                    bgColor={ThemeViolet}
                  />
                ))}
            </div>
            <div className="flex items-center gap-3 mb-4 mt-[15px]">
              <HiCube size={20} className="text-blue-500" />{" "}
              <h3 className="font-bold text-xl">3D Skills</h3>
            </div>

            <div className="border-b border-white/75 mb-4 w-full"></div>

            <div className="flex flex-wrap gap-3">
              {/* on appelle le tableau skills au debut ensuite on lui met les parametres filter et ensuite map */}
              {skills
                .filter((item) => item.category === "3D")
                .map((item, index) => (
                  <SkillCard
                    key={index}
                    texte={item.name} // On extrait le texte du paquet
                    icone={item.icon} // On extrait l'icône du paquet
                    bgColor={ThemeViolet}
                  />
                ))}
            </div>
          </div>
        </div>
        <div
          id=" colonne-droite"
          className="h-full rounded-4xl border border-white/20 bg-white/5 backdrop-blur-xl p-10"
        >
          {/* --- SECTION ABOUT ME --- */}
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-6">
              <HiUser size={28} className="text-blue-500" />
              <h2 className="text-3xl font-bold text-white tracking-tight">
                About Me
              </h2>
            </div>

            <div className="space-y-4">
              <p className="text-white/70 leading-relaxed text-lg font-light border-l-2 border-blue-500/20 pl-6 py-1">
                {/* Texte avec une mise en avant subtile de certains mots */}
                Passionné par le{" "}
                <span className="text-white font-medium">
                  développement web
                </span>{" "}
                et le{" "}
                <span className="text-white font-medium">game design</span>, je
                m'efforce de créer des interfaces où le code rencontre l'art.
                Mon approche mélange rigueur technique et créativité visuelle.
              </p>
            </div>
          </div>

          
          <div>
            <div className="flex items-center gap-3 mb-10">
              <HiAcademicCap size={28} className="text-blue-500" />
              <h3 className="text-2xl font-bold text-white tracking-tight">
                Academic Path
              </h3>
            </div>

            {/* Timeline simplifiée : on retire la carte massive pour quelque chose de plus léger */}
            <div className="ml-3 space-y-12">
              <div className="relative pl-10 group">
                {/* La ligne verticale : plus fine et avec un dégradé qui s'estompe en bas */}
                <div className="absolute left-0 top-2 bottom-[-48px] w-[1px] bg-gradient-to-b from-blue-500 via-blue-500/20 to-transparent"></div>

                {/* un pointt */}
                <div className="absolute left-[-4px] top-2 w-2 h-2 bg-blue-500 rounded-full ring-4 ring-[#121212]"></div>

                <div className="flex flex-col gap-1 transition-transform group-hover:translate-x-1 duration-300">
                  <div className="flex items-center gap-3">
                    <span className="text-blue-500 font-bold text-xs uppercase tracking-widest">
                      2024 — Présent
                    </span>
                    {/* Un petit badge de statut */}
                    <span className="px-2 py-0.5 bg-blue-500/10 text-blue-500 text-[10px] rounded border border-blue-500/20 animate-flicker">
                      EN COURS
                    </span>
                  </div>

                  <h4 className="text-white text-xl font-semibold mt-1">
                    Bachelor Informatique
                  </h4>

                  <p className="text-white/40 text-sm font-medium">
                    Sup-de-Vinci, Puteaux
                  </p>

                  <p className="text-white/60 text-sm mt-3 leading-relaxed max-w-lg">
                    Apprentissage approfondi de l'architecture logicielle et du
                    développement Fullstack.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export default ProfilFunction;
