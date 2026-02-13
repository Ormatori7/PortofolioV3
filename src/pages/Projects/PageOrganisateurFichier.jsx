import PageDevProject from "../../components/ProjectCardPageDev";
import { supabase } from "../../supabaseClient.js";
import { useState, useEffect } from "react";

function PythonOrganisateur({}) {
  const [dataForPage, setDataForPage] = useState(null);
  useEffect(() => {
    const chargementDonnes = async () => {
      const { data: projectInfo, error: projectError } = await supabase
        .from("Project_list")
        .select("*")
        .eq("id", 4)
        .single();

      const { data: projectCards, error: cardsError } = await supabase
        .from("CardDev_content")
        .select("*")
        .eq("project_ID", 4)
        //pas de single car on veut tt les éléments de la page et pas juste un seul
        .order("position", { ascending: true });

      if (!projectError && !cardsError) {
        // console.log("Mes cartes reçues :", projectCards); => debugage pour voir si les cards sont bien la
        setDataForPage({
          ...projectInfo,
          HugeCardData: projectCards,
        });
      } else {
        console.error("Erreur Supabase :", projectError || cardsError);
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
    </>
  );
}
export default PythonOrganisateur;
