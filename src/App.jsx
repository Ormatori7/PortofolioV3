// 1. On ajoute { useState } pour gérer l'état
import { useState } from "react";
import NavBar from "./pages/NavBar.jsx";
import Acceuil from "./pages/Home.jsx";
import ProfilFunction from "./pages/Profil.jsx";
import ProjectsFunction from "./pages/Projects.jsx";

function App() {
  // 2. On initialise l'état sur "home" par défaut
  const [page, setPage] = useState("Acceuil");
  return (
    <div className="bg-black min-h-screen">
      {/* //3. On passe "setPage" à la NavBar pour que les boutons fonctionnent
      //expemple employer et patron */}
      <NavBar page={page} setPage={setPage} />
      <main className="pt-20">
        {/* //logique de telecommande et de télé */}
        {/* 4. LOGIQUE : On affiche selon la valeur de "page" */}
        {page === "Acceuil" && <Acceuil setPage={setPage} />}

        {page === "ProfilFunction" && <ProfilFunction />}

        {page === "ProjectsFunction" && <ProjectsFunction />}
      </main>
    </div>
  );
}

export default App;
