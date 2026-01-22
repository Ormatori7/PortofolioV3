import { motion } from "framer-motion";

function ProjectsCardFunction({ image, categorie, titre, description }) {
  return (
    <motion.div
      layout // Permet aux cartes restantes de se déplacer fluidement vers leur nouvelle place
      initial={{ opacity: 0, y: 50 }} // Commence 50 pixels plus bas et transparent
      animate={{ opacity: 1, y: 0 }} // Monte à sa position finale (y: 0) et devient opaque
      exit={{ opacity: 0, y: 50 }}
      transition={{ duration: 0.4, ease: "ease-out " }}
      className="bg-zinc-900 border border-white/10 rounded-3xl  flex flex-col text-start w-[350px] h-[350px] mt-10 overflow-hidden text-white "
    >
      <div className="w-full h-48">
        <img src={image} alt="Image" className="w-full h-full object-cover " />
      </div>

      <div className="p-5">
        <p className="text-violet-400 font-bold">{categorie}</p>
        <h3 className="text-xl font-bold text-white mb-2">{titre}</h3>
        <p className=" text-sm mb-4">{description}</p>
      </div>
    </motion.div>
  );
}
export default ProjectsCardFunction;
