function Navbar({ page, setPage }) {
  return (
    <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-xl border-b border-white/20 transition-all">
      <nav className="flex items-center justify-between px-8 py-4">
        {/* LOGO */}
        <img
          src="/Images/0001.png"
          className="h-10 w-auto hover:scale-105 transition-transform cursor-pointer"
          alt="Logo"
          onClick={() => setPage("Acceuil")}
        />

        <ul className="flex justify-center space-x-8 text-white/50 font-medium">
          <li>
            <button
              onClick={() => setPage("Acceuil")}
              className={`px-6 py-2 rounded-full transition-all duration-300 cursor-pointer ${
                page === "Acceuil"
                  ? "bg-white/10 text-violet-400"
                  : "hover:text-white "
              }`}
            >
              Accueil
            </button>
          </li>
          <li>
            <button
              onClick={() => setPage("ProfilFunction")}
              className={`px-6 py-2 rounded-full transition-all duration-300  cursor-pointer ${
                page === "ProfilFunction"
                  ? "bg-white/10 text-violet-400"
                  : "hover:text-white "
              }`}
            >
              Profil
            </button>
          </li>
          <li>
            <button
              onClick={() => setPage("ProjectsFunction")}
              className={`px-6 py-2 rounded-full transition-all duration-300  cursor-pointer ${
                page === "ProjectsFunction"
                  ? "bg-white/10 text-violet-400"
                  : "hover:text-white "
              }`}
            >
              Projects
            </button>
          </li>
        </ul>

        <div className="bg-violet-500/40 backdrop-blur-md border border-white/20 px-6 py-2 rounded-full text-white text-sm transition-all duration-300 hover:scale-110 cursor-pointer">
          <button className="cursor-pointer" onClick={() => setPage("contact")}>Contactez-moi</button>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
