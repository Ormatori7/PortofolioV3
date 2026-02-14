import PageDevProject from "../../components/ProjectCardPageDev";
import ContinuousCarousel from "../../components/Carrousel.jsx";
import { supabase } from "../../supabaseClient";
import { useState, useEffect } from "react";
import { cardDev, GalleryItem, Project, AllDataDev } from "../../types";


function PythonAi() {
  const [dataForPage, setDataForPage] = useState<AllDataDev| null>(null);
  useEffect(() => {
    const chargementDonnes = async () => {
      const { data: projectInfo, error: projectError } = await supabase
        .from("Project_list")
        .select("*")
        .eq("id", 3)
        .single();

      const { data: projectCards, error: cardsError } = await supabase
        .from("CardDev_content")
        .select("*")
        .eq("project_ID", 3)
        //pas de single car on veut tt les éléments de la page et pas juste un seul
        .order("position", { ascending: true });

      const { data: galleryImages, error: galleryError } = await supabase
        .from("Carrousel")
        .select("*")
        .eq("project_ID", 3) // Uniquement les elemnt lié a la page pyhton
        .order("position", { ascending: true }); //dans l'ordre

      if (!projectError && !cardsError && !galleryError && projectInfo && projectCards && galleryImages) {
        const safeProjectInfo= projectInfo as Project;
        const safeCards = projectCards as cardDev[];
        const safeGallery = galleryImages as GalleryItem[];
        setDataForPage({
          ...safeProjectInfo,
          HugeCardData: safeCards,
          GalleryData: safeGallery.filter((img) => img.type === "auto"),
        });
      } else {
        console.error(
          "Erreur Supabase :",
          projectError || cardsError || galleryError,
        );
      }
    };
    chargementDonnes();
  }, []);

  if (!dataForPage) {
    return (
      <div className="text-white text-center pt-50 pb-20">
        Chargement du projet...
      </div>
    );
  }

  return (
    <>
      <PageDevProject datapage={dataForPage} />

      <div className="pb-20 pt-15">
        <h2 className="text-center text-white text-3xl font-black uppercase tracking-tighter mb-10">
          movement preview
        </h2>
        <ContinuousCarousel data={dataForPage.GalleryData} />
      </div>
    </>
  );
}
export default PythonAi;
