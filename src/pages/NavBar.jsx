// src/components/Navbar.jsx
function Navbar({ setPage }) {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black backdrop-blur-xl border-b border-white/20 transition-all">
      <nav className="flex items-center justify-between px-8 py-4">
        {/* LOGO */}
        <img
          src="/Images/0001.png"
          className="h-10 w-auto hover:scale-105 transition-transform cursor-pointer"
          alt="Logo"
          onClick={() => setPage("home")}
        />

        <ul className="flex justify-center space-x-8 text-white/50 font-medium">
          <li>
            <button
              onClick={() => setPage("home")}
              className="bg-red-800 px-6 py-2 rounded-full text-violet-400 transition-all duration-300 hover:text-white"
            >
              Accueil
            </button>
          </li>
          <li>
            <button
              onClick={() => setPage("profil")}
              className="bg-red-800 px-6 py-2 rounded-full transition-all duration-300 hover:text-white"
            >
              Profil
            </button>
          </li>
          <li>
            <button
              onClick={() => setPage("project")}
              className="bg-red-800 px-6 py-2 rounded-full transition-all duration-300 hover:text-white"
            >
              Projets
            </button>
          </li>
        </ul>

        {/* BOUTON CONTACT */}
        <div className="bg-blue-800 backdrop-blur-md border border-white/20 px-6 py-2 rounded-full text-white text-sm transition-all duration-300 hover:scale-110 hover:bg-violet-500/40 cursor-pointer">
          <button onClick={() => setPage("contact")}>Contactez-moi</button>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
