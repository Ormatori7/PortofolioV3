function TelecommandeProjects(texte, action) {
  return (
    <>
      {" "}
      {/* Le parent unique commence ici */}
      <button onClick={() => setPage("Acceuil")} className="...">Tous</button>
      <button className="...">Dév Web</button>
      <button className="...">Modélisation 3D</button>
    </> // Le parent unique s'arrête ici
  );
}



function ProjectsFunction() {
  return (
    <section className="overflow-hidden flex text-white">
      <div className="w-full py-25 bg-red-500">
        <div className="max-w-[1500px] mx-auto flex justify-between items-end px-8 bg-blue-500">
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
      </div>
    </section>
  );
}
export default ProjectsFunction;
