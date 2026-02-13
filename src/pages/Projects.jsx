import { useState, useEffect } from "react";
import ProjectsCardFunction from "../components/projectsCard";
import { AnimatePresence, motion } from "framer-motion";
import { supabase } from "../supabaseClient";

// Variantes pour l'apparition en cascade du header et des filtres
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1, // Délai entre chaque élément (titre, texte, boutons)
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

function ProjectsFunction({ setPage }) {
  const [cardID, setcardID] = useState("tous"); //pour la telecommande pour tt montrer au début
  const [projectsCardData, setProjectsCardData] = useState(null);
  useEffect(() => {
    const chargementDonnes = async () => {
      const { data: cardinfo, error: cardError } = await supabase
        .from("pageProject")
        .select("*");
      // pas de .eq ni de single car on veut tt
      if (!cardError) {
        setProjectsCardData(cardinfo);
      } else {
        console.error("Problème de chargement", cardError.message);
      }
    };
    chargementDonnes();
  }, []);

  //------BARIERE DE SECURITE POUR LE CHARGEMENT DES DATA-----
  if (!projectsCardData) {
    return (
      <div className="text-white text-center pt-50 pb-20">
        Chargement des projets...
      </div>
    );
  }

  //cerveau du systeme de filtrage
  // le ? et le / => comme if/else simplifier
  const projetsFiltres =
    cardID === "tous" // est ce que cardID vaut tous? si oui alors ... et si non alors ...
      ? projectsCardData //si vrai
      : projectsCardData.filter((projet) => projet.categorie === cardID); // si faux

  return (
    <section className="overflow-hidden flex flex-col text-white">
      <div className="max-w-7xl mx-auto w-full px-4">
        {/* headers et filtres avec animation entrée */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="min-h-[30vh] flex flex-col md:flex-row justify-between items-end w-full gap-8 py-10"
        >
          <div className="flex flex-col gap-2">
            <motion.h2
              variants={itemVariants}
              className="text-[60px] md:text-[75px] font-bold bg-linear-to-r from-white via-violet-500 to-violet-800 bg-clip-text text-transparent pb-2 leading-tight"
            >
              My projects
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="text-white/50 text-[20px] md:text-[25px]"
            >
              Some of my projects I worked on
            </motion.p>
          </div>

          {/* partie des boutons de filtres */}
          <motion.div
            variants={itemVariants}
            className="flex bg-white/[0.03] backdrop-blur-2xl border border-white/10 p-1 rounded-2xl shadow-lg shadow-black/50"
          >
            {/* tableau pour créer les boutons et les assigner a des noms  */}
            {["tous", "dev", "3D"].map((cat) => (
              <motion.button
                key={cat}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setcardID(cat)}
                className={`px-6 py-2 rounded-xl cursor-pointer transition-all duration-300 relative ${
                  cardID === cat
                    ? "text-white"
                    : "text-white/50 hover:text-white/80"
                }`}
              >
                {cardID === cat && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 bg-white/10 rounded-xl z-[-1]"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                {cat === "tous"
                  ? "All"
                  : cat === "dev"
                    ? "Development"
                    : "3D project"}
              </motion.button>
            ))}
          </motion.div>
        </motion.div>

        {/* GRILLE DES PROJETS */}
        <motion.div
          layout // Permet aux cartes de glisser fluidement quand on change de filtre
          className="min-h-screen grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center py-10"
        >
          <AnimatePresence mode="popLayout">
            {projetsFiltres.map(
              ({ titre, description, image, categorie, pageTarget }, index) => (
                <motion.div
                  key={titre} // Utiliser le titre ou un ID unique pour que layout fonctionne
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{
                    opacity: 0,
                    scale: 0.8,
                    transition: { duration: 0.2 },
                  }}
                  transition={{ duration: 0.4 }}
                  whileHover={{ y: -10 }} // Animation de hover sur la carte entière
                >
                  <ProjectsCardFunction
                    titre={titre}
                    description={description}
                    image={image}
                    categorie={categorie}
                    onClick={() => setPage(pageTarget)}
                  />
                </motion.div>
              ),
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}

export default ProjectsFunction;
