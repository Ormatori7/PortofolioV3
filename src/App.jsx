//On ajoute { useState } pour gérer l'état et useEffect pour revenir en haut de la page
//c'est ici qu'on importe nos pages
import { useState, useEffect } from "react";
import NavBar from "./pages/NavBar.jsx";
import Acceuil from "./pages/Home.jsx";
import ProfilFunction from "./pages/Profil.jsx";
import ProjectsFunction from "./pages/Projects.jsx";
import PageProject from "./pages/Projects/PageProject1.jsx";
import FnafPage from "./pages/Projects/PageFnaf.jsx";
import Background from "./components/Background.jsx";
import Footer from "./components/Footer.jsx";
import PageEntity from "./pages/Projects/PageEntity.jsx";

function App() {
  // On initialise l'état sur "home" par défaut
  const [page, setPage] = useState("Acceuil");

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant", // "instant" évite de voir le défilement pendant le changement de contenu
    });
  }, [page]);

  return (
    <div>
      <Background />
      {/* On passe "setPage" à la NavBar pour que les boutons fonctionnent
      //expemple employer et patron */}
      <NavBar 
      page={page} 
      setPage={setPage} 
    
    />

      <main className={page.startsWith("Page") ? "pt-0" : "pt-20"}>
        
        {/* //logique de telecommande et de télé */}

        {page === "Acceuil" && <Acceuil setPage={setPage} />}

        {page === "ProfilFunction" && <ProfilFunction />}

        {page === "ProjectsFunction" && <ProjectsFunction setPage={setPage} />}

        {/* Page de project */}
        {page === "PageProject1" && <PageProject setPage={setPage} />}

        {page === "PageFnaf" && <FnafPage setPage={setPage} />}

        {page === "PageEntity" && <PageEntity setPage={setPage} />}
      </main>
      <Footer setPage={setPage} />
    </div>
  );
}

export default App;
