function ProjectsCardFunction({ titre, description, image }) {
  return (
    <div className="bg-white/5 border border-white/10 rounded-3xl p-6 transition-all flex flex-col text-start w-[350px] h-[350px] mt-10">
      <h3 className="text-xl font-bold text-white mb-2">{titre}</h3>
      <p className="text-slate-400 text-sm mb-4">{description}</p>
      <img src={image} alt="Image" />
    </div>
  );
}
export default ProjectsCardFunction;
