function BoutonVersProfil({ texte, action }) {
  return (
    <button
      onClick={action}
      className="bg-violet-800/50 backdrop-blur-md border border-white/20 px-8 py-3 rounded-full text-white text-sm transition-all duration-300 hover:scale-110 hover:bg-violet-500/40 cursor-pointer"
    >
      
      {texte}
    </button>
  );
}

function Acceuil({ setPage }) {
  return (
    <section className="min-h-[90vh] w-full flex flex-col items-center justify-center px-4">
      {/* Conteneur de texte */}
      <div className="text-center">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
          Bienvenue dans mon <span className="text-violet-500">portofolio</span>
        </h1>

        <p className="text-white text-xl max-w-2xl mx-auto mb-10">
          la suite est en cours de construction...
        </p>

        
        <BoutonVersProfil
          texte="About me"
          action={() => setPage("ProfilFunction")}
        />
      </div>
    </section>
  );
}

export default Acceuil;
