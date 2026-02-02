import useEmblaCarousel from 'embla-carousel-react';
import { motion } from 'framer-motion';
import AutoScroll from 'embla-carousel-auto-scroll';


const ContinuousCarousel = ({ data }) => {
  // 1. Configuration du carrousel : Boucle infinie + Défilement auto toutes les 3s
  const [emblaRef] = useEmblaCarousel({ loop: true }, [
    AutoScroll({ 
      speed: 1, // Vitesse du défilement (plus le chiffre est haut, plus c'est rapide)
      stopOnInteraction: false, // Ne s'arrête pas si on clique dessus
      stopOnMouseEnter: false, //  s'arrête quand la souris survole pour mieux voir
    })
  ]);

  return (
    // Fenêtre de visualisation (Viewport)
    <div className="overflow-hidden w-full px-4" ref={emblaRef}>
      
      {/* Conteneur des slides (Rail) */}
      <div className="flex -ml-4">
        {data.map((item, index) => (
          <div 
            key={index} 
            // 2. Gestion du nombre d'images visibles : 1 sur mobile, 2 sur tablette, 3 sur PC
            className="flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_33.33%] pl-4 min-w-0"
          >
            {/* 3. Carte au style de ton Portfolio */}
            <motion.div 
              
              className="relative group bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-[2rem] overflow-hidden shadow-2xl transition-all duration-500 "
            >
              {/* Image avec zoom au survol */}
              <div className="aspect-video overflow-hidden relative">
                <img 
                  src={item.image} 
                  alt={item.titre}
                  className="w-full h-full object-cover grayscale-[0.2]  transition-transform duration-700 "
                />
                {/* Dégradé sombre pour faire ressortir le texte */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#050505]/80 via-transparent to-transparent opacity-60" />
              </div>

              {/* Texte en bas de la slide */}
              <div className="p-6 text-center">
                <h4 className="text-white font-bold text-sm tracking-[0.2em] uppercase  transition-colors">
                  {item.titre}
                </h4>
              </div>

              {/* Lueur violette interne au survol */}
              <div className="absolute inset-0 bg-violet-600/5 opacity-0  transition-opacity pointer-events-none" />
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContinuousCarousel;