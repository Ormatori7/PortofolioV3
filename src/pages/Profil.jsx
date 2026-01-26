import SkillCard from "../components/skillsCard.jsx";
import { motion } from "framer-motion";

function ProfilFunction() {
  //la variable qui contient les skills
  const skills = [
    "React.js",
    "Tailwind",
    "JavaScript",
    "HTML",
    "CSS",
    "Node.js",
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
            <img src="../Images/0001.png" alt="imageProfil" className="w-full h-full object-cover rounded-3xl" />
          </div>
          <div className="h-auto rounded-4xl border border-white/20 bg-white/5 backdrop-blur-xl p-5">
            <h3 className="font-bold">Skills</h3>
            <br />
            <div className="border-b border-white/75 mb-4 w-full"></div>

            <div className="flex flex-wrap gap-3">
              {skills.map((skills, index) => (
                <SkillCard key={index} texte={skills} />
              ))}
            </div>
          </div>
        </div>
        <div
          id=" colonne-droite"
          className="h-full rounded-4xl border border-white/20 bg-white/5 backdrop-blur-xl p-10"
        >
          <h2 className="text-[50px] font-bold leading-none bg-linear-to-r from-white via-violet-500 to-violet-800 bg-clip-text text-transparent">
            About Me
          </h2>
          <br />

          <div className=" border-b border-white/75 mb-4 w-full"></div>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque,
            numquam sunt dignissimos, totam excepturi corrupti in quas
            voluptates iusto dolorum dolore nihil hic. Quibusdam, aperiam
            mollitia ipsum ad officiis numquam. Odio id et sequi eum quos
            ratione obcaecati, rerum dolore sint fuga dignissimos porro. Aperiam
            corrupti natus libero! Ratione, et exercitationem modi architecto
            doloremque libero doloribus deserunt nam aperiam fugit?
          </p>
        </div>
      </motion.div>
    </section>
  );
}

export default ProfilFunction;
