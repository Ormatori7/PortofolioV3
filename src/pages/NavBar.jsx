function Navbar({ page, setPage }) {
  return (
    <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-xl border-b border-white/20 transition-all">
      <nav className="flex justify-center px-8 py-4">
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
              Home
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
      </nav>
    </header>
  );
}

export default Navbar;
