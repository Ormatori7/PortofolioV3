import SkillCard, { ThemeGlass } from "./skillsCard";
import HugeCardFunction from "./HugeProjectCard";
import { AnimatePresence } from "framer-motion";

// telecommande pour retourner sur la page de projects
function Navbar3DProject({ setPage }) {
  return (
    <header className="fixed mt-10 left-1/2 -translate-x-1/2 w-4/5 z-50 backdrop-blur-xl border border-white/10 rounded-4xl transition-all ">
      <button
        onClick={() => setPage("ProjectsFunction")}
        className={
          "px-6 py-2 rounded-full transition-all duration-300  cursor-pointer text-white bg-white/10 m-4 font-bold hover:scale-110"
        }
      >
        Back to Projects
      </button>
    </header>
  );
}

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
    <section className="5 flex flex-col pt-5 min-h-dvh max-w-7xl mx-auto w-full px-4 text-white">
      <Navbar3DProject setPage={setPage} />
      <div className="pt-25">
        <div className=" grid grid-cols-[1fr_1fr] mx-auto h-auto p-10 gap-5">
          <div className="flex flex-col gap-5 justify-center">
            <div>
              <h2 className="text-9xl ">{titre}</h2>
            </div>
            <div>
              <div className="flex flex-wrap gap-3">
                {AppUsed.map((skills, index) => (
                  <SkillCard key={index} texte={skills} bgColor={ThemeGlass} />
                ))}
              </div>
            </div>
            <div>{sousTitre}</div>
          </div>
          <div className="aspect-square rounded-4xl border border-white/20 bg-white/5 backdrop-blur-xl items-center justify-center flex object-contain p-4">
            <img
              src={imagePrincipal} //ajouter cette image dans la partie modularité
              alt="imageProfil"
              className="w-full h-full object-cover rounded-3xl"
            />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-3 w-full min-h-[20dvh] h-auto gap-5">
        <div className="backdrop-blur-xl p-5 rounded-3xl backdrop-blur- border border-white/20 ">
          <div className="underline">{details}</div>
          <div className="pt-5">{texte1}</div>
        </div>
        <div className="backdrop-blur-xl flex flex-col p-5 rounded-3xl border border-white/20">
          <div className="underline">{projectDescription}</div>
          <div className="pt-5">{texte2}</div>
        </div>
        <div className="backdrop-blur-xl p-5 rounded-3xl border border-white/20">
          <div className="underline">{but}</div>
          <div className="pt-5">{texte3}</div>
        </div>
      </div>
      <div className="h-[15dvh]  justify-center items-center flex ">
        <h2 className="text-[4dvh]">{titre2}</h2>
       
      </div>
      <div className=" h-auto grid grid-cols-2 justify-items-center gap-15">
        <AnimatePresence mode="popLayout ">
          {HugeCardData.map((card, index) => (
            <HugeCardFunction key={index} {...card} />
            //en mettant ...card ca me permet de regrouper tt les element comme le texte image etc dans un seul sac que je peux ensuite faire passer et remplir dans ma page
          ))}
        </AnimatePresence>
      </div>
    </section>
  );
}
export default Page3DProject;

// const AppUsed = ["Blender", "Unreal"];
//   const HugeCard = [
//     {
//       titre: "Project test",
//       description: "test description",
//       image: "../images/0001.png",
//       categorie: "dev",
//     },
//     {
//       titre: "Project 2",
//       description:
//         "lfioshfsudghsuifgishi usdfuih uihsfdhifhsidhihf  fej  fsozh izurhi uhizyzljhfsdlj hsdljf hsddlfsh ",
//       image: "../images/0001.png",
//       categorie: "dev",
//     },
//   ];
