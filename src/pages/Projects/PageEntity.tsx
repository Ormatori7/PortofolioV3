import Page3DProject from "../../components/ProjectCardPage3D";
import ContinuousCarousel from "../../components/Carrousel";
import { supabase } from "../../supabaseClient";
import { useState, useEffect } from "react";
import { Card3D, GalleryItem, Project, AllData3D } from "../../types";

function EntityPage() {
  const [dataForPage, setDataForPage] = useState<AllData3D | null>(null);
  useEffect(() => {
    const chargementDonnes = async () => {
      const { data: projectInfo, error: projectError } = await supabase
        .from("Project_list")
        .select("*")
        .eq("id", 2)
        .single();

      const { data: projectCards, error: cardsError } = await supabase
        .from("Card3D_content")
        .select("*")
        .eq("project_ID", 2)
        //pas de single car on veut tt les éléments de la page et pas juste un seul
        .order("position", { ascending: true });

      const { data: galleryImages, error: galleryError } = await supabase
        .from("Carrousel")
        .select("*")
        .eq("project_ID", 2) // Uniquement les elemnt lié a la page entity
        .order("position", { ascending: true }); //dans l'ordre

      if (
        !projectError &&
        !cardsError &&
        !galleryError &&
        projectInfo &&
        projectCards &&
        galleryImages
      ) {
        const safeProjectInfo = projectInfo as Project; //pas de [] car seul projet
        const safeGallery = galleryImages as GalleryItem[];
        const safeCards = projectCards as Card3D[];
        setDataForPage({
          ...safeProjectInfo,
          HugeCardData: safeCards,
          GalleryFullData: safeGallery.filter((img) => img.type === "auto"),
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
      <Page3DProject datapage={dataForPage} />

      <div className="pb-20 pt-15">
        <h2 className="text-center text-white text-3xl font-black uppercase tracking-tighter mb-10">
          map preview
        </h2>
        <ContinuousCarousel data={dataForPage.GalleryFullData} />
      </div>
    </>
  );
}
export default EntityPage;
