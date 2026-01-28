import { useState } from "react";
import ProjectsCardFunction from "../components/projectsCard";
import { AnimatePresence } from "framer-motion";

function ProjectsFunction({ setPage }) {
  const [cardID, setcardID] = useState("tous");
  const projectsCard = [
    {
      titre: "Fnaf remake",
      description: "A remake of the masterpiece game Five Nights At Freddy's. ",
      image: "../images/FnafImage/freddy.png",
      categorie: "3D",
      pageTarget: "PageFnaf",
    },
    {
      titre: "Project 2",
      description:
        "lfioshfsudghsuifgishi usdfuih uihsfdhifhsidhihf  fej  fsozh izurhi uhizyzljhfsdlj hsdljf hsddlfsh ",
      image: "../images/0001.png",
      categorie: "dev",
      pageTarget: "PageProject1",
    },
    {
      titre: "Project 3",
      description: "test description",
      image: "../images/0001.png",
      categorie: "3D",
      pageTarget: "PageProject1",
    },
    {
      titre: "Project 3",
      description: "test description",
      image: "../images/0001.png",
      categorie: "3D",
      pageTarget: "PageProject1",
    },
  ];

  //la variable de filtre ici pour afficher seulement les cards correspondants
  const projetsFiltres =
    cardID === "tous"
      ? projectsCard // SI l'étiquette est "tous", on prend TOUT le sac
      : projectsCard.filter((projet) => projet.categorie === cardID); // SINON, on filtre par catégorie

  return (
    <section className="overflow-hidden flex flex-col text-white">
      <div className="max-w-7xl mx-auto w-full px-4">
        <div className="min-h-[30vh]  flex justify-between items-end  w-full">
          <div className="flex flex-col gap-2">
            <h2 className="text-[75px] font-bold bg-linear-to-r from-white via-violet-500 to-violet-800 bg-clip-text text-transparent pb-2 ">
              My projects
            </h2>
            <p className="text-white/500 text-[25px]">Some of my projects I worked on</p>
          </div>

          <div className="flex bg-white/[0.03] backdrop-blur-2xl border border-white/10 p-1 rounded-2xl shadow-lg shadow-black/50">
            <button
              onClick={() => setcardID("tous")}
              className={`px-6 py-2   cursor-pointer ${
                cardID === "tous"
                  ? "px-6 py-2 bg-white/10 rounded-xl text-white " //si on est sur la categorie tous
                  : "hover:text-white  text-white/50  transition-all duration-300" // si on est sur une autre categorie
              }`}
            >
              All
            </button>

            <button
              onClick={() => setcardID("dev")}
              className={`px-6 py-2  cursor-pointer ${
                cardID === "dev"
                  ? "px-6 py-2 bg-white/10 rounded-xl text-white " //si on est sur la categorie dev
                  : "hover:text-white text-white/50 transition-all duration-300" // si on est sur une autre categorie
              }`}
            >
              Developement
            </button>
            <button
              onClick={() => setcardID("3D")}
              className={`px-6 py-2   cursor-pointer ${
                cardID === "3D"
                  ? "px-6 py-2 bg-white/10 rounded-xl " //si on est sur la categorie 3D
                  : "hover:text-white  text-white/50  transition-all duration-300 " // si on est sur une autre categorie
              }`}
            >
              3D modelisation
            </button>
          </div>
        </div>

        <div className=" min-h-screen grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center py-10">
          <AnimatePresence mode="popLayout">
            {projetsFiltres.map(
              ({ titre, description, image, categorie, pageTarget }, index) => (
                <ProjectsCardFunction
                  key={index}
                  titre={titre}
                  description={description}
                  image={image}
                  categorie={categorie}
                  onClick={() => setPage(pageTarget)}
                />
              ),
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
export default ProjectsFunction;
