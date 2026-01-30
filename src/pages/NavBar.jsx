import { motion, LayoutGroup } from "framer-motion";

function Navbar({ page, setPage }) {
  const NavTableau = [
    { id: "Acceuil", label: "Home" },
    { id: "ProfilFunction", label: "Profil" },
    { id: "ProjectsFunction", label: "Projects" },
  ];

  return (
    <header className="fixed top-8 left-0 w-full z-[100] flex justify-center pointer-events-none">
      <div className="flex bg-white/[0.03] backdrop-blur-2xl border border-white/10 p-1.5 rounded-full shadow-2xl pointer-events-auto">
        <LayoutGroup id="nav-v3">
          {NavTableau.map((tab) => {
            const isActive = page === tab.id;

            return (
              <button
                key={tab.id}
                onClick={() => setPage(tab.id)}
                className={`relative px-6 py-2 text-sm font-semibold cursor-pointer rounded-full outline-none focus:outline-none focus:ring-0 select-none
                  ${isActive ? "text-violet-400" : "text-white/50 hover:text-white"}`}
                style={{ WebkitTapHighlightColor: "transparent" }}
              >
                {isActive && (
                  <motion.div
                    layoutId="active-pill-v3"
                    className="absolute inset-0 bg-white/10 rounded-full z-0"
                    transition={{
                      type: "tween",
                      duration: 0.3,
                      ease: "easeInOut",
                    }}
                  />
                )}
                <span className="relative z-10">{tab.label}</span>
              </button>
            );
          })}
        </LayoutGroup>
      </div>
    </header>
  );
}

export default Navbar;
