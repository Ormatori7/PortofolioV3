import ProjectsCardFunction from "../components/projectsCard";

function TelecommandeProjects(texte, action) {
  return (
    <>
      {" "}
      {/* Le parent unique commence ici */}
      <button onClick={() => setPage("Acceuil")} className="...">
        Tous
      </button>
      <button className="...">Dév Web</button>
      <button className="...">Modélisation 3D</button>
      <button className="...">Tous</button>
    </> // Le parent unique s'arrête ici
  );
}

function ProjectsFunction() {
  const projectsCard = [
    {
      titre: "project test",
      description: "test description",
      image: "../images/0001.png",
      categorie: "dev",
    },
    {
      titre: "project 2",
      description: "lfioshfsudghsuifgishi usdfuih uihsfdhifhsidhihf iusdiuhfish dihfsiduihs iusdhuif huish ezrh uzrehrzhei hzhuirh zeuihrui zehui hrzeuihz reiuhih zriuhiurzh iu hzrihiz rerg iurzeh iuzerhzri uah",
      image: "../images/0001.png",
       categorie: "dev",
    },
    {
      titre: "project 3",
      description: "test description",
      image: "../images/0001.png",
       categorie: "3D",
    },
    {
      titre: "project 3",
      description: "test description",
      image: "../images/0001.png",
      categorie: "3D",
    },
  ];
  return (
    <section className="overflow-hidden flex flex-col text-white">
      <div className="max-w-7xl mx-auto w-full px-4">
        <div className="min-h-[30vh]  flex justify-between items-end bg-blue-500 w-full">
          <div className="flex flex-col gap-2">
            <h2 className="text-5xl font-bold text-white">My projects</h2>
            <p className="text-white/50">Some of my projects I worked on</p>
          </div>

          <div className="flex bg-white/5 backdrop-blur-md border border-white/10 p-1 rounded-2xl">
            <button className="px-6 py-2 bg-white/10 rounded-xl text-white">
              Tous
            </button>
            <button className="px-6 py-2 text-white/50 hover:text-white">
              Dév Web
            </button>
            <button className="px-6 py-2 text-white/50 hover:text-white">
              Modélisation 3D
            </button>
          </div>
        </div>

        <div className=" min-h-screen grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center py-10 ">
          {projectsCard.map(({ titre, description, image, categorie }, index) => (
            <ProjectsCardFunction
              key={index}
              titre={titre}
              description={description}
              image={image}
              categorie={categorie}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
export default ProjectsFunction;
