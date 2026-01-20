function BoutonProfil({ texte, action }) {
  return (
    <button
      onClick={action}
      className="px-8 py-3 bg-violet-600 text-white rounded-full font-semibold hover:bg-violet-700 transition-all transform hover:scale-105 cursor-pointer"
    >
      {texte}
    </button>
  );
}

function Acceuil({ setPage }) {
  return (
    <section className="min-h-screen w-full flex flex-col items-center justify-center px-4">
      {/* Conteneur de texte */}
      <div className="text-center">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
          Bienvenue dans mon <span className="text-violet-500">portofolio</span>
        </h1>

        <p className="text-slate-400 text-xl max-w-2xl mx-auto mb-10">
          la suite est en cours de construction...
        </p>

        {/* Bouton d'action */}
        <BoutonProfil
          texte="A propos de moi"
          action={() => setPage("ProfilFunction")}
        />
      </div>
    </section>
  );
}

export default Acceuil;
