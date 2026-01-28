//On ajoute { useState } pour gérer l'état
//c'est ici qu'on importe nos pages 
import { useState } from "react";
import NavBar from "./pages/NavBar.jsx";
import Acceuil from "./pages/Home.jsx";
import ProfilFunction from "./pages/Profil.jsx";
import ProjectsFunction from "./pages/Projects.jsx";
import PageProject from "./pages/Projects/PageProject1.jsx";
import FnafPage from "./pages/Projects/PageFnaf.jsx";
import Background from "./components/Background.jsx";

function App() {
  // On initialise l'état sur "home" par défaut
  const [page, setPage] = useState("Acceuil");
  return (
    <div>
      <Background />
      {/* On passe "setPage" à la NavBar pour que les boutons fonctionnent
      //expemple employer et patron */}
      { !page.startsWith("Page") && <NavBar page={page} setPage={setPage} /> }
      <main className={page.startsWith("Page") ? "pt-0" : "pt-20"}>
        {/* //logique de telecommande et de télé */}

        {page === "Acceuil" && <Acceuil setPage={setPage} />}

        {page === "ProfilFunction" && <ProfilFunction />}

        {page === "ProjectsFunction" && <ProjectsFunction setPage={setPage} />}


        {/* Page de project */}
        {page === "PageProject1" && <PageProject setPage={setPage} />}
          
        {page === "PageFnaf" && <FnafPage setPage={setPage} />}
      </main>
    </div>
  );
}

export default App;
