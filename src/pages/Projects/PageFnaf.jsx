import Page3DProject from "../../components/ProjectCardPage3D.jsx";
import ContinuousCarousel from "../../components/Carrousel.jsx";
import BoxCarousel from "../../components/CarrouselArrow.jsx";
import { supabase } from "../../supabaseClient.js";
import { useState, useEffect } from "react";

function FnafPage({}) {
  //variable et la function de mise a jour
  const [dataForPage, setDataForPage] = useState(null);
  useEffect(() => {
    const chargementDonnes = async () => {
      //-----LES INFOS DE LA PAGE FNAF-----
      const { data: projectInfo, error: projectError } = await supabase
        .from("Project_list")
        .select("*")
        .eq("id", 1)
        .single();

      //-----LES INFOS DES CARTES DE LA PAGE FNAF-----
      // on precise le data et error pour ne pas les confondre avec ceux de la requete suivante
      const { data: projectCards, error: cardsError } = await supabase
        .from("Card3D_content")
        .select("*")
        .eq("project_ID", 1) // On utilise la clé étrangère pour le filtrage
        .order("position", { ascending: true }); // l'ordre des cartes

      //-----LES IMAGES DU CARROUSEL DE LA PAGE FNAF AUTO/ PAS AUTO-----
      const { data: galleryImages, error: galleryError } = await supabase
        .from("Carrousel")
        .select("*")
        .eq("project_ID", 1) // Uniquement les elemnt lié a la page FNAF
        .order("position", { ascending: true }); //dans l'ordre

      //si aucune erreur dans les trois requetes alors on continue
      if (!projectError && !cardsError && !galleryError) {
        setDataForPage({
          ...projectInfo, // On va chercher ttes les infos d'un coup pour ne pas devoir les ecrire une par une pour la page fnaf
          HugeCardData: projectCards, // On met le tableau des cartes au bon endroit
          MenuImage: galleryImages.filter((img) => img.type === "auto"), // On met le tableau filtré des images du carrousel auto
          // On filtre pour ne garder que les lignes de type "map"
          // On utilise .map pour n'extraire que l'URL de l'image (on transforme l'objet en texte)
          MapImage: galleryImages
            .filter((img) => img.type === "map")
            .map((img) => img.image),
        });
      } else {
        console.error(
          "Erreur Supabase :",
          projectError || cardsError || galleryError,
        );
      }
    };
    chargementDonnes(); // on l'appelle directement pour que ça se lance au demarrage de la page comme d'hab
  }, []);

  //------BARIERE DE SECURITE POUR LE CHARGEMENT DES DATA-----
  if (!dataForPage) {
    return (
      <div className="text-white text-center pt-50 pb-20">
        Chargement du projet...
      </div>
    );
  }

  return (
    <>
      <Page3DProject datapage={dataForPage} />

      <div className="pb-20 pt-15">
        <h2 className="text-center text-white text-3xl font-black uppercase tracking-tighter mb-10">
          Menu Preview
        </h2>
        <ContinuousCarousel data={dataForPage.MenuImage} />
      </div>

      <div className="pb-20 pt-15">
        <h2 className="text-center text-white text-3xl font-black uppercase tracking-tighter mb-10">
          Map preview
        </h2>
        <BoxCarousel images={dataForPage.MapImage} />
      </div>
    </>
  );
}
export default FnafPage;
