function ProjectsCardFunction({ image, categorie, titre, description }) {
  return (
    <div className="bg-zinc-950 border border-white/10 rounded-3xl transition-all flex flex-col text-start w-[350px] h-[350px] mt-10 overflow-hidden text-white">
      <div className="w-full h-auto">
        <img src={image} alt="Image" className="w-full h-full object-cover " />
      </div>

      <div className="p-3">
        <p className="text-violet-600 font-bold">{categorie}</p>
        <h3 className="text-xl font-bold text-white mb-2">{titre}</h3>
        <p className=" text-sm mb-4">{description}</p>
      </div>
    </div>
  );
}
export default ProjectsCardFunction;
