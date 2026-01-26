import ProjectCardPage3D from "../../components/ProjectCardPage3D.jsx";
$;

export default function PageProject({ setPage }) {
  return (
    <div className="text-white p-20">
      <button onClick={() => setPage("ProjectsFunction")}>← Retour</button>
      <h1>Détails du projet</h1>
    </div>
  );
}
