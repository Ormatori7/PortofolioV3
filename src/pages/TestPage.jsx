// src/pages/Home.jsx
function TestHome() {
  return (
    <section className="min-h-screen w-full flex flex-col items-center justify-center px-4">
      {/* Conteneur de texte */}
      <div className="text-center">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
          Bienvenue dans mon <span className="text-violet-500">Univers</span>
        </h1>

        <p className="text-slate-400 text-xl max-w-2xl mx-auto mb-10">
          Développeur passionné par React, je crée des interfaces fluides et
          modernes. Explore mon travail et mes compétences ci-dessous.
        </p>

        {/* Bouton d'action */}
        <button className="px-8 py-3 bg-violet-600 text-white rounded-full font-semibold hover:bg-violet-700 transition-all transform hover:scale-105">
          Me découvrir
        </button>
      </div>
    </section>
  );
}

export default TestHome;
