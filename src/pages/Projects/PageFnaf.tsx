//pas d'extention car Typescript n'en a pas besoin
import Page3DProject from "../../components/ProjectCardPage3D";
import ContinuousCarousel from "../../components/Carrousel";
import BoxCarousel from "../../components/CarrouselArrow";
import { supabase } from "../../supabaseClient";
import { useState, useEffect } from "react";
import { Project, Card3D, GalleryItem, AllData } from "../../types";



function FnafPage() {
  //variable et la function de mise a jour
  //project car c'est la notice de types.ts et dit que s'il existe il aura cette structure
  // Autorise le sac à être soit un "AllData" soit "vide" , et initialise le sac vide
  
  const [dataForPage, setDataForPage] = useState<AllData | null>(null);
  useEffect(() => {
    const chargementDonnes = async () => {
      //------LA PARTIE DEBALLAGE DES DONNES----------

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
      // on ajoute aussi le fait de verifier que projectInfo possede bien qlq chose
      if (!projectError && !cardsError && !galleryError && projectInfo && projectCards && galleryImages) {
        // On "étiquette" les listes venant de Supabase et on les donne a des variables
        //c'est le test de CONFIANCE (tu jure que variable1 a la structure de GalleryItem)
        const safeProjectInfo = projectInfo as Project; //pas de [] car seul projet
        const safeGallery = galleryImages as GalleryItem[];
        const safeCards = projectCards as Card3D[];
        
        setDataForPage({
          ...safeProjectInfo, // On va chercher ttes les infos d'un coup pour ne pas devoir les ecrire une par une pour la page fnaf
          //on prend aussi les variable etiqueté et non celle qui sont floues
          //on créer les variabel en vert poour stocker les données etiqueté
          HugeCardData: safeCards, // elle n'apparait pas dans la function Page3DProject car elle est utilisé a l'interieur 
          MenuImage: safeGallery.filter((img) => img.type === "auto"), // On met le tableau filtré des images du carrousel auto
          // On filtre pour ne garder que les lignes de type "map"
          // On utilise .map pour n'extraire que l'URL de l'image (on transforme l'objet en texte)
          MapImage: safeGallery
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
    // ici pas de passage de HugeCardData car elle est passé dans dataForPage directement
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
