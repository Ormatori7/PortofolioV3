function ProjectsCardFunction({ titre, description, image }) {
  return <div className="h-0.5 bg-red/500 text-white flex flex-col items-center justify-center">
    <h3 className="text-xl font-bold text-white mb-2">{titre}</h3>
    <p className="text-slate-400 text-sm mb-4">{description}</p>
  </div>;
}
export default ProjectsCardFunction;