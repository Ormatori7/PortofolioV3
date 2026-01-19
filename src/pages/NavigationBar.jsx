
function Navigation({ setPage }) {
  return (
     <section
      className="fixed top-0 left-0 w-full z-50 bg-white/4 backdrop-blur-xl border-b border-white/20 transition-all"
    >
      <nav className="flex items-center justify-between px-8 py-4 grid-cols-3">
        <img
          src="./Images/0001.png"
          className="h-10 w-auto hover:scale-105 transition-transform"
          alt="Logo"
        />

        <ul className="flex justify-center space-x-8 text-white/50 font-medium">
          <li>
            <button
              onClick={() => setPage("Home")}
              className="bg-violet-500/10 px-6 py-2 rounded-full text-violet-400 transition-all duration-300 hover:text-white"
            >
              Accueil
            </button>
          </li>
          <li>
            <a
              href="#profil"
              className="px-6 py-2 rounded-full transition-all duration-300 scale-100 hover:text-white"
              >Profil</a
            >
          </li>
          <li>
            <a
              href="#project"
              className="px-6 py-2 rounded-full transition-all duration-300 hover:text-white scale-100"
              >Projects</a
            >
          </li>
        </ul>

        <div
          className="bg-violet-500/20 backdrop-blur-md border border-white/20 px-6 py-2 rounded-full text-white text-sm transition-all duration-300 hover:scale-110 hover:bg-violet-500/40"
        >
          <ul>
            <li>
              <a href="">Contactez-moi</a>
            </li>
          </ul>
        </div>
      </nav>
    </section>
  );
}

export default Navigation;