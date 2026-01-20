// 1. On ajoute { useState }
import { useState } from "react";
import NavBar from "./pages/NavBar.jsx";
import Acceuil from "./pages/MainPage.jsx";
import ProfilFunction from "./pages/Profil.jsx";

function App() {
  // 2. On initialise l'état sur "home" par défaut
  const [page, setPage] = useState("Acceuil");
  return (
    <div className="bg-black min-h-screen">
      //3. On passe "setPage" à la NavBar pour que les boutons fonctionnent
      <NavBar setPage={setPage} />
      <main className="pt-20">
        {/* 4. LOGIQUE : On affiche selon la valeur de "page" */}
        {page === "Acceuil" && <Acceuil setPage={setPage} />}

        {page === "ProfilFunction" && <ProfilFunction />}
      </main>
    </div>
  );
}

export default App;
